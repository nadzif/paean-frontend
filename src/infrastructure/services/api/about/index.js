import introDummy from '../../dummy/about/aboutInto.json'
import addressDummy from '../../dummy/about/aboutAddress.json'
import axios from 'axios';

const about = {
    getIntro: async () => {
        const response = introDummy;

        return response
    },
    getAddress: async () => {
        const response = addressDummy;

        return response
    },
    getAboutUs: async () => {
        const response = await axios.get('/page/about-us');

        return response.data
    }
}

export default about