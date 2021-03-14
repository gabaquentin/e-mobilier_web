import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from "../../../Contexts/AuthContext";
import app from '../../../firebase';

import 'react-notifications/lib/notifications.css';
import { NotificationManager } from 'react-notifications';

import { appendScript } from '../../../Assets/utils/appendScript';

import PhoneInput from 'react-phone-number-input';

import Swal from 'sweetalert2';

import { isValidPhoneNumber } from 'react-phone-number-input';

const Profile = (props) => {

    const [modify, setModify] = useState(false);
    const [disabled, setdisabled] = useState(false);
    const { reauthenticate, updateEmail, currentUser } = useAuth();
    const [phone, setPhone] = useState(props.user.Phone);
    const [downloadUrl, setDownloadUrl] = useState(props.user.photoUrl);
    const first_nameRef = useRef();
    const last_nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const aboutRef = useRef();
    const avatarRef = useRef();

    function uploadAvatar(storageRef, child, db) {
        storageRef = app.storage().ref();
        child = 'Users/' + props.state.user.uid + '/Avatar.' + document.getElementById('avatar-input').files[0].type.split('/').pop();

        const urlAdsRef = storageRef.child(child);
        let uploadTask = urlAdsRef.put(document.getElementById('avatar-input').files[0]);
        uploadTask.on('state_changed',
            (snapshot) => {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

            },
            (error) => {
                NotificationManager.error('your avatar has not been uploaded');
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                    db.collection('Users').doc(props.state.user.uid).update({ photoUrl: downloadURL });
                    setDownloadUrl(downloadURL);
                });

            }
        );
    }

    async function changeEmai(db) {
        const { value: password } = await Swal.fire({
            title: 'Change Email ?',
            input: 'password',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yes, change!',
            inputLabel: 'Password',
            inputPlaceholder: 'Enter your password',
            inputAttributes: {
                maxlength: 10,
                autocapitalize: 'off',
                autocorrect: 'off'
            }
        })

        if (password) {
            await reauthenticate(password).then(function () {
                updateEmail(emailRef.current.value);

            }).catch(function (error) {
                if (error.code === "auth/wrong-password") {
                    NotificationManager.error('Reconnect to modify your profile', 'Wrong password');
                }
                else {
                    NotificationManager.error('Reconnect to modify your profile', 'An error happened');
                }
                setTimeout(() => { props.dispatch({ type: "disconnected" }); }, 3000);
            });
        }
    }

    function updateProfile(db) {

        db.collection('Users').doc(props.state.user.uid).update({
            First_Name: first_nameRef.current.value,
            displayName: last_nameRef.current.value,
            Phone: phone,
            Address: addressRef.current.value,
            About: aboutRef.current.value,
            Email: emailRef.current.value
        });
        currentUser.updateProfile({
            displayName: last_nameRef.current.value,
            phoneNumber: phone,
            email: emailRef.current.value,
            photoURL: downloadUrl
        })
        
        NotificationManager.info('Your profile up to date');
        setModify(false);
        setdisabled(false);
        props.dispatch({ type: "connected" });
    }

    function editProfile(e) {
        e.preventDefault();
        try {
            setdisabled(true);
            if (first_nameRef.current.value == props.user.First_Name && last_nameRef.current.value == props.user.displayName && emailRef.current.value == props.user.Email && addressRef.current.value == props.user.Address && aboutRef.current.value == props.user.About && phone == props.user.Phone && !document.getElementById('avatar-input').files[0]) {
                NotificationManager.info('Nothing to update');
                setModify(false);
                setdisabled(false);
            } else {
                const db = app.firestore();
                let storageRef = "";
                let child = "";
                const promises = [];

                if (isValidPhoneNumber(phone)) {
                    if (emailRef.current.value != props.user.Email) {
                        promises.push(changeEmai(db));
                    }
                    if (document.getElementById('avatar-input').files[0]) {
                        promises.push(uploadAvatar(storageRef, child, db));
                    }

                    Promise.all(promises).then(() => {
                        updateProfile(db);
                    }).catch((error) => {
                        console.log(error)
                        NotificationManager.info('Please try again some error occured');
                        setdisabled(false);
                    }).finally(() => {

                    })
                } else {
                    NotificationManager.error('Invalid phone number');
                    setdisabled(false);
                }
                 
            }
        } catch (error) {

            console.log(error)

        }
    }

    return (
        <div className="col-md-9">
            <div className="dashboard-title fl-wrap" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <h3 style={{ width: '10em', marginTop: '1em', marginRight: '1em' }}>Your Profile</h3>
                <div className="custom-form">
                    {modify ? <button className="btn  color2-bg  float-btn " disabled={disabled} onClick={editProfile}>Save Changes<i className="fal fa-save"></i></button> : <button className="btn  color2-bg  float-btn " onClick={() => { setModify(true) }}>Enable<i className="fal fa-edit"></i></button>}
                </div>
            </div>
            {/* profile-edit-container*/}
            <div className="profile-edit-container fl-wrap block_box">
                <div className="custom-form">
                    <div className="row">
                        <div className="col-sm-6">
                            <label>First Name <i className="fal fa-user"></i></label>
                            {modify ? <input type="text" style={{ borderColor: '#5ECEB1' }} placeholder="Fisrt Name" defaultValue={props.user.First_Name} ref={first_nameRef} />

                                    : <input disabled style={{ borderColor: '#CF382D' }} type="text" placeholder="Fisrt Name" defaultValue={props.user.First_Name} />
                            }
                        </div>
                        <div className="col-sm-6">
                            <label>Last Name <i className="fal fa-user"></i></label>
                            {modify ? <input type="text" style={{ borderColor: '#5ECEB1' }} placeholder="Last Name" defaultValue={props.user.displayName} ref={last_nameRef} />

                                    : <input disabled style={{ borderColor: '#CF382D' }}type="text" placeholder="Last Name" defaultValue={props.user.displayName}  />
                            }
                        </div>
                        <div className="col-sm-6">
                            <label>Email Address<i className="far fa-envelope"></i>  </label>
                            {modify ? <input type="email" style={{ borderColor: '#5ECEB1' }} placeholder="Email" defaultValue={props.user.Email} ref={emailRef} />

                                    : <input disabled style={{ borderColor: '#CF382D' }} type="email" placeholder="Email" defaultValue={props.user.Email} />
                            }
                        </div>
                        <div className="col-sm-6">
                            <label>Phone </label>
                            {modify ? <PhoneInput class="nice-select chosen-select" id="phone-register-input" placeholder="Enter phone number" value={phone} onChange={setPhone} readonly />

                                    : <PhoneInput disabled style={{ borderColor: '#5ECEB1' }} class="nice-select chosen-select" id="phone-register-input" placeholder="Enter phone number" value={phone} readonly />
                            }
                        </div>
                        <div className="col-sm-6">
                            <label> Address <i className="fas fa-map-marker"></i>  </label>
                            {modify ? <input type="text" style={{ borderColor: '#5ECEB1' }} placeholder="Cameroon,Yaounde Biyem-Assi Lycee" defaultValue={props.user.Address} ref={addressRef} />

                                    : <input disabled style={{ borderColor: '#CF382D' }} type="text" placeholder="Cameroon,Yaounde Biyem-Assi Lycee" defaultValue={props.user.Address}/>
                            }
                        </div>

                    </div>
                    <label> Notes</label>
                    {modify ? <textarea cols="40" rows="3" placeholder="About Me" style={{ marginBottom: '20px', borderColor: '#5ECEB1' }} defaultValue={props.user.About} ref={aboutRef} ></textarea>

                            : <textarea disabled cols="40" rows="3" placeholder="About Me" style={{marginBottom: '20px', borderColor: '#CF382D'}} defaultValue={props.user.About}></textarea>
                    }
                    <div className="clearfix"></div>
                    <label>Change Avatar</label>
                    <div className="clearfix"></div>
                    <div className="listsearch-input-item fl-wrap">
                        {modify ? (
                            <div className="fuzone" style={{ borderColor: '#5ECEB1' }}>
                                <form id="avatar-form">
                                    <div className="fu-text">
                                        <span><i className="fal fa-images"></i> Click here or drop files to upload</span>
                                        <div className="photoUpload-files fl-wrap"></div>
                                    </div>
                                    <input type="file" className="upload" accept="image/x-png,image/gif,image/jpeg" id="avatar-input"/>
                                </form>
                            </div>
                        )

                            : (
                                <div className="fuzone" style={{ borderColor: '#CF382D' }}>
                                    <form >
                                        <div className="fu-text">
                                            <span><i className="fal fa-arrow-up"></i> You need to enable editing to upload file</span>
                                            <div className="photoUpload-files fl-wrap"></div>
                                        </div>
                                         <input disabled type="file" className="upload" ref={avatarRef} />
                                    </form>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
                {/* profile-edit-container end*/}
        </div>
    );
}

export default Profile;