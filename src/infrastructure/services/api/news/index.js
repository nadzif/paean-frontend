import newsLimit3Dummy from '../../dummy/news/newsLimit3.json'
import axios from 'axios';

const news = {
    getNews: async (page) => {
        const endpoint = window.location.pathname.includes('blog') ? 'blog' : 'news';
        const response = await axios.get(`/post?page=${page}&filter.category=$eq:${endpoint}`);

        return response.data
    },
    getNewsLimit3: async () => {
        const response = newsLimit3Dummy;

        return response
    }
}

export default news