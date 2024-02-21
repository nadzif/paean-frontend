import { useLocation } from "react-router-dom";
import BgHeader from "../../../assets/media/images/page-header/news-banner.jpg";
import parse from 'html-react-parser'
import moment from "moment";

const NewsContentPage = () => {
    var lng = localStorage.getItem("lng") || 'en';
    const { state } = useLocation();
    // const { id } = useParams();
    // const news = useSelector(getNewsDetail);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     // dispatch(newsContentLoaded(id));
    // }, [dispatch, id]);
    return (
        <>
            <div style={{ paddingBottom: "20%" }}>
                <img src={BgHeader} alt="" id="background-header" />
                <div id="background-header" className="opacityBg" />
                <h1 className="text-center centerHeader text-capitalize mb-4 text-lg">
                    {window.location.pathname.includes("news") ? 'News' : 'Blog'} Content
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
                                            <div className="blog-item-meta bg-gray py-1 px-2 mb-3">
                                                <span className="text-black text-capitalize mr-3"> {moment(state.publishedAt).format('LLL')}</span>
                                            </div>
                                            <div className="content">
                                                <h2 className="mt-3 mb-4">{state.title.en}</h2>
                                                {state.content !== "" ? parse((lng === 'kr' ? state.content.kr : state.content.en) + '<br>') : ""}
                                                {/* {news.source !== "" ? <p>Source: <a href={news.source}>{news.source}</a></p> : ""} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default NewsContentPage;