import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: 'AIzaSyCrhBW63SM95ZUKCf6EsxC1CtzGhzdJBtQ',
//   authDomain: 'goit-js10-films-library.firebaseapp.com',
//   databaseURL:
//     'https://goit-js10-films-library-default-rtdb.europe-west1.firebasedatabase.app/',
//   projectId: 'goit-js10-films-library',
//   storageBucket: 'goit-js10-films-library.appspot.com',
//   messagingSenderId: '365608496961',
//   appId: '1:365608496961:web:88f6a83f1a1fc4849dfbc0',
//   measurementId: 'G-5Z0M6YF9RQ',
// };


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyD2td3YLiA5k312uFwFLO2eRIA3Fsry6oc",
  authDomain: "test-project-1967e.firebaseapp.com",
  databaseURL: "https://test-project-1967e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-project-1967e",
  storageBucket: "test-project-1967e.appspot.com",
  messagingSenderId: "1001589732219",
  appId: "1:1001589732219:web:13d02dac5203fa71fac3de",
  measurementId: "G-NM0PEQQDLG"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);


// // Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const email = 'vinnyxxxl925@gmail.com'
const password = 'petuhi'

// const auth = getAuth();

export const signUser= () => {signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    // console.log(user);
    return user
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  
}



// Create a reference with an initial file path and name
const storage = getStorage(app);
const pathReference = ref(storage, 'images/stars.jpg');

// Create a reference from a Google Cloud Storage URI

// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!
// const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');  


export const getURL = (onLoad) => {
  getDownloadURL(ref(storage, 'gs://test-project-1967e.appspot.com/Focke Wulf Fw 190 A. - die späten Baureihen. Benutzerhandbuch. Erweiterung für den Microsoft Flight Simulator X. Dezember 2009, Version 1..pdf'))
  .then((url) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.open('GET', url);

    xhr.onload = function (e) {
      const reader = new FileReader();
      reader.onload = function(event) {
         const res = event.target.result;
         onLoad(res);            // callback
  }
  const file = this.response;
  reader.readAsDataURL(file)
}

// xhr.onload = (event) => {
//   const blob = xhr.response;

//   const file = new File([blob], "meow.pdf");
//   onLoad(file)
// };









    xhr.send();
  })
  .catch((error) => {
    // Handle any errors
  })
}