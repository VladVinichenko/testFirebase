// import { initializeApp } from 'firebase/app';
// import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";

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


// const firebaseConfig = {
//   apiKey: "AIzaSyD2td3YLiA5k312uFwFLO2eRIA3Fsry6oc",
//   authDomain: "test-project-1967e.firebaseapp.com",
//   databaseURL: "https://test-project-1967e-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "test-project-1967e",
//   storageBucket: "test-project-1967e.appspot.com",
//   messagingSenderId: "1001589732219",
//   appId: "1:1001589732219:web:13d02dac5203fa71fac3de",
//   measurementId: "G-NM0PEQQDLG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

// const email = 'vinnyxxxl925@gmail.com'
// const password = 'petuhi'


// export const signUser= () => {signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//     // console.log(user);
//     return user
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
  
// }



// Create a reference with an initial file path and name
// const storage = getStorage(app);


export const getURL = (callback) => {
  // getDownloadURL(ref(storage, 'gs://test-project-1967e.appspot.com/Урок 1_Алфавіт та правила читання.pdf'))
  // getDownloadURL(ref(storage, 'gs://test-1919-b3d61.appspot.com/Урок 1_Алфавіт та правила читання.pdf'))

  // .then((url) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.withCredentials = true;
  

    xhr.open("GET", "https://www.googleapis.com/drive/v3/files/1tjLEJ2FOgv7_s-PVBKq2Ea9xklbtJu33?alt=media");
    xhr.setRequestHeader("Authorization", "Bearer ya29.a0AVvZVsrX1LjXVBefVvJ_22u25GMas6OFchyQxEckrFRUTRnl21e6_woUecHaqXngCdOgWjkRu9IZnh8UwYmLrTGGmUizj31fkKNNLxSZK8zmW_jnnxt1ZcIjZgPIppnddIIFANrj-UO6A_hX8nrRK5XgIbCUaCgYKAQMSARESFQGbdwaIyRmTck5KROpVPHDRcXkyJg0163");
    // xhr.open("GET", "https://drive.google.com/file/d/1tjLEJ2FOgv7_s-PVBKq2Ea9xklbtJu33/view?usp=drivesdk");
    // xhr.setRequestHeader("Authorization", "Bearer 1//09NjHtgA0E2J1CgYIARAAGAkSNwF-L9IrYVNXP9g7ckHdufNQ4SuK6EHfNqfmLCoN0nW0PjDGCtOo63EuLpFV6qQEyYM98AZiTi0");
//     xhr.onload = function (e) {
//       const reader = new FileReader();
//       reader.onload = function(event) {
//          const res = event.target.result;
//         //  callback(res.replace("data:application/pdf;base64,", ''));            // callback
//         callback(res.replace("data:application/pdf;base64,", ''));
//   }
//   const file = this.response;
//   reader.readAsDataURL(file)
// }

// xhr.onload = (event) => {
//   const blob = xhr.response;

//   const file = new File([blob], "meow.pdf");
//   callback(file)
// };


xhr.onload = (event) => {
  const blob = xhr.response;
  // console.log(blob);
  callback(URL.createObjectURL(blob))
};






    xhr.send();
  // })
  // .catch((error) => {
    // Handle any errors
  // })
}