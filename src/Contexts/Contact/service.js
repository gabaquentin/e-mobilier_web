import React from "react";
import  { db } from '../../firebase';
import { UserContext } from "../User/userContext";

export function Add_Contact(contact) {
    return db.collection("Contacts").add({
        user : contact.user,
        body: contact.body,
        subject: contact.subject,
      });
  }
