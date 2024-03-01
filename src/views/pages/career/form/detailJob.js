import {useDispatch, useSelector} from "react-redux";
// import BgHeader from "../../../../assets/media/images/page-header/privacy-banner.png"
import {useEffect, useState} from "react";
import {jobLoaded} from "../../../../application/actions/ui";
import {TfiBriefcase, TfiLocationPin} from "react-icons/tfi";
import {useLanguage} from "../../../components/utils/LanguageProvider";
import {Link, useParams} from "react-router-dom";
import {getJob} from "../../../../application/selectors/ui";
import moment from "moment";

const DetailJobPage = () => {
    const {lng} = useLanguage();
    const {id, page} = useParams();
    const job = useSelector(getJob);
    const dispatch = useDispatch();

    const [dataDetail, setDataDetail] = useState(null);

    const detail = () => {
        if (job && job.data) {
            return job.data.find((data) => data.id === parseInt(id));
        }
        return null;
    };

    useEffect(() => {
        dispatch(jobLoaded(page));
    }, [dispatch, page]);

    useEffect(() => {
        const fetchDataDetail = () => {
            const detailData = detail();
            setDataDetail(detailData);
        };
        fetchDataDetail();
    }, [job, id]);

    return (<>
        <div style={{paddingBottom: "20%"}}>
            <div id="background-header" className="opacityBg"/>
            <div className="text-center centerHeader">
                {
                    dataDetail && (
                        <>
                            <h1 className="text-capitalize mb-4 text-lg" style={{color: 'white'}}>
                                {lng === 'en' ? (dataDetail.title.en || dataDetail.title.kr) : (dataDetail.title.kr || dataDetail.title.en)}
                                YPJ Support Services Coordinator
                            </h1>
                            <div>
                                <TfiLocationPin size={20} className="me-3"/>
                                {lng === 'en' ? (dataDetail.location.en || dataDetail.location.kr) : (dataDetail.location.kr || dataDetail.location.en)}
                                Tembagapura, Papua, Indonesia
                            </div>
                            <div>
                                <TfiBriefcase size={20} className="me-3"/>
                                {lng === 'en' ? (dataDetail.employment_type.en || dataDetail.employment_type.kr) : (dataDetail.employment_type.kr || dataDetail.employment_type.en)}
                                Kontraktor
                            </div>
                        </>
                    )
                }
            </div>
        </div>
        <div className="mainPage">
            <section className="contact-form-wrap section">
                <div className="container">
                    {
                        dataDetail && (
                            <>
                                <h4 className="mb-5">
                                    {lng === 'en'
                                        ? ('About ' + dataDetail.title.en || '에 대한' + dataDetail.title.kr)
                                        : ('에 대한' + dataDetail.title.kr || 'About ' + dataDetail.title.en)}
                                    YPJ Support Services Coordinator
                                </h4>
                                <p>
                                    {lng === 'en' ? (dataDetail.description.en || dataDetail.description.kr) : (dataDetail.description.kr || dataDetail.description.en)}
                                </p>
                                {/*---------------------------------------------------------------*/}
                                <br/>
                                <h4><strong>{lng === 'en' ? 'MINIMUM REQUIREMENTS' : '최소 요건'}</strong></h4>
                                <br/>
                                <p>
                                    {lng === 'en' ? (dataDetail.qualifications.en || dataDetail.qualifications.kr) : (dataDetail.qualifications.kr || dataDetail.qualifications.en)}
                                </p>
                                <br/>
                                {/*---------------------------------------------------------------*/}
                                <h4><strong>{lng === 'en' ? 'APPLICATION DEADLINE' : '신청 마감'}</strong></h4>
                                <p>{moment(dataDetail.applicationDeadline).format('LLL')}</p>
                            </>
                        )
                    }
                </div>
                <div className="container">
                    <div className="justify-content-center mt-5">
                        {dataDetail && (
                            <>
                                {moment().format('LLL') >= moment(dataDetail.applicationDeadline).format('LLL') &&
                                dataDetail.is_active === true
                                    ? <Link
                                        to={`/career/${page}/${dataDetail.id}/apply`}
                                        className="btn btn-medium btn-main btn-round-full disabled"
                                    >
                                        {lng === 'en' ? 'Apply To Position' : '직위에 지원'}
                                    </Link>
                                    :
                                    <Link
                                        to={`/career/${page}/${dataDetail.id}/apply`}
                                        className="btn btn-medium btn-main btn-round-full"
                                    >
                                        {lng === 'en' ? 'Apply To Position' : '직위에 지원'}
                                    </Link>}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </div>
    </>);
};

export default DetailJobPage;
