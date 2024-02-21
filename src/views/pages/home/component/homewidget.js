import {
    TfiInfoAlt,
    TfiAnnouncement,
    TfiEmail,
    TfiViewListAlt,
} from "react-icons/tfi";

const HomeWidgetComp = () => {
    return (
        <>
            <section className="position-relative contact-home">
                <div className="container">
                    <div className="cta-block-2">
                        <div className="row justify-content-center align-items-center ">
                            <div className="col-sm-12 col-md-3 cta-item text-lg-left text-center">
                                <a href="/contactus" className="linkText">
                                    <TfiEmail size={70} /> &nbsp;&nbsp;&nbsp;
                                    <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                                        Contact US
                                    </span>
                                </a>
                            </div>
                            <div className="col-sm-12 col-md-3 cta-item text-lg-left text-center">
                                <a href="/news" className="linkText">
                                    <TfiAnnouncement size={70} /> &nbsp;&nbsp;&nbsp;
                                    <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                                        News
                                    </span>
                                </a>
                            </div>
                            <div className="col-sm-12 col-md-3 cta-item text-lg-left text-center">
                                <a href="/science" className="linkText">
                                    <TfiViewListAlt size={70} /> &nbsp;&nbsp;&nbsp;
                                    <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                                        Science
                                    </span>
                                </a>
                            </div>
                            <div className="col-sm-12 col-md-3 cta-item text-lg-left text-center">
                                <a href="/aboutus" className="linkText">
                                    <TfiInfoAlt size={70} /> &nbsp;&nbsp;&nbsp;
                                    <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                                        About US
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeWidgetComp;