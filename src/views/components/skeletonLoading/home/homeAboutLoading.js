import Skeleton from "react-loading-skeleton";

const HomeAboutLoading = () => {
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
                </div>
            </section>
        </>
    );
};

export default HomeAboutLoading;