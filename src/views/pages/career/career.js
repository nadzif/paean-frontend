import {useDispatch, useSelector} from "react-redux";
import BgHeader from "../../../assets/media/images/page-header/privacy-banner.png"
import {useEffect, useState} from "react";
import {jobLoaded} from "../../../application/actions/ui";
import {getJob} from "../../../application/selectors/ui";
import {useLanguage} from "../../components/utils/LanguageProvider";
import {TfiBriefcase, TfiLocationPin} from "react-icons/tfi";
import NewsListNewsLoading from "../../components/skeletonLoading/news/newsListNewsLoading";
import moment from "moment/moment";
import {Link} from "react-router-dom";

const CareerPage = () => {
    const {lng} = useLanguage();
    const dispatch = useDispatch();
    const job = useSelector(getJob);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(jobLoaded(page));
    }, [dispatch, page]);

    return (<>
        <div style={{paddingBottom: "20%"}}>
            <img src={BgHeader} alt="" id="background-header"/>
            <div id="background-header" className="opacityBg"/>
            <h1 className="text-center centerHeader text-capitalize mb-4 text-lg">
                Career
            </h1>
        </div>
        <div className="mainPage">
            <section className="contact-form-wrap section">
                <div className="container">
                    <h2 className="content-title text-center mb-5">Our Openings</h2>
                    {
                        job.data !== undefined ? job.data.map(data => {
                            return (
                                <div className="row item-box pb-lg-5">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                                            <h3>
                                                <a href={`/career/${page}/${data.id}`}>
                                                    {lng === 'en' ? (data.title.en || data.title.kr) : (data.title.kr || data.title.en)}
                                                    YPJ Support Services Coordinator
                                                </a>
                                            </h3>
                                            <div>
                                                <TfiLocationPin size={20} className="me-3"/>
                                                {lng === 'en' ? (data.location.en || data.location.kr) : (data.location.kr || data.location.en)}
                                                Tembagapura, Papua, Indonesia
                                            </div>
                                            <div>
                                                <TfiBriefcase size={20} className="me-3"/>
                                                {lng === 'en' ? (data.employment_type.en || data.employment_type.kr) : (data.employment_type.kr || data.employment_type.en)}
                                                Kontraktor
                                            </div>
                                            <div>
                                                {moment(data.applicationDeadline).format('LLL')}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 col-sm-12">
                                        <div className="contact-content mt-5 mt-lg-0" style={{float: 'right'}}>
                                            {
                                                moment().format('LLL') <= moment(data.applicationDeadline).format('LLL') && data.is_active
                                                    ? <Link
                                                        to={`/career/${page}/${data.id}`}
                                                        className="btn btn-medium btn-main btn-round-full disabled"
                                                    >
                                                        Apply
                                                    </Link>
                                                    :
                                                    <Link
                                                        to={`/career/${page}/${data.id}`}
                                                        className="btn btn-medium btn-main btn-round-full"
                                                    >
                                                        Apply
                                                    </Link>
                                            }

                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <NewsListNewsLoading/>
                    }
                </div>
            </section>
        </div>
    </>);
};

export default CareerPage;
