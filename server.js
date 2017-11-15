'use strict';

// Application Dependencies
const express = require('express');
const cors = require('cors');
// const pg = require('pg'); // Uncomment when ready for PG

// Application Setup
const app = express();
const PORT = process.env.PORT;
const CLIENT_URL = process.env.CLIENT_URL;

// Application Middleware
app.use(cors());

// Client Request Endpoints
app.get('/test', (req, res) => res.send('Hey bro, now we\'re talking!'));

app.get('*', (req, res) => res.redirect(CLIENT_URL));

// UNIX-Socket for connections
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// Google Maps Client
const googleMaps = require('@google/maps')
const superagent = require('superagent');
const googleApiKey = process.env.GOOGLE_MAPS_API_KEY
const googleMapsClient = googleMaps.createClient({
  key: googleApiKey
});

// QUESTION: What is our database schema? We need gas station id, location (lat and long?), and price (reg, mid, prem?)
// Database Setup
// const client = new pg.Client(process.env.DATABASE_URL);
// client.connect();
// client.on('error', console.error);




// TODO: Begin Dustin.
// TODO: DUSTIN! If you needed to install a google maps dependency, it needs to be reinstalled. I re-init-ed the node project, as it was throwing errors before.



let address = '2901 3rd Ave #300, Seattle, WA 98121';
let latlong = '47.6182513,-122.35406';
let radius = 5000;
let searchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${googleApiKey}&location=${latlong}&radius=${radius}&keyword=gas&opennow`

// app.get('*', (request, response) => {
// console.log('Routing a google maps api request.')
// superagent(searchUrl)
//   .then(
//     googleResponse => {
//       console.log('Got search results!')
//
//       let searchResults = JSON.parse(googleResponse.text).results
//       console.log(searchResults[0])
//       let placeIdsArray = searchResults.map((item) => {
//         return item.place_id
//       });
//
//       placeIdsArray = [placeIdsArray[0]]
//
//       placeIdsArray.forEach(placeId => {
//
//         let detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?key=${googleApiKey}&place_id=${placeId}`
//         // console.log('Routing a google places detail request.')
//         superagent(detailsUrl)
//           .then(
//             googleDetailsResponse => {
//               console.log('Got details!')
//               console.log(JSON.parse(googleDetailsResponse.text).result)
//             }
//             ,
//             err => console.log(`Error: ${err}`)
//           )
//       })
//       console.log('All done.')
//     }
//   ,
//     err => console.log(`Error: ${err}`)
//   )
// })
