import axios from 'axios';

const contact = {
    getContact: async () => {
        const response = await axios.get('/page/contact-us');

        return response.data
    }
}

export default contact