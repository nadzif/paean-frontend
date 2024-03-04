import { useDispatch } from "react-redux";
import BgHeader from "../../../assets/media/images/page-header/privacy-banner.png"
import { useEffect } from "react";
import { noPageLoaded } from "../../../application/actions/ui";
import {useLanguage} from "../../components/utils/LanguageProvider";
import {useTranslation} from "react-i18next";

const CookiePolicyPage = () => {
    const {t} = useTranslation();
    const {lng} = useLanguage();
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
                    {t('cookie policy')}
                </h1>
            </div>
            <div className="mainPage"></div>
        </>
    );
};

export default CookiePolicyPage;
