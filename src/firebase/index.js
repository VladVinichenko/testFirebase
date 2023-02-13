export const getURL = (callback) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "blob";
  xhr.withCredentials = true;
  xhr.open(
    "GET",
    "https://www.googleapis.com/drive/v3/files/1tjLEJ2FOgv7_s-PVBKq2Ea9xklbtJu33?alt=media"
  );
  xhr.setRequestHeader(
    "Authorization",
    "Bearer ya29.a0AVvZVsrX1LjXVBefVvJ_22u25GMas6OFchyQxEckrFRUTRnl21e6_woUecHaqXngCdOgWjkRu9IZnh8UwYmLrTGGmUizj31fkKNNLxSZK8zmW_jnnxt1ZcIjZgPIppnddIIFANrj-UO6A_hX8nrRK5XgIbCUaCgYKAQMSARESFQGbdwaIyRmTck5KROpVPHDRcXkyJg0163"
  );

  xhr.onload = (event) => {
    const blob = xhr.response;

    callback(URL.createObjectURL(blob));
  };
  xhr.send();
};
