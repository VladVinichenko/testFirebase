
import CryptoJS from "crypto-js";

export const getURL = async (callback) => {

let token = null
console.log('1');
await getToken.then(el => token = decodeText(el.data))
console.log(token);
console.log('2');

const accessToken = 'Bearer ' + token

// console.log(accessToken);

  const xhr = new XMLHttpRequest();
  xhr.responseType = "blob";
  // xhr.withCredentials = true;
  xhr.open(
    "GET",
    "https://www.googleapis.com/drive/v3/files/1tjLEJ2FOgv7_s-PVBKq2Ea9xklbtJu33?alt=media"
  );
  xhr.setRequestHeader(
    "Authorization",
    accessToken,
    "Access-Control-Max-Age: 7200"
  );
  xhr.onload = (event) => {
    const blob = xhr.response;

    callback(URL.createObjectURL(blob));
  };
  xhr.send();

  // var myHeaders = new Headers();
  // myHeaders.append("Authorization", accessToken);
  
  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow'
  // };
  
  // fetch("https://www.googleapis.com/drive/v3/files/1tjLEJ2FOgv7_s-PVBKq2Ea9xklbtJu33?alt=media", requestOptions)
  //   .then((response) => response.blob())
  //   .then(result => callback(result))
  //   .catch(error => console.log('error', error));


};



const getToken = new Promise(function(resolve, reject) {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/files/getToken", requestOptions)
    .then(response => response.text())
    .then(result => resolve(JSON.parse(result)))
    .catch(error => reject(error));
  })

const TOKEN_SECRET_KEY = 'woQqtOekeN0zXqv61'

  const decodeText = (ciphertext) => CryptoJS.Rabbit.decrypt(ciphertext, TOKEN_SECRET_KEY).toString(CryptoJS.enc.Utf8);
  
  
  
  