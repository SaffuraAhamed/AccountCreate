function createAcc(){
    var myHeaders = new Headers();
// myHeaders.append("Cookie", "BrowserId=RZVu3MxvEey2kiWUHFLg0g; CookieConsentPolicy=0:0; LSKey-c$CookieConsentPolicy=0:0");
myHeaders.append('Access-Control-Allow-Origin', 'http://127.0.0.1:5500/julyTat/accCreate/createAcc.html');
var formdata = new FormData();
formdata.append("grant_type", "password");
formdata.append("client_id", "3MVG9pRzvMkjMb6lXW7xV4V0bAevIf8qWqQRHfRaROYQtZavtwHNK033kjJuvPV.4On5JrUShjxM37ze5Ego5");
formdata.append("client_secret", "461164EC2DE04D6D6D7CEF19467DE76729B0CA759A5F254D90D2F93DDD0D8097");
formdata.append("username", "haie@cyntexa.com");
formdata.append("password", "@aisha007X89q5v3R4O6mzBSj9QMXn2iHn");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://login.salesforce.com/services/oauth2/token", requestOptions)
  .then(response => response.text())
  .then(result => {
    console.log(result)

    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer 00D5j00000AFoTG!ARcAQFRQkWzRHCwBjveaKAWD68vbHn7Ilw1Gp1gWSzM0ygYSFBjR.AXS33d_NUSCe7baB2XZvksdpRGfEUTbqKaklgV1frn1");
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Cookie", "BrowserId=RZVu3MxvEey2kiWUHFLg0g; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1");

    // var raw = JSON.stringify({
    // "0": {
    //     "Name": "azim",
    //     "Industry": "Education"
    // },
    // "1": {
    //     "Name": "aloo",
    //     "Industry": "Education"
    // }
    // });

    // var requestOptions = {
    // method: 'POST',
    // headers: myHeaders,
    // body: raw,
    // redirect: 'follow'
    // };

    // fetch("https://abcd-6fe-dev-ed.my.salesforce.com/services/apexrest/CreateAccount/", requestOptions)
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
})
  .catch(error => console.log('error', error));
}
