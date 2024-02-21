import Skeleton from "react-loading-skeleton";

const AboutUsMediaLoading = () => {
    return (
        <>
            <section className="section about-2 position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="about-item pr-3 mb-5 mb-lg-0">
                                <span className="h6 text-color"><Skeleton /></span>
                                <h2 className="mt-3 mb-4 position-relative content-title">
                                <Skeleton style={{ padding: '5vh' }} />
                                </h2>
                                <div className="mb-5">
                                    <Skeleton />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="frame-youtube">
                                <Skeleton style={{ padding: '10vw' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsMediaLoading;