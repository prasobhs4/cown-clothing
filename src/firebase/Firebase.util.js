import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

  const config = 
  {
    apiKey: "AIzaSyC1Ogcu9p6txdnvLQorjlHn7UA7OPKquuY",
    authDomain: "cwn-db-dcd63.firebaseapp.com",
    databaseURL: "https://cwn-db-dcd63.firebaseio.com",
    projectId: "cwn-db-dcd63",
    storageBucket: "cwn-db-dcd63.appspot.com",
    messagingSenderId: "939662263300",
    appId: "1:939662263300:web:b8fd194daa095c5bcd2151",
    measurementId: "G-Y2S1DX30PD"
  };

 export const createUserProfileDocument = async (userAuth,additionalData) => {
   console.log(userAuth);
   if(!userAuth) return;

  const userref = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userref.get();
  console.log(snapShot);
  if(!snapShot.exists)
  {
     console.log(userAuth);
      const {displayName,email,photoURL} = userAuth;
      const createdAt = new Date()
      try{
        await userref.set({
            displayName,
            email,
            photoURL,
            createdAt,
            ...additionalData
        })
       }
     
       catch(error){
           console.log('error creating user' ,error.message)
     
       }
  }

  return userref;
 


 } 

 firebase.initializeApp(config);

 export const auth= firebase.auth();
 export const firestore = firebase.firestore();

 const provider = new firebase.auth.GoogleAuthProvider();
 provider.setCustomParameters({prompt:'select_account'});
 
 export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;

 