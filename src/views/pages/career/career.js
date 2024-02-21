import { useDispatch } from "react-redux";
import BgHeader from "../../../assets/media/images/page-header/privacy-banner.png"
import { useEffect } from "react";
import { noPageLoaded } from "../../../application/actions/ui";
import { TfiBriefcase, TfiLocationPin } from "react-icons/tfi";

const CareerPage = () => {
    const dispatch = useDispatch();
    let job = Array.from({ length: 10 }, (value, index) => index);
    useEffect(() => {
        dispatch(noPageLoaded);
    }, [dispatch]);
    return (
        <>
            <div style={{ paddingBottom: "20%" }}>
                <img src={BgHeader} alt="" id="background-header" />
                <div id="background-header" className="opacityBg" />
                <h1 className="text-center centerHeader text-capitalize mb-4 text-lg">
                    Career
                </h1>
            </div>
            <div className="mainPage">
                <section className="contact-form-wrap section">
                    <div className="container">
                        <h2 className="content-title text-center mb-5">Our Openings</h2>
                        {job.map(data => (
                            <div className="row item-box pb-lg-5">
                                <div className="col-lg-6 col-md-12 col-sm-12">
                                    <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                                        <h3>
                                            <a href={"/job/" + 1}>
                                                YPJ Support Services Coordinator
                                            </a></h3>
                                        <div><TfiLocationPin size={20} />
                                            &nbsp;&nbsp;&nbsp;Tembagapura, Papua, Indonesia</div>
                                        <div><TfiBriefcase size={20} />
                                            &nbsp;&nbsp;&nbsp;Kontraktor</div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-sm-12">
                                    <div className="contact-content mt-5 mt-lg-0" style={{ float: 'right' }}>
                                        <a
                                            href={"/job/" + 1}
                                            className="btn btn-medium btn-main btn-round-full"
                                        >
                                            Apply
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default CareerPage;
