'use strict';

const express = require('express');
const app = express();

const googleMaps = require('@google/maps')
const superagent = require('superagent');
const googleApiKey = process.env.GOOGLE_MAPS_API_KEY
const googleMapsClient = googleMaps.createClient({
  key: googleApiKey
});


let address = '2901 3rd Ave #300, Seattle, WA 98121';
let latlong = '47.6182513,-122.35406';
let radius = 5000;
let searchUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${googleApiKey}&location=${latlong}&radius=${radius}&keyword=gas&opennow`

// app.get('*', (request, response) => {
console.log('Routing a google maps api request.')
superagent(searchUrl)
  .then(
    googleResponse => {
      console.log('Got search results!')
      // console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++')
      // console.log(JSON.parse(googleResponse.text).results)
      // console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++')

      let searchResults = JSON.parse(googleResponse.text).results
      console.log(searchResults[0])
      // let placeIdsArray = searchResults.map((item) => {
      //   return item.place_id
      // });
      //
      // placeIdsArray = [placeIdsArray[0]]
      //
      // placeIdsArray.forEach(placeId => {
      //
      //   let detailsUrl = `https://maps.googleapis.com/maps/api/place/details/json?key=${googleApiKey}&place_id=${placeId}`
      //   // console.log('Routing a google places detail request.')
      //   superagent(detailsUrl)
      //     .then(
      //       googleDetailsResponse => {
      //         console.log('Got details!')
      //         console.log(JSON.parse(googleDetailsResponse.text).result)
      //       }
      //       ,
      //       err => console.log(`Error: ${err}`)
      //     )
      // })
      console.log('All done.')
    }
  ,
    err => console.log(`Error: ${err}`)
  )
// })
