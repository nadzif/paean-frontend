import {useDispatch, useSelector} from "react-redux";
import BgHeader from "../../../assets/media/images/page-header/news-banner.jpg";
import {useEffect, useState} from "react";
import {blogLoaded, newsLoaded} from "../../../application/actions/ui";
import {getBlog, getNews} from "../../../application/selectors/ui";
import {Link, useParams} from "react-router-dom";
import parse from 'html-react-parser'
import NewsListNewsLoading from "../../components/skeletonLoading/news/newsListNewsLoading";
import moment from "moment";
import {useLanguage} from '../../components/utils/LanguageProvider';
import axios from "axios";

const NewsPage = () => {
    const {lng} = useLanguage();
    const dispatch = useDispatch();
    const news = useSelector(getNews);
    const blog = useSelector(getBlog);
    const [pageNews, setPageNews] = useState(1);
    const [pageBlog, setPageBlog] = useState(1);
    const [newsComp, setNewsComp] = useState();
    const [title, stTitle] = useState();
    const [subtitle, setSubtitle] = useState();
    const [background, setBackground] = useState();

    const removeHtmlTags = (htmlString) => {
        const doc = new DOMParser().parseFromString(htmlString, 'text/html');
        return doc.body.textContent || "";
    };

    const handlePaginationNews = (pageNumber) => {
        setPageNews(pageNumber);
    };

    const handlePaginationBlog = (pageNumber) => {
        setPageBlog(pageNumber);
    };

    const getNewsComp = async () => {
        await axios.get('/page/news')
            .then((response) => {
                setNewsComp(response.data)
            })
            .catch((error) => {
                console.log('Failed' + error)
            })

    }

    let hero;
    // let title, subtitle, background;

    newsComp && newsComp.sections.map(data => {
        if (data.name === "hero") {
            hero = data;
        }
    });


    useEffect(() => {
        dispatch(newsLoaded(pageNews));
        getNewsComp()
    }, [dispatch, pageNews]);

    useEffect(() => {
        dispatch(blogLoaded(pageBlog));
    }, [dispatch, pageBlog]);

    useEffect(() => {
        if (hero) {
            for (const i of hero.properties) {
                const valueEn = i.value.en;
                const valueKr = i.value.kr;
                if (i.key === "title") {
                    stTitle(lng === 'en' ? (valueEn || valueKr) : (valueKr || valueEn))
                } else if (i.key === "subtitle") {
                    setSubtitle(lng === 'en' ? (valueEn || valueKr) : (valueKr || valueEn))
                } else if ("background-image") {
                    setBackground(lng === 'en' ? (valueEn || valueKr) : (valueKr || valueEn))
                }
            }
        }
    }, [hero, lng]);

    return (<>
        <div style={{paddingBottom: "20%"}}>
            <img src={background} alt="" id="background-header"/>
            <div id="background-header" className="opacityBg"/>
            <h1 className="text-center centerHeader text-capitalize mb-4 text-lg">
                {title}
            </h1>
        </div>
        <div className="mainPage">
            {/*//////////////////////////// news ///////////////////////////////////*/}
            <section
                className="section milestone"
                style={{backgroundImage: `url(http://www.paeanbio.com/themes/main/assets/images/homepage/cells.png)`}}
            >
                <div className="container">
                    <h2 className="content-title">News Release</h2>
                    <div className="row">
                        {news.data !== undefined ? news.data.length !== 0 ? news.data.map(data => {
                            return (<div
                                key={data.id}
                                className="col-lg-6 col-md-6 mb-5"
                            >
                                <div className="blog-item">
                                    <img
                                        className="media-object img-fluid rounded"
                                        src={`${data.media}`}
                                        style={{
                                            width: "200%",
                                            height: "300px",
                                            overflow: "hidden",
                                            position: "relative",
                                            objectFit: "cover",
                                        }}
                                        alt="img"
                                    />
                                    <div className="blog-item-content bg-white p-5">
                                        <div className="blog-item-meta bg-gray py-1 px-2">
                                            <span className="text-muted text-capitalize mr-3"></span>
                                            <span className="text-black text-capitalize mr-3">
                                                          <i className="ti-time mr-1"></i>
                                                {moment(data.publishedAt).format('LLL')}
                                                    </span>
                                        </div>
                                        <div
                                            style={{
                                                minHeight: window.innerWidth >= 920 ? '110px' : '155px',
                                                maxHeight: window.innerWidth >= 920 ? '110px' : '155px',
                                            }}
                                        >
                                            <h3 className="mt-3 mb-3">
                                                <Link
                                                    to={`/content/news/` + pageNews + '/' + data.id}
                                                    state={data}
                                                >
                                                    {lng === 'en' ? (data.title.en || data.title.kr) : (data.title.kr || data.title.en)}
                                                </Link>
                                            </h3>
                                        </div>
                                        <br/>
                                        <div
                                            style={{
                                                minHeight: window.innerWidth >= 920 ? '100px' : 'auto',
                                                maxHeight: window.innerWidth >= 920 ? '100px' : 'auto',
                                            }}
                                        >
                                            <p className="excerpt">
                                                {data.content !== "" ? parse((lng === 'en' ? (removeHtmlTags(data.content.en) || removeHtmlTags(data.content.kr)) : (removeHtmlTags(data.content.kr) || removeHtmlTags(data.content.en))).slice(0, 120) + '....' + '<br>') : ""}
                                            </p>
                                        </div>
                                        <br/>
                                        <Link
                                            className="btn btn-small btn-main btn-round-full"
                                            to={`/content/news/` + pageNews + '/' + data.id}
                                            state={data}
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        }) : <p className="text-white text-center mb-5">No Data Available</p> : <NewsListNewsLoading/>}
                    </div>
                </div>

                {news.data !== undefined ? news.data.length !== 0 ? <div className="row justify-content-center mt-5">
                        <div className="col-lg-6 text-center">
                            <nav className="navigation pagination d-inline-block">
                                <div className="nav-links">
                                    {pageNews > 1 ? <button
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            'text-transform': 'uppercase'
                                        }}
                                        type="button"
                                        className="prev page-numbers text-white"
                                        onClick={() => handlePaginationNews(pageNews - 1)}
                                    >
                                        Prev
                                    </button> : <button
                                        style={{
                                            background: 'none', border: 'none', 'text-transform': 'uppercase'
                                        }}
                                        type="button"
                                        className="prev page-numbers text-white"
                                        disabled={true}
                                    >
                                        Prev
                                    </button>}
                                    {Array.from({length: news.meta?.totalPages}, (_, index) => (<button
                                        key={index}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            'text-transform': 'uppercase'
                                        }}
                                        type="button"
                                        className="page-numbers text-white"
                                        onClick={() => handlePaginationNews(index + 1)}
                                    >
                                        {index + 1}
                                    </button>))}
                                    {pageNews !== news.meta?.totalPages ? <button
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            'text-transform': 'uppercase'
                                        }}
                                        type="button"
                                        className="prev page-numbers text-white"
                                        onClick={() => handlePaginationNews(pageNews + 1)}
                                    >
                                        Next
                                    </button> : <button
                                        style={{
                                            background: 'none', border: 'none', 'text-transform': 'uppercase'
                                        }}
                                        type="button"
                                        className="prev page-numbers text-white"
                                        disabled={true}
                                    >
                                        Next
                                    </button>}
                                </div>
                            </nav>
                        </div>
                    </div> : null

                    : null}
            </section>
            {/*//////////////////////////// blog ///////////////////////////////////*/}
            <section
                className="section mission"
                style={{backgroundImage: `url(http://www.paeanbio.com/themes/main/assets/images/homepage/bg-mssion.png)`}}
            >
                <div className="container">
                    <h2 className="content-title mb-5">Event</h2>
                    <div className="row">
                        {/*{*/}
                        {/*    blog.data !== undefined && (!blog.data || blog.data.length === 0)*/}
                        {/*        ? <p className="text-center mb-5">No Data Available</p>*/}
                        {/*        : null*/}
                        {/*}*/}
                        {blog.data !== undefined ? blog.data.length !== 0 ? blog.data.map(data => {
                            return (<div
                                key={data.id}
                                className="col-lg-6 col-md-6 mb-5"
                            >
                                <div className="blog-item">
                                    <img
                                        className="media-object img-fluid rounded"
                                        src={`${data.media}`}
                                        style={{
                                            width: "200%",
                                            height: "300px",
                                            overflow: "hidden",
                                            position: "relative",
                                            objectFit: "cover",
                                        }}
                                        alt="img"
                                    />
                                    <div className="blog-item-content bg-white p-5">
                                        <div className="blog-item-meta bg-gray py-1 px-2">
                                            <span className="text-muted text-capitalize mr-3"></span>
                                            <span className="text-black text-capitalize mr-3">
                                                          <i className="ti-time mr-1"></i>
                                                {moment(data.publishedAt).format('LLL')}
                                                    </span>
                                        </div>
                                        <div
                                            style={{
                                                minHeight: window.innerWidth >= 920 ? '110px' : '155px',
                                                maxHeight: window.innerWidth >= 920 ? '110px' : '155px',
                                            }}
                                        >
                                            <h3 className="mt-3 mb-3">
                                                <Link
                                                    to={`/newscontent/` + data.id}
                                                    state={data}
                                                >
                                                    {lng === 'en' ? (data.title.en || data.title.kr) : (data.title.kr || data.title.en)}
                                                </Link>
                                            </h3>
                                        </div>
                                        <br/>
                                        <div
                                            style={{
                                                minHeight: window.innerWidth >= 920 ? '100px' : 'auto',
                                                maxHeight: window.innerWidth >= 920 ? '100px' : 'auto',
                                            }}
                                        >
                                            <p className="excerpt">
                                                {data.content !== "" ? parse((lng === 'en' ? (removeHtmlTags(data.content.en) || removeHtmlTags(data.content.kr)) : (removeHtmlTags(data.content.kr) || removeHtmlTags(data.content.en))).slice(0, 120) + '....' + '<br>') : ""}
                                            </p>
                                        </div>
                                        <br/>
                                        <Link
                                            className="btn btn-small btn-main btn-round-full"
                                            to={`/content/blog/` + pageBlog + '/' + data.id}
                                            state={data}
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>)
                        }) : <p className=" text-center mb-5">No Data Available</p> : <NewsListNewsLoading/>}
                    </div>
                </div>

                {blog.data !== undefined ? blog.data.length !== 0 ? (<div className="row justify-content-center mt-5">
                        <div className="col-lg-6 text-center">
                            <nav className="navigation pagination d-inline-block">
                                <div className="nav-links">
                                    {pageBlog > 1 ? <button
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            'text-transform': 'uppercase'
                                        }}
                                        className="prev page-numbers"
                                        onClick={() => handlePaginationBlog(pageBlog - 1)}
                                    >
                                        Prev
                                    </button> : <button
                                        style={{
                                            background: 'none', border: 'none', 'text-transform': 'uppercase'
                                        }}
                                        type="button"
                                        className="prev page-numbers"
                                        disabled={true}
                                    >
                                        Prev
                                    </button>}

                                    {Array.from({length: blog.meta?.totalPages}, (_, index) => (<button
                                        key={index}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            'text-transform': 'uppercase'
                                        }}
                                        type="button"
                                        className="page-numbers"
                                        onClick={() => handlePaginationBlog(index + 1)}
                                    >
                                        {index + 1}
                                    </button>))}
                                    {pageBlog !== blog.meta?.totalPages ? <button
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            'text-transform': 'uppercase'
                                        }}
                                        type="button"
                                        className="prev page-numbers"
                                        onClick={() => handlePaginationBlog(pageBlog + 1)}
                                    >
                                        Next
                                    </button> : <button
                                        style={{
                                            background: 'none', border: 'none', 'text-transform': 'uppercase'
                                        }}
                                        type="button"
                                        className="prev page-numbers"
                                        disabled={true}
                                    >
                                        Next
                                    </button>}
                                </div>
                            </nav>
                        </div>
                    </div>) : null

                    : null}
            </section>
        </div>
    </>);
};

export default NewsPage;
