export const LOAD_NEWS = '[news] load';
export const LOAD_NEWS_SUCCESS = '[news] load success';
export const LOAD_NEWS_LIMIT_3 = '[news limit 3] load';
export const LOAD_NEWS_LIMIT_3_SUCCESS = '[news limit 3] load success';
export const LOAD_NEWS_DETAIL = '[news detail] load';
export const LOAD_NEWS_DETAIL_SUCCESS = '[news detail] load success';

export const loadNews = news => ({
    type: LOAD_NEWS,
    payload: news,
});

export const loadNewsLimit3 = {
    type: LOAD_NEWS_LIMIT_3,
};

export const loadNewsDetail = news => ({
    type: LOAD_NEWS_DETAIL,
    payload: news,
});

export const loadNewsDetailSuccess = news => ({
    type: LOAD_NEWS_DETAIL_SUCCESS,
    payload: news,
});

export const loadNewsSuccess = news => ({
    type: LOAD_NEWS_SUCCESS,
    payload: news,
});

export const loadNewsLimit3Success = news => ({
    type: LOAD_NEWS_LIMIT_3_SUCCESS,
    payload: news,
});