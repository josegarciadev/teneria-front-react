import axios from 'axios'

const axiosFetch = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user-token')
      }
  });

  export default axiosFetch;