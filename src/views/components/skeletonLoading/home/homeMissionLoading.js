import Skeleton from "react-loading-skeleton";

const HomeMissionLoading = () => {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <div style={{ marginLeft: '25vw', marginRight: '25vw' }}><Skeleton style={{ padding: '20px' }} /></div>
                            </div>
                            <p className="content-body">
                                <Skeleton count={3} />
                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center item-box">
                        <ItemLoading />
                        <ItemLoading />
                        <ItemLoading />
                    </div>
                </div>
            </section>
        </>
    );
};

const ItemLoading = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12 item">
                <div className="intro-item mb-5 mb-lg-0">
                    <Skeleton style={{ padding: '20px' }} />
                    <div className="title">
                        <h4><Skeleton count={3} /></h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeMissionLoading;