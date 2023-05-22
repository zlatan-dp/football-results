import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/';

export const getTeams = async () => {
  try {
    const teams = await axios.get('/teams');
    return teams.data.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default axios;
