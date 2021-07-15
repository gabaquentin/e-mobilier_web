import { db } from '../../firebase';

export const createPartner = (UserId, Name, Email, Types, Org) => {
    return db.collection('Partners')
        .doc(UserId)
        .set({
            Name: Name,
            Email: Email,
            Phone: "",
            Types: Types,
            Org: Org,
            Working_Hours: {
                "Monday": "9:00 - 17:30",
                "Tuesday": "9:00 - 17:30",
                "Wednesday": "9:00 - 17:30",
                "Thursday": "9:00 - 17:30",
                "Friday": "9:00 - 17:30",
                "Saturday": "9:00 - 15:00",
                "Sunday": "Closed",
            }
        });
};

export const getPartnerById = UserId => {
    return db.collection('Partners')
        .doc(UserId)
        .get();
};