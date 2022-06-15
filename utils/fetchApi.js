import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': 'cb33a5cd4amsha1b7455dafd6d82p1b13e2jsn2dfeb93239b5'
    }
  });

  return data;
}