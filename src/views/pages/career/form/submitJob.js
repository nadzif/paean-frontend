import { useDispatch } from "react-redux";
// import BgHeader from "../../../../assets/media/images/page-header/privacy-banner.png"
import { useEffect } from "react";
import { noPageLoaded } from "../../../../application/actions/ui";
import { TfiBriefcase, TfiLocationPin } from "react-icons/tfi";

const SubmitJobPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(noPageLoaded);
    }, [dispatch]);
    return (
        <>
            <div style={{ paddingBottom: "20%" }}>
                <div id="background-header" className="opacityBg" />
                <div className="text-center centerHeader">
                    <h1 className="text-capitalize mb-4 text-lg" style={{ color: 'white' }}>
                        YPJ Support Services Coordinator
                    </h1>
                    <div><TfiLocationPin size={20} />
                        &nbsp;&nbsp;&nbsp;Tembagapura, Papua, Indonesia</div>
                    <div><TfiBriefcase size={20} />
                        &nbsp;&nbsp;&nbsp;Kontraktor</div>
                </div>

            </div>
            <div className="mainPage">
                <section className="contact-form-wrap section">
                    <div className="container">
                        <form data-request="{{ __SELF__ }}::onFormSubmit" action="mailto:info@paeanbio.com" method="post" enctype="text/plain">
                            <div className="row">
                                <div className="col-12">
                                    <div
                                        className="alert alert-success contact__msg"
                                        style={{ display: "none" }}
                                        role="alert"
                                        id="{{ __SELF__ }}_forms_flash"
                                    ></div>
                                </div>
                            </div>

                            <div className="form-group">
                                <div>Name</div>
                                <input
                                    id="megakitname"
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <div>Phone Number</div>
                                <input
                                    id="megakitphone"
                                    name="name"
                                    type="tel"
                                    className="form-control"
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <div>Email</div>
                                <input
                                    id="megakitemail"
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <div>Province</div>
                                <input
                                    id="megakitprovince"
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Province"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <div>City</div>
                                <input
                                    id="megakitcity"
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="City"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <div>Address</div>
                                <input
                                    id="megakitaddress"
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="Address"
                                    required
                                />
                            </div>
                            <div style={{ paddingBottom: '15px' }}>
                                <div>Curriculum Vitae</div>
                                <input
                                    id="megakitcv"
                                    name="name"
                                    type="file"
                                    className="form-control"
                                    placeholder="Address"
                                    required
                                />
                            </div>
                            <div style={{ paddingBottom: '15px' }}>
                                <div>Bachelor Certificates</div>
                                <input
                                    id="megakitbachelor"
                                    name="name"
                                    type="file"
                                    className="form-control"
                                    placeholder="Address"
                                    required
                                />
                            </div>
                            <div style={{ paddingBottom: '15px' }}>
                                <div>Other Certificates</div>
                                <input
                                    id="megakitother"
                                    name="name"
                                    type="file"
                                    className="form-control"
                                    placeholder="Address"
                                    required
                                />
                            </div>

                            <div>
                                <button
                                    id="simpleContactSubmitButton"
                                    className="btn btn-medium btn-main btn-round-full"
                                    name="submit"
                                    type="submit"
                                >
                                    Apply
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SubmitJobPage;
