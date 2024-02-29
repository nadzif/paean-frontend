import {
    LOAD_NEWS,
    LOAD_NEWS_DETAIL,
    LOAD_NEWS_LIMIT_3,
    loadNewsDetailSuccess,
    loadNewsLimit3Success,
    loadNewsSuccess
} from "../actions/news";

const newsLoadedFlow = ({log, api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === LOAD_NEWS) {
        let news = await api.news.getNews(action.payload);
        // news = spliceIntoChunks(news.data, 4)
        dispatch(loadNewsSuccess(news));
    } else if (action.type === LOAD_NEWS_LIMIT_3) {
        let news = await api.news.getNews(1);
        news = spliceIntoChunks(news.data, 3)
        dispatch(loadNewsLimit3Success(news[0]));
    } else if (action.type === LOAD_NEWS_DETAIL) {
        const news = await api.news.getNews();
        let index = await news.data.findIndex(x => x.id === parseInt(action.payload));
        dispatch(loadNewsDetailSuccess(news.data[index]));
    }
}

function spliceIntoChunks(arr, chunkSize) {
    const res = [];
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

const news = [
    newsLoadedFlow
];

export default news