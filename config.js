import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-U5Ig-229PmgX93JoiEjgNwDrTIeFbTo",
    authDomain: "pepperscjenik.firebaseapp.com",
    projectId: "pepperscjenik",
    storageBucket: "pepperscjenik.appspot.com",
    messagingSenderId: "254988158281",
    appId: "1:254988158281:web:6eb9c3dc199551efbe0698",
    databaseURL: 'https://pepperscjenik.firebaseio.com'
  }

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

export {firebase}