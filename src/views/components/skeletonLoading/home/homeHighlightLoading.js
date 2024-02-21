import Skeleton from "react-loading-skeleton";

const HomeHighlightLoading = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div style={{ marginLeft: '25vw', marginRight: '25vw' }}><Skeleton style={{ padding: '20px' }} /></div>
                    <div className="row justify-content-center item-box" style={{ marginTop: '20px' }}>
                        <div className="col-lg-4 col-12 mb-5">
                            <div className="press-item">
                                <Skeleton style={{ padding: '10vh' }} />

                                <div className="press-content" style={{ marginTop: '10px' }}>
                                    <Skeleton style={{ padding: '10px' }} />
                                    <Skeleton count={3} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mb-5">
                            <div className="press-item">
                                <Skeleton style={{ padding: '10vh' }} />

                                <div className="press-content" style={{ marginTop: '10px' }}>
                                    <Skeleton style={{ padding: '10px' }} />
                                    <Skeleton count={3} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 mb-5">
                            <div className="press-item">
                                <Skeleton style={{ padding: '10vh' }} />

                                <div className="press-content" style={{ marginTop: '10px' }}>
                                    <Skeleton style={{ padding: '10px' }} />
                                    <Skeleton count={3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeHighlightLoading;