import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDRlX6H_-boBPsDbn29FV8FGHM7G7hOLjY',
  authDomain: 'building-covers.firebaseapp.com',
  databaseURL: 'https://building-covers.firebaseio.com',
  projectId: 'building-covers',
  storageBucket: 'building-covers.appspot.com',
  messagingSenderId: '292003191846',
  appId: '1:292003191846:web:54b1a9c3b1beddb5501ae7',
  measurementId: 'G-K5XX09LD23',
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();

export const firebaseAuth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () =>
  firebaseAuth.signInWithPopup(googleAuthProvider);
export const signOut = () => firebaseAuth.signOut();

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reference to the place in DB where user profile might be.
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch document form that location.
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const createdAt = new Date();
    const { displayName, email, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (ex) {
      console.error('Error creating a user:', ex);
    }
  }

  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    const userDocument = await firestore
      .collection('users')
      .doc('uid')
      .get();

    return {
      uid,
      ...userDocument.data(),
    };
  } catch (ex) {
    console.error('get user document', ex);
  }
};

export default firebase;
