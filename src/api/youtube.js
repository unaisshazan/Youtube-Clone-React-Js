import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{

        part:'snippet',
        maxResults:5,
        key: "AIzaSyAiqNh9g1pbV64NroEWvO6rAKsYnmE7HZY"





    }
});

