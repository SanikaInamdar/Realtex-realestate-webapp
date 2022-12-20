import axios from 'axios';

export const baseUrl= 'https://bayut.p.rapidapi.com'
export const fetchApi = async(url) => {
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '2f91278cd1mshb675edfa938fcd6p13c2dejsn6771bde5469f',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}
