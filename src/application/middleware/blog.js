import {
    LOAD_BLOG,
    LOAD_BLOG_DETAIL,
    LOAD_BLOG_LIMIT_3,
    loadBlogDetailSuccess,
    loadBlogLimit3Success,
    loadBlogSuccess
} from "../actions/blog";

const blogLoadedFlow = ({log, api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if (action.type === LOAD_BLOG) {
        let blog = await api.blog.getBlog(action.payload);
        dispatch(loadBlogSuccess(blog));
    } else if (action.type === LOAD_BLOG_LIMIT_3) {
        let blog = await api.blog.getBlog(1);
        blog = spliceIntoChunks(blog.data, 3)
        dispatch(loadBlogLimit3Success(blog[0]));
    } else if (action.type === LOAD_BLOG_DETAIL) {
        const blog = await api.blog.getBlog();
        let index = await blog.data.findIndex(x => x.id === parseInt(action.payload));
        dispatch(loadBlogDetailSuccess(blog.data[index]));
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

const blog = [
    blogLoadedFlow
];

export default blog