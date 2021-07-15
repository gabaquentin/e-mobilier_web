import app, { db } from '../../firebase';
import { NotificationManager } from "react-notifications";
import Swal from 'sweetalert2';

export const getListingById = Id => {
    return db.collection('Listings')
        .doc(Id)
        .get();
}

export const getListingByOwner = OwnerId => {
    return db.collection('Listings')
        .where('Owner', '==', OwnerId)
        .get();
}

export const updateListing = (Field, ListingId) => {
    return db.collection('Listings')
        .doc(ListingId)
        .update(Field);
}

export const addListing = (UserId, Values) => {
    var Today = new Date();
    var dd = String(Today.getDate()).padStart(2, '0');
    var mm = String(Today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = Today.getFullYear();

    Today = mm + '/' + dd + '/' + yyyy;

    return db.collection('Listings')
        .add({
            Owner: UserId,
            Creation_Date: Today,
            Modified_Date: false,
            Archived_Date: false,
            Status: 0, // 0 desactivate , 1 activate , 2 archived
            Title: Values["Title"],
            Location_Contact: Values["Location_Contact"],
            Header_Media: { Media: "", Type: Values["Header_Media"].Type },
            Details: Values["Details"].Details,
            Facilities: "",
            Content_Widgets: {
                Gallery: { Display: Values["Content_Widgets"].Content_Widgets.gallery[0], Media: [] },
                Promo: { Display: Values["Content_Widgets"].Content_Widgets.promo[0], Media: Values["Content_Widgets"].Content_Widgets.promo[1] },
                Slider: { Display: Values["Content_Widgets"].Content_Widgets.slider[0], Media: [] }
            },
            Working_Hours: Values["Working_Hours"].Working_Hours,
            Plan_Openning: Values["Working_Hours"].Plan_Openning,
            Sidebar_Widget: Values["Sidebar_Widget"].Sidebar_Widget,
            Social: Values["Social"].Social
        });
};

export const addListing_next = (DocRef, Values, UserId) => {
    let storageRef = "";
    let child = "";

    if (Values["Header_Media"].Type.background_image) {
        const file_name = "Background_Image";
        const file_ext = Values["Header_Media"].Media.type.split('/').pop();
        const dir_name = "Header-Media";

        uploadMedia(storageRef, child, db, file_name, file_ext, dir_name, Values["Header_Media"].Media, DocRef.id, UserId);

    } else if (Values["Header_Media"].Type.caroussel) {
        let i = 0;
        for (const image of Values["Header_Media"].Media) {

            const file_name = "Caroussel" + i;
            const file_ext = image.type.split('/').pop();
            const dir_name = "Header-Media"

            uploadMedia(storageRef, child, db, file_name, file_ext, dir_name, image, DocRef.id, UserId);

            i++;
        }

    } else {
        db.collection('Listings').doc(DocRef.id).update({
            'Header_Media.Media': Values["Header_Media"].Media
        });
    }

    if (Values["Content_Widgets"].Content_Widgets.gallery[0]) {
        let i = 0;
        for (const image of Values["Content_Widgets"].Content_Widgets.gallery[1]) {

            const file_name = "Gallery" + i;
            const file_ext = image.type.split('/').pop();
            const dir_name = "Contents-Widgets/Gallery"

            uploadMedia(storageRef, child, db, file_name, file_ext, dir_name, image, DocRef.id, UserId);
            i++;
        }
    }

    if (Values["Content_Widgets"].Content_Widgets.slider[0]) {
        let i = 0;
        for (const image of Values["Content_Widgets"].Content_Widgets.slider[1]) {

            const file_name = "Slider" + i;
            const file_ext = image.type.split('/').pop();
            const dir_name = "Contents-Widgets/Slider"

            uploadMedia(storageRef, child, db, file_name, file_ext, dir_name, image, DocRef.id, UserId);
            i++;
        }
    }

    if (Values["Title"].Type === "House" || Values["Title"].Type === "Restaurant") {
        db.collection('Listings').doc(DocRef.id).update({
            Facilities: Values["Facilities"].Facilities
        });
    }
}

function uploadMedia(storageRef, child, db, file_name, file_ext, dir_name, file, doc_id, user_id) {
    storageRef = app.storage().ref();
    child = 'Listings/' + user_id + '/' + doc_id + '/' + dir_name + '/' + file_name + '.' + file_ext;

    const urlAdsRef = storageRef.child(child);
    let uploadTask = urlAdsRef.put(file);
    uploadTask.on('state_changed',
        (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (progress === 100) {
                Swal.clickConfirm();
            }
        },
        (error) => {
            NotificationManager.error('your file ' + file_name + ' has not been uploaded to ' + dir_name);
        },
        () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                if (file_name.includes("Background_Image")) {
                    db.collection('Listings').doc(doc_id).update({
                        'Header_Media.Media': downloadURL
                    });
                } else if (file_name.includes("Caroussel")) {
                    db.collection('Listings').doc(doc_id).update({
                        'Header_Media.Media': app.firestore().app.firebase_.firestore.FieldValue.arrayUnion(downloadURL)
                    });
                } else if (file_name.includes("Gallery")) {
                    db.collection('Listings').doc(doc_id).update({
                        'Content_Widgets.Gallery.Media': app.firestore().app.firebase_.firestore.FieldValue.arrayUnion(downloadURL)
                    });
                } else if (file_name.includes("Slider")) {
                    db.collection('Listings').doc(doc_id).update({
                        'Content_Widgets.Slider.Media': app.firestore().app.firebase_.firestore.FieldValue.arrayUnion(downloadURL)
                    });
                }


            });

        }
    );
}