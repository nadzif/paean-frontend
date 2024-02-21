import { useDispatch } from "react-redux";
import BgHeader from "../../../assets/media/images/page-header/privacy-banner.png"
import { useEffect } from "react";
import { noPageLoaded } from "../../../application/actions/ui";

const CookiePolicyPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(noPageLoaded);
    }, [dispatch]);
    return (
        <>
            <div style={{ paddingBottom: "20%" }}>
                <img src={BgHeader} alt="" id="background-header" />
                <div id="background-header" className="opacityBg" />
                <h1 className="text-center centerHeader text-capitalize mb-4 text-lg">
                    Cookie Policy
                </h1>
            </div>
            <div className="mainPage"></div>
        </>
    );
};

export default CookiePolicyPage;
