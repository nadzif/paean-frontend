import {useLocation, useParams} from "react-router-dom";
import BgHeader from "../../../assets/media/images/page-header/news-banner.jpg";
import parse from 'html-react-parser'
import moment from "moment";
import {useLanguage} from "../../components/utils/LanguageProvider";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBlog, getNews} from "../../../application/selectors/ui";
import {blogLoaded, newsContentLoaded, newsLoaded} from "../../../application/actions/ui";

const ContentPage = () => {
    const {lng} = useLanguage();
    const {type, id, page} = useParams();
    const news = useSelector(getNews);
    const blog = useSelector(getBlog);
    const dispatch = useDispatch();

    const [dataDetailNews, setDataDetailNews] = useState(null);
    const [dataDetailBlog, setDataDetailBlog] = useState(null);

    const detailNews = () => {
        if (news && news.data) {
            return news.data.find((data) => data.id === parseInt(id));
        }
        return null
    };

    const detailBlog = () => {
        if (blog && blog.data) {
            return blog.data.find((data) => data.id === parseInt(id));
        }
        return null
    };

    useEffect(() => {
        if (type === 'news') {
            dispatch(newsLoaded(page));
        } else if (type === 'blog') {
            dispatch(blogLoaded(page));
        }
    }, [dispatch, page, type]);

    useEffect(() => {
        const fetchDataDetail = () => {
            const detailData = detailNews();
            setDataDetailNews(detailData);
        };
        fetchDataDetail();
    }, [news, id]);

    useEffect(() => {
        const fetchDataDetail = () => {
            const detailData = detailBlog();
            setDataDetailBlog(detailData);
        };
        fetchDataDetail();
    }, [blog, id]);

    return (<>
        <div style={{paddingBottom: "20%"}}>
            <img src={BgHeader} alt="" id="background-header"/>
            <div id="background-header" className="opacityBg"/>
            <h1 className="text-center centerHeader text-capitalize mb-4 text-lg">
                {type} Content
            </h1>
        </div>
        <div className="mainPage">
            <section className="section blog-wrap bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-lg-12 mb-5">
                                <div className="single-blog-item">
                                    <div className="blog-item-content bg-white p-5">
                                        {
                                            (dataDetailNews || dataDetailBlog) &&
                                            (
                                                <>
                                                    <div className="blog-item-meta bg-gray py-1 px-2 mb-3">
                                                        <span className="text-black text-capitalize mr-3">
                                                            {type === 'news' ? moment(dataDetailNews.publishedAt).format('LLL') : type === 'blog' ? moment(dataDetailBlog.publishedAt).format('LLL') : null}
                                                        </span>
                                                    </div>
                                                    <div className="content">
                                                        <div className="text-center">
                                                            {type === 'news' ?
                                                                <img src={dataDetailNews.media}
                                                                     alt=""/> : type === 'blog' ?
                                                                    <img src={dataDetailBlog.media} alt=""/> : null}
                                                        </div>
                                                        <h2 className="mt-3 mb-4">
                                                            {type === 'news' ? (lng === 'en' ? (dataDetailNews.title.en || dataDetailNews.title.kr) : (dataDetailNews.title.kr || dataDetailNews.title.en)) : type === 'blog' ? (lng === 'en' ? (dataDetailBlog.title.en || dataDetailBlog.title.kr) : (dataDetailBlog.title.kr || dataDetailBlog.title.en)) : null}
                                                        </h2>

                                                        {type === 'news' ? (parse((lng === 'en' ? (dataDetailNews.content.en || dataDetailNews.content.kr) : (dataDetailNews.content.kr || dataDetailNews.content.en)) + '<br>')) : type === 'blog' ? (parse((lng === 'en' ? (dataDetailBlog.content.en || dataDetailBlog.content.kr) : (dataDetailBlog.content.kr || dataDetailBlog.content.en)) + '<br>')) : null}
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </>);
};

export default ContentPage;