import axios from 'axios';

const blog = {
    getBlog: async (page) => {
        const response = await axios.get(`/post?page=${page}&limit=6&filter.category=$eq:blog`);

        return response.data
    },
}

export default blog