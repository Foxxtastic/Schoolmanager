const fs = require("fs");

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const geo = fs.readFileSync(".\\randomaddress\\SouthGermany.geojson");
const geoArray = geo.toString().split("\n");

const dresdenAddresses = [];
const leipzigAddresses = [];
const otherAddresses = [];

for (let i = 0; i < geoArray.length; i++) {
    const geoJson = JSON.parse(geoArray[i]);
    if (geoJson.properties.city === "Dresden") {
        dresdenAddresses.push(geoJson);
    } else
        if (geoJson.properties.city === "Leipzig") {
            leipzigAddresses.push(geoJson);
        } else
            otherAddresses.push(geoJson);
}

for (let i = 0; i < 35; i++) {
    const obj1 = dresdenAddresses[randomNumber(1, dresdenAddresses.length)];
    const obj2 = leipzigAddresses[randomNumber(1, leipzigAddresses.length)];
    console.log(`${obj1.properties.city}, ${obj1.properties.street} ${obj1.properties.number}`);
    console.log(`${obj2.properties.city}, ${obj2.properties.street} ${obj2.properties.number}`);
}

for (let i = 0; i < 30; i++) {
    const obj = otherAddresses[randomNumber(1, otherAddresses.length)];
    console.log(`${obj.properties.city}, ${obj.properties.street} ${obj.properties.number}`);
}