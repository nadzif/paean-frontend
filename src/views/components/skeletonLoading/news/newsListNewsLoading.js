import Skeleton from "react-loading-skeleton";

const NewsListNewsLoading = () => {
    return (
        <>
            <div className="col-lg-6 col-md-6 mb-5">
                <div className="blog-item">
                    <Skeleton style={{ padding: '10vh' }} />
                    <div className="blog-item-content bg-white p-5">
                        <div className="blog-item-meta bg-gray py-1 px-2">
                            <span className="text-muted text-capitalize mr-3">
                            </span>
                            <span className="text-black text-capitalize mr-3">
                                <i className="ti-time mr-1"></i> <Skeleton />
                            </span>
                        </div>
                        <h3 className="mt-3 mb-3">
                            <Skeleton />
                        </h3>
                        <p className="excerpt">
                            <Skeleton count={3} />
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-5">
                <div className="blog-item">
                    <Skeleton style={{ padding: '10vh' }} />
                    <div className="blog-item-content bg-white p-5">
                        <div className="blog-item-meta bg-gray py-1 px-2">
                            <span className="text-muted text-capitalize mr-3">
                            </span>
                            <span className="text-black text-capitalize mr-3">
                                <i className="ti-time mr-1"></i> <Skeleton />
                            </span>
                        </div>
                        <h3 className="mt-3 mb-3">
                            <Skeleton />
                        </h3>
                        <p className="excerpt">
                            <Skeleton count={3} />
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-5">
                <div className="blog-item">
                    <Skeleton style={{ padding: '10vh' }} />
                    <div className="blog-item-content bg-white p-5">
                        <div className="blog-item-meta bg-gray py-1 px-2">
                            <span className="text-muted text-capitalize mr-3">
                            </span>
                            <span className="text-black text-capitalize mr-3">
                                <i className="ti-time mr-1"></i> <Skeleton />
                            </span>
                        </div>
                        <h3 className="mt-3 mb-3">
                            <Skeleton />
                        </h3>
                        <p className="excerpt">
                            <Skeleton count={3} />
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 mb-5">
                <div className="blog-item">
                    <Skeleton style={{ padding: '10vh' }} />
                    <div className="blog-item-content bg-white p-5">
                        <div className="blog-item-meta bg-gray py-1 px-2">
                            <span className="text-muted text-capitalize mr-3">
                            </span>
                            <span className="text-black text-capitalize mr-3">
                                <i className="ti-time mr-1"></i> <Skeleton />
                            </span>
                        </div>
                        <h3 className="mt-3 mb-3">
                            <Skeleton />
                        </h3>
                        <p className="excerpt">
                            <Skeleton count={3} />
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsListNewsLoading;