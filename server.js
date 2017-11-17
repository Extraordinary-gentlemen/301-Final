'use strict';

// Application Dependencies
const express = require('express');
const cors = require('cors');
const fetchJson = require('node-fetch-json');
// const fetch = require('node-fetch'); // I'm pretty sure we don't need this

// Application Setup
const app = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;
const GOOGLE_KEY_1 = process.env.GOOGLE_KEY_1;
const GOOGLE_KEY_2 = process.env.GOOGLE_KEY_2;
var GOOGLE_KEY = GOOGLE_KEY_1;


// Application Middleware
app.use(cors());

// Client Request Endpoints
app.get('/api/v1/markers/*', (req, res) => {
  getLocations(req, res);
});

app.get('/api/v1/userinput', (req, res) => {
  getLocationOfUserInput(req, res);
});


app.get('*', (req, res) => res.redirect(CLIENT_URL));

// UNIX-Socket for connections
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

function getLocationOfUserInput(req, res){
    fetchJson(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.params[0]}&key=${GOOGLE_KEY}`).then(response => {
              res.send({lat: response.results[0].geometry.location.lat ,lng: response.results[0].geometry.location.lat });
      });
  });

function getLocationDetails(req, res, mapData) {
  let num = 0;
  mapData.forEach((datum) => {
    fetchJson(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${req.params[0]}&destinations=${datum.coords.lat},${datum.coords.lng}&key=${GOOGLE_KEY}`)
      .then(response => {
        num++;
        datum.distance = parseFloat(response.rows[0].elements[0].distance.text);
        datum.duration = response.rows[0].elements[0].duration.text;
        if(num === mapData.length) res.send(mapData);
      });
  });
}

function getLocations(req, res) {
  fetchJson(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=gas+stations&location=${req.params[0]}&radius=40&key=${GOOGLE_KEY}`)
    .then(response => {
      if(!response.error_message) { // Key Good
        let mapData = response.results.map(data => {
          return {
            coords: { lat: data.geometry.location.lat, lng: data.geometry.location.lng },
            address : data.formatted_address,
            name : data.name,
            fuelCost: Math.floor((Math.random() * 50) + 250)/100,
          }
        });
        getLocationDetails(req, res, mapData);
      } else { // Key Bad, swap and fire again
        console.log('Key Expired. Switching keys');
        GOOGLE_KEY = GOOGLE_KEY_2;
        getLocations(req, res);
      }
    }, console.error);
}
