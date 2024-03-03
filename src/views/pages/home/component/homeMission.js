import parse from 'html-react-parser'
import {Link} from "react-router-dom";

const HomeMissionComp = (props) => {
    const dataProps = props.data;
    let BgImage = 'http://www.paeanbio.com/themes/main/assets/images/homepage/bg-mssion.png';
    let title, desc;
    for (const i of dataProps.properties) {
        if (i.key === "title") {
            title = props.lng === 'kr' ? i.value.kr : i.value.en
        } else if (i.key === "description") {
            desc = props.lng === 'kr' ? i.value.kr : i.value.en
        }
    }

    return (
        <>
            <section
                className="section mission"
                style={{backgroundImage: `url(${BgImage})`}}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2 className="content-title">{title}</h2>
                            </div>

                            <p className="content-body">
                                {parse(`${desc}`)}
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-center item-box">
                        {dataProps.items.map(d => (
                            <div key={d.sequence} className="col-lg-4 col-md-6 col-12 item">
                                <div className="intro-item mb-5 mb-lg-0">
                                    {d.properties.map(data => {
                                        if (data.key === "photo") {
                                            return <>
                                                <img className="media-object img-fluid rounded"
                                                     src={props.lng === 'kr' ? data.value.kr : data.value.en}
                                                     alt="img"/>
                                            </>;
                                        } else if (data.key === "name") {
                                            return <>
                                                <div className="title">
                                                    <h4>{props.lng === 'kr' ? data.value.kr : data.value.en}</h4>
                                                </div>
                                            </>;
                                        } else if (data.key === "link") {
                                            return <>
                                                <Link
                                                    to={"/science"}
                                                    className="btn btn-solid-border btn-round-full"
                                                >
                                                    Read more &gt;&gt;
                                                </Link>
                                            </>;
                                        }

                                        return <></>;
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeMissionComp;