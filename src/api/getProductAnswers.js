import axios from 'axios';

const getProductAnswers = (id) => axios.get(`http://52.26.193.201:3000/qa/${id}/answers`)
  .then((data) => data)
  .catch((err) => { throw err; });

export default getProductAnswers;
