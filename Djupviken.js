function getData(){
    return fetch("https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.1489/lat/57.3081/data.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        return data;
    });
}

let t = document.getElementById("vader")


let data = getData();
data.then((data) => {

console.log(data);
let time = data.timeSeries[0].validTime;

let date = time.slice(0,9);
let kl = time.slice(11,19);

let klTN = document.createTextNode("Klockan: " +kl);
let dateTN = document.createTextNode("Datum: " +date);
let temp = document.createTextNode(data.timeSeries[0].parameters[10].values[0] +"°C");


t.appendChild(temp);



});

