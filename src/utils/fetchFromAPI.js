import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10',
    maxResults:'50'
  },
  headers: {
    'X-RapidAPI-Key': '67e8a9bb00msh4e461f676fed6e9p1699e7jsn4fc6a7103dcf',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async(url) =>{
    const { data } = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
}