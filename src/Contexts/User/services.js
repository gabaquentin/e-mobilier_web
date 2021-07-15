import { db } from '../../firebase';

export const createUser = (UserId, FirstName, LastName, Phone, Email) => {
    return db.collection('Users')
        .doc(UserId)
        .set({
            First_Name: FirstName,
            displayName: LastName,
            Phone: Phone,
            photoUrl: '',
            Address: '',
            About: '',
            Role: 'CUSTOMER',
            Email: Email
        });
};

export const updateUserRole = (Id, Role) => {
    return db.collection('Users')
        .doc(Id)
        .update({
            Role: Role
        });
};


export const getUserById = Id => {
    return db.collection('Users')
        .where('Email', '==', Id)
        .get();
};

export const getUserByEmail = Email => {
    return db.collection('Users')
        .where('Email', '==', Email)
        .get();
};

export const getUserByName = Name => {
    return db.collection('Users')
        .where('displayName', '==', Name)
        .get();
};