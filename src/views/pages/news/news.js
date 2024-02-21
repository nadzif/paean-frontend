import { useDispatch, useSelector } from "react-redux";
import BgHeader from "../../../assets/media/images/page-header/news-banner.jpg";
import { useEffect, useState } from "react";
import { newsLoaded } from "../../../application/actions/ui";
import { getNews } from "../../../application/selectors/ui";
import { Link, useParams } from "react-router-dom";
import parse from 'html-react-parser'
import NewsListNewsLoading from "../../components/skeletonLoading/news/newsListNewsLoading";
import moment from "moment";

const NewsPage = () => {
  var lng = localStorage.getItem("lng") || 'en';
  const { id } = useParams();
  const dispatch = useDispatch();
  const news = useSelector(getNews);
  const [page, setPage] = useState(1);
  const [currentPath, setCurrentPath] = useState('news');
  useEffect(() => {
    if (!window.location.pathname.includes("news")) {
      setCurrentPath('blog')
    }
    dispatch(newsLoaded(id === undefined ? 1 : id));
    setPage(id === undefined ? 1 : id);
  }, [dispatch, id]);

  return (
    <>
      <div style={{ paddingBottom: "20%" }}>
        <img src={BgHeader} alt="" id="background-header" />
        <div id="background-header" className="opacityBg" />
        <h1 className="text-center centerHeader text-capitalize mb-4 text-lg">
          {window.location.pathname.includes("news") ? 'News' : 'Blog'}
        </h1>
      </div>
      <div className="mainPage">
        <section className="section blog-wrap bg-gray">
          <div className="container">
            <div className="row">
              {
                news.data !== undefined ?
                  news.data.map(data => (
                    <div key={data.id} className="col-lg-6 col-md-6 mb-5">
                      <div className="blog-item">
                        <img
                          className="media-object img-fluid rounded"
                          src={`${data.media}`}
                          style={{ width: "200%" }}
                          alt="img"
                        />
                        <div className="blog-item-content bg-white p-5">
                          <div className="blog-item-meta bg-gray py-1 px-2">
                            <span className="text-muted text-capitalize mr-3">
                            </span>
                            <span className="text-black text-capitalize mr-3">
                              <i className="ti-time mr-1"></i> {moment(data.publishedAt).format('LLL')}
                            </span>
                          </div>
                          <h3 className="mt-3 mb-3">
                            <Link
                              to={`/${currentPath}content/` + data.id}
                              state={data}>{lng === 'kr' ? data.title.kr : data.title.en}</Link>
                            {/* <a href={`/${currentPath}content/` + data.id}>
                              {data.title.en}
                            </a> */}
                          </h3>
                          <p className="excerpt">
                            {data.content !== "" ? parse((lng === 'kr' ? data.content.kr : data.content.en).slice(0, 300) + '<br>') : ""}
                            {/* {data.source !== "" ? "Source:" + data.source : ""} */}
                          </p>

                          <br />
                          <Link
                            className="btn btn-small btn-main btn-round-full"
                            to={`/${currentPath}content/` + data.id}
                            state={data}>Read More</Link>
                          {/* <a
                            href={`/${currentPath}content/` + data.id}
                            className="btn btn-small btn-main btn-round-full"
                          >
                            Read more
                          </a> */}
                        </div>
                      </div>
                    </div>
                  )) : <NewsListNewsLoading /> //<div>No Post Data</div>
              }
            </div>
          </div>
          {news.data !== undefined ? <div className="row justify-content-center mt-5">
            <div className="col-lg-6 text-center">
              <nav className="navigation pagination d-inline-block">
                <div className="nav-links">
                  {parseInt(page) > 1 ? <a className="prev page-numbers" href={`/${currentPath}/` + (parseInt(page) - 1)}>Prev</a> : <div></div>}

                  {Array(news.meta.totalPages).map((data, index) => (
                    <a key={index} className="page-numbers" href={`/${currentPath}/` + (index + 1)}>{index + 1}</a>
                  ))}

                  {parseInt(page) !== news.meta.totalPages ? <a className="prev page-numbers" href={`/${currentPath}/` + (parseInt(page) + 1)}>Next</a> : <div></div>}
                </div>
              </nav>
            </div>
          </div> : <div />}


        </section>
      </div>
    </>
  );
};

export default NewsPage;
