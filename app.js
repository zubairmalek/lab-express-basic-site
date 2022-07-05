const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

//
// CONFIG
//
app.use(express.static('public'));

//Home page

app.get("/", (request, response) => {
    // response.send("this is string");
    response.sendFile(__dirname + '/views/home-page.html');
});

app.get("/about", (request, response) => {
    response.sendFile(__dirname + '/views/about-page.html');
});

app.get("/works", (request, response) => {
    response.sendFile(__dirname + '/views/works-page.html');
});

app.get("/photos", (request, response) => {
    response.sendFile(__dirname + '/views/photo-gallery.html');
});



app.listen(3000, () => console.log("express app listening in port 3000"));