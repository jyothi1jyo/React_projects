import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID qRZp0LeZSN3fyopkLaFez1Wqocuh16y4TJbTFTI1Nq4'
    }
});