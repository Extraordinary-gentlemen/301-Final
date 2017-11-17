# Pump Finder

**Authors**: Dustin Mundy, Joe Waine, Adrian Hawk, Robert Reed
**Version**: 1.14.2

## Overview
The goal of our app is to use the user's location (or a location they supply), the user's vehicle information (mpg), and the amount of gas the user wants to purchase to determine which gas station will provide them with the cheapest overall cost, when travel costs are accounted for.

## Getting Started
To use this app live, simply go to https://pumpfinder.herokuapp.com/ or http://pumpfinder.us.

To run our app locally, fork and clone our server (https://github.com/Extraordinary-gentlemen/pumpfinder-server.git) and client (https://github.com/Extraordinary-gentlemen/pumpfinder-client.git) repositories, then `cd` into those directories and (assuming you have `npm` installed) run `npm init` from the terminal in each directory. Set your `env` variables as indicated below, then launch each server with `nodemon` (or `npm start`).

### Local Environment variables
#### pumpfinder-server
PORT:	export PORT=4000
CLIENT_URL: `export CLIENT_URL='http://localhost:8080'`
GOOGLE_KEY_1: `export GOOGLE_KEY_1='yourKeyHere'`
GOOGLE_KEY_2: `export GOOGLE_KEY_2='yourKeyHere'`
GOOGLE_KEY_3: `export GOOGLE_KEY_3='yourKeyHere'`
GOOGLE_KEY_4: `export GOOGLE_KEY_4='yourKeyHere'`

#### pumpfinder-client
PORT: `export PORT=8080`
\__API_URL__: `export \__API_URL__='http://localhost:4000'`

## Architecture
- express
- cors
- heroku
- node-fetch-json
- nodemon
- @google/maps


## Change Log
### 11/13/17
- Initial directory setup
- Initialized npm project
- Setup server to host static files
- Established communication with API server
- Pushed to heroku

### 11/14/17 - 11/17/17
Please see commit history on gh.


## Credits and Collaborations
- normalize.css v7.0.0 | github.com/necolas/normalize.css
- Simple Gas Pump Icon With Detached hose #124715 from http://icons.mysitemyway.com/legacy-icon-tags/gas-pump/page/6/
- xmlToJson | https://davidwalsh.name/convert-xml-json
- Google
