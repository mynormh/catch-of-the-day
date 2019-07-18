import Rebase from 're-base';
import * as firebase from 'firebase/app';
import 'firebase/database';

// Create firebase app
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBkau_hb0CTw2GT2jJDgg-tbY8zT3ogY0g',
  authDomain: 'catch-of-the-day-mynor.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-mynor.firebaseio.com'
});

// Create Rebase bindings
const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
