import axios from 'axios';

const KEY = 'AIzaSyBOQ10siDrDMIKXGqXAfE3DpeO7sl1vtqg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
  });