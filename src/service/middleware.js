import axios from 'axios'
const customAxios = axios.create({
    baseURL: `${process.env.BASE_URL || "https://new-movies-bhem.onrender.com/api"}`,
    timeout: 20000
});

export default customAxios