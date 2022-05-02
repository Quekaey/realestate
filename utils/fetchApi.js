import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
  const {data} = await axios.get((url), {
    headers: {
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
      'X-RapidAPI-Key': '6dcbc1b1bamsh0dd00e4fe6d72d4p1908dcjsn737b7a7ee441'
    }
  });

  return data;
}