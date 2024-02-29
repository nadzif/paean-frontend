import axios from 'axios';

const job = {
    getJob: async (page) => {
        const response = await axios.get(`/job?page=${page}&limit=6`);

        return response.data
    }
}

export default job