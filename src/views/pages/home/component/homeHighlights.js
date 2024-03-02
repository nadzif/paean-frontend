import {useSelector} from "react-redux";
import {getNewsLimit} from "../../../../application/selectors/ui";
import {TfiArrowCircleRight} from "react-icons/tfi";
import moment from "moment";

const HomeHighlightComp = (props) => {
    const news = useSelector(getNewsLimit);
    const dataProps = props.data;
    let title = '';
    for (const i of dataProps.properties) {
        if (i.key === "title") {
            title = props.lng === 'kr' ? i.value.kr : i.value.en
        }
    }
    return (
        <>
            <section className="section press">
                <div className="container">
                    <h2 className="content-title text-center">{title}</h2>
                    <div className="row justify-content-center item-box">
                        {news.map(data => (
                            <div key={data.id} className="col-lg-4 col-12 mb-5">
                                <div className="press-item">
                                    <img
                                        className="media-object img-fluid rounded"
                                        src={`${data.media}`}
                                        alt="img"
                                    />

                                    <div className="press-content">
                                        <h3 className="mb-3 lh-36">
                                            {props.lng === 'kr' ? data.title.kr : data.title.en}
                                        </h3>
                                        {/* <p>
                                            Source: {data.source}
                                        </p> */}

                                        <a href={"/newscontent/" + data.id}
                                           className="btn btn-solid-border btn-round-full">
                                            Read More &gt;&gt;
                                        </a>

                                        <div className="release-date">{moment(data.publishedAt).format('LLL')}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="category-url">
                        <a href="/news">
                            View All Highlights <TfiArrowCircleRight/>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeHighlightComp;