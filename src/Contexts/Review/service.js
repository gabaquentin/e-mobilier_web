import React from "react";
import { db } from "../../firebase";
import { UserContext } from "../User/userContext";

export function Add_Review(review) {
  var Today = new Date();
  var dd = String(Today.getDate()).padStart(2, "0");
  var mm = String(Today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = Today.getFullYear();

  var time =
    Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds();
  var date = dd + "/" + mm + "/" + yyyy + " " + time;

  return db.collection("Reviews").add({
    user: {
      id: review.user.id,
      firstName: "",
      displayName: review.user.lastName,
      email: review.user.email,
    },
    object: {
      type: "listings",
      id: review.object.id,
    },
    review: review.review,
    rate: {
      quality: review.rate.quality,
      location: review.rate.quality,
      price: review.rate.price,
      service: review.rate.service,
      total: review.rate.total,
    },
    date: date,
  });
}

export function LikeOrDisLike(like) {
  var info = {
    review: like.review,
    user: like.user,
  };
  console.log(info); 
  var Today = new Date();
  var dd = String(Today.getDate()).padStart(2, "0");
  var mm = String(Today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = Today.getFullYear();

  var time =
    Today.getHours() + ":" + Today.getMinutes() + ":" + Today.getSeconds();
  var date = dd + "/" + mm + "/" + yyyy + " " + time;

  db.collection("Dislikes")
    .where("review", "==", info.review)
    .where("user", "==", info.user)
    .get()
    .then((query) => {
      console.log(query);
      if (query.size > 0) {
        console.log("OK");
        query.forEach((doc) => {
          db.collection("Dislikes").doc(doc.id).delete();
        });
      } else {
        db.collection("Dislikes").add({
          date: date,
          user: info.user,
          review: info.review,
        });
      }
    });
  // db.collection("Dislikes")
  //   .where("review", "==", like.review)
  //   .where("user", "==", like.user)
  //   .get()
  //   .then((querySnapshot) => {
  //     if (querySnapshot.size > 0 ) {
  //       querySnapshot.forEach((doc) => {
  //         console.log(doc.data());
  //         //doc.data() is never undefined for query doc snapshots
  //         db.collection("Dislikes").doc(doc.id).update({
  //           date: date,
  //           user: like.user,
  //           review: like.review,
  //         });
  //       });
  //     }else{
  //       console.log("No");
  //       db.collection("Dislikes").add({
  //         date: date,
  //         user: like.user,
  //         review: like.review,
  //       });
  //     }
  //   })
  //   .catch((error) => {
  //       console.log("Error");
  //   });
}

export function get_Reviews(type) {
  const reviews = [];
  db.collection("Reviews").onSnapshot((querySnapshot) => {
    querySnapshot.docChanges().forEach((change) => {
      reviews.push(change.doc.data());
    });
  });

  return reviews;
}
