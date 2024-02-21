import ui from './ui';
import news from './news';
import milestone from './milestone';
import mission from './mission';
import about from './about';
import science from './science';
import contact from './contact';
import privacy from './privacy';
import home from './home';

const middlewares = [
    ...ui,
    ...news,
    ...milestone,
    ...mission,
    ...about,
    ...science,
    ...contact,
    ...privacy,
    ...home
];

export default middlewares;