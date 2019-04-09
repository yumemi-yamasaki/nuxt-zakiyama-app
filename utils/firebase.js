import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCaNSoyN7vlfX_a8zjgMxdB9HjOhy66Ps8",
    authDomain: "nuxt-zakiyama-app.firebaseapp.com",
    databaseURL: "https://nuxt-zakiyama-app.firebaseio.com",
    projectId: "nuxt-zakiyama-app",
    storageBucket: "nuxt-zakiyama-app.appspot.com",
    messagingSenderId: "726050462461"
  };
  firebase.initializeApp(config);

  export default firebase;