# GeoJourney
Welcome to GeoJourney!

GeoJourney is an exciting geography-based game where you'll be transported to random corners of the world via Google Street View, similar to the popular game GeoGuessr. With each game, you'll be dropped somewhere unexpected—it could be the buzzing streets of Tokyo, the tranquil fjords of Norway, or a remote highway in the Australian Outback. Your mission? Guess where you are! Use the interactive map to drop a pin at the location you think you've been placed. 

But that's not all! Be sure to check out our Arizona game mode, where you'll explore the diverse landscapes of the Grand Canyon state. And to see how your geo-guessing skills are progressing over time, GeoJourney will also keep track of your past scores for both the World and Arizona game mode.

**Start your GeoJourney now:** https://geojourney.onrender.com/

## GeoJourney Home Screen
<img width="960" alt="Home" src="https://github.com/collinb424/GeoJourney/assets/92958582/9cfa3445-03d5-4680-8d57-19fa7876d2c6">

## GeoJourney Home Screen for Logged In Users
<img width="960" alt="UserHome" src="https://github.com/collinb424/GeoJourney/assets/92958582/d2f01e5c-e35e-4c09-9ddd-e42e7938af0c">

## Current Game Modes
<img width="959" alt="GameModes" src="https://github.com/collinb424/GeoJourney/assets/92958582/52569f50-d492-45ab-812d-466396644ba4">

## In Game
<img width="960" alt="InGame" src="https://github.com/collinb424/GeoJourney/assets/92958582/6ac8ae1b-5f64-44bd-8379-7f08d3417b3f">

## Result
<img width="1006" alt="Result" src="https://github.com/collinb424/GeoJourney/assets/92958582/bca9bfc6-823a-4f36-85f4-3ee9b0063fc9">

## Game Summary
<img width="960" alt="GameSummary" src="https://github.com/collinb424/GeoJourney/assets/92958582/c615017a-16dd-4a6f-96c6-77f70f775d39">

## Past Scores
<img width="1005" alt="PastScores" src="https://github.com/collinb424/GeoJourney/assets/92958582/30611abd-49d1-464f-819e-db517c1725e3">









## Technologies/Tools/Libraries Used
- React
- Node.js
- Express
- MongoDB
- Google Maps API
- @react-google-maps/api
- random-streetview
- Midjourney
- Figma
- JSON Web Tokens
- bcrypt
- Mongoose
- Axios
- Chakra UI
- React Router


## Setup
Here's a quick guide to get GeoJourney running on your local machine:

### Clone this repository to your local machine
```bash
$ git clone https://github.com/collinb424/GeoJourney.git
```
### Install client dependencies
```bash
$ cd client/
$ npm install
```

### Install server dependencies
```bash
$ cd ../server/
$ npm install
```

### .env files
We now need to create a .env file in the root of both client/ and server/

For the .env file in client/ you will need to put:
- REACT_APP_GOOGLE_MAPS_API_KEY=[key], where you should replace [key] with your Google Maps API Key, which you can find directions for getting [here](https://developers.google.com/maps/documentation/javascript/get-api-key).
- REACT_APP_API_BASE_URL=[url], where you should replace [url] with the base url for your backend (e.g., http://localhost:4000)

For the .env file in server/ you will need to put:
- MONGO_URI=[uri], where you need to replace [uri] with the URI you get that is given to you after creating a MongoDB database. You can use MongoDB Atlas for setting this up, and you will only need the free tier.
- JWT_SECRET=[secret], where you need to replace [secret] with the a random string which is used to encrypt and decrypt data

### Start server
```
$ cd server/
$ node index.js
```

### Start client
```
$ cd ../client/
$ npm start
```

Now you should be all good to go to run GeoJourney locally!
