import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: '..........'
     // You will get this link terminal after typing [firebase emulator-start] and then option to click in there. Then copy and paste this localhost:5001 url in baseURL column.
    // "http://localhost:5001/challenge-4b2b2/us-central1/api",
});

export default instance;  
