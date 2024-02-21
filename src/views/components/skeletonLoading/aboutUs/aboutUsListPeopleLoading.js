import Skeleton from "react-loading-skeleton";

const AboutUsListPeopleLoading = () => {
    return (
        <>
            <section className="section team">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7 text-center">
                            <div className="section-title">
                                <span className="h6 text-color"></span>
                                <Skeleton style={{ padding: '20px' }} />
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-around">
                        {[...Array(3)].map(data => {
                            return <>
                                <div
                                    className="col-md-3 col-sm-6 show-profile"
                                >
                                    <div className="team-item-wrap mb-2 p-3">
                                        <div className="team-item position-relative d-flex justify-content-center p-3 align-items-start">
                                            <Skeleton style={{ padding: '5vw' }} />
                                        </div>
                                        <div className="team-item-content p-0 py-2">
                                            <Skeleton count={2} />
                                        </div>
                                    </div>
                                </div>
                            </>;
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUsListPeopleLoading;