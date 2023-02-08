import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '28388754-d7a8c797da0312bb5ddb1e0ef';

export const getImages = async () => {
  const response = await axios.get(`/?key=${API_KEY}`, {
    params: {
      q: 'max',
      per_page: 20,
      image_type: 'foto',
      orientation: 'horizontal',
    },
  });

  return response.data.hits;
};
