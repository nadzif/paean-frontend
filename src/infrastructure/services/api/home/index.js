import axios from 'axios';

const home = {
    getHome: async () => {
        const response = await axios.get('/page/home');

        return response.data
    }
}

export default home