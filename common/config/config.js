// Initialize Firebase
const config = {
    apiKey: "AIzaSyAlKlmyzEd_yIns0vY7QwOVCHGXf8QC5wU",
    authDomain: "alkanzaimages.firebaseapp.com",
    databaseURL: "https://alkanzaimages.firebaseio.com",
    projectId: "alkanzaimages",
    storageBucket: "alkanzaimages.appspot.com",
    messagingSenderId: "1011748188051"
};
firebase.initializeApp(config);
const mainRef = firebase.database().ref();
