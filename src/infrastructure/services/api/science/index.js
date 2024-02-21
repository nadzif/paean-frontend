import axios from 'axios';

const science = {
    getScience: async () => {
        const response = await axios.get('/page/science');

        return response.data
    }
}

export default science