import Skeleton from "react-loading-skeleton";

const BgHeaderLoading = () => {
    return (
        <>
            <Skeleton style={{ width: '100vw', height: '100vh', objectFit: 'cover', position: 'fixed', left: 0, right: 0, top: 0, bottom: 0, zIndex: -1 }} />
        </>
    );
};

export default BgHeaderLoading;