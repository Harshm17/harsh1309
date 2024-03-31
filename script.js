var myHeaders = new Headers();
myHeaders.append("apikey", "o44ZEBkhuUCogtrM0TRGUACDQbHb4K7F");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};
let f = document.getElementById(File);
fetch("https://api.apilayer.com/resume_parser/url?url={url}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  console.log(f);

