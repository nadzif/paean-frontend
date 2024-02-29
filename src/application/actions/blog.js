export const LOAD_BLOG= '[blog] load';
export const LOAD_BLOG_SUCCESS = '[blog] load success';
export const LOAD_BLOG_LIMIT_3 = '[blog limit 3] load';
export const LOAD_BLOG_LIMIT_3_SUCCESS = '[blog limit 3] load success';
export const LOAD_BLOG_DETAIL = '[blog detail] load';
export const LOAD_BLOG_DETAIL_SUCCESS = '[blog detail] load success';

export const loadBlog = blog => ({
    type: LOAD_BLOG,
    payload: blog,
});

export const loadBlogLimit3 = {
    type: LOAD_BLOG_LIMIT_3,
};

export const loadBlogDetail = blog => ({
    type: LOAD_BLOG_DETAIL,
    payload: blog,
});

export const loadBlogDetailSuccess = blog => ({
    type: LOAD_BLOG_LIMIT_3_SUCCESS,
    payload: blog,
});

export const loadBlogSuccess = blog => ({
    type: LOAD_BLOG_SUCCESS,
    payload: blog,
});

export const loadBlogLimit3Success = blog => ({
    type: LOAD_BLOG_DETAIL_SUCCESS,
    payload: blog,
});