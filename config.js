import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB-U5Ig-229PmgX93JoiEjgNwDrTIeFbTo",
    authDomain: "pepperscjenik.firebaseapp.com",
    projectId: "pepperscjenik",
    storageBucket: "pepperscjenik.appspot.com",
    messagingSenderId: "254988158281",
    appId: "1:254988158281:web:07a280edd2b16990be0698",
    databaseURL: 'https://pepperscjenik.firebaseio.com'
  }

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

export {firebase}