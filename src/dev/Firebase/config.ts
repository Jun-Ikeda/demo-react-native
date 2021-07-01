import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA1vgRVswrYYDEWulytx28wtK0qiFDVKqI',
  authDomain: 'react-native-demo-9ff61.firebaseapp.com',
  projectId: 'react-native-demo-9ff61',
  storageBucket: 'react-native-demo-9ff61.appspot.com',
  messagingSenderId: '789321901297',
  appId: '1:789321901297:web:e49cf0e208131f02e33550',
  measurementId: 'G-9M06YZ0GFD',
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

// firebase.auth();
export const firestore = firebase.firestore();
// firebase.database();
// firebase.storage();
