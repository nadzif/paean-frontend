import Skeleton from "react-loading-skeleton";

const HomeMilestoneLoading = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div style={{ marginLeft: '25vw', marginRight: '25vw' }}><Skeleton style={{ padding: '20px' }} /></div>
                    <div className="row box" style={{ marginTop: '20px' }}>
                        <div className="col-12 col-md-6 col-lg-3 mb-5">
                            <div className="item">
                                <Skeleton style={{ padding: '10px' }} />
                                <Skeleton count={3} />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-5">
                            <div className="item">
                                <Skeleton style={{ padding: '10px' }} />
                                <Skeleton count={3} />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-5">
                            <div className="item">
                                <Skeleton style={{ padding: '10px' }} />
                                <Skeleton count={3} />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-5">
                            <div className="item">
                                <Skeleton style={{ padding: '10px' }} />
                                <Skeleton count={3} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeMilestoneLoading;