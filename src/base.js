import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA5cawygIq5RoJ_JhWuVR--i105bdH4moU",
    authDomain: "catch-of-the-day-eric-wi-b9879.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-eric-wi-b9879.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//this is a named export
export { firebaseApp };

//this is a default export
export default base;