import axios from 'axios';

const news = {
    getNews: async (page) => {
        const response = await axios.get(`/post?page=${page}&limit=6&filter.category=$eq:news`);

        return response.data
    },
}

export default news