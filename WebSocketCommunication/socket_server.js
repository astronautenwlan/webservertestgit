// Express Webserver stuff:  https://www.youtube.com/watch?v=L72fhGm1tfE
const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.get("/defs.js", function (req, res) {
    res.sendFile(__dirname + "/defs.js")
})

app.listen(8082, () => console.log("Webserver Created"));

// Websocket stuff:  https://www.youtube.com/watch?v=FduLSXEHLng
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8083 });           // Websockets dürfen nicht denselben Port haben

wss.on("connection", oneSingleConnectionObject => {
    console.log("New client connected!");
    oneSingleConnectionObject.on("close", () => {
        console.log("Client has disconnected");
    })

    oneSingleConnectionObject.on("message", someData => {
        console.log('Client has sent Server some Data: ' + someData);
        oneSingleConnectionObject.send("Hey client, I received this Text from you:   " + someData);
    })

    // accessing just a property of a returned message. Here we access the property "myHeight" from the received data
    oneSingleConnectionObject.on("message", ({myHeight}) => {
        console.log('Extracting data property from Client: ' + myHeight);
        oneSingleConnectionObject.send("Extracting data property: " + myHeight);
    })



})