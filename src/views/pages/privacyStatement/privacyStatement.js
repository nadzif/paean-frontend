import {useEffect} from "react";
import BgHeader from "../../../assets/media/images/page-header/privacy-banner.png"
import parse from 'html-react-parser'
import {useDispatch, useSelector} from "react-redux";
import {privacyStatementLoaded} from "../../../application/actions/ui";
import {getPrivacy} from "../../../application/selectors/ui";
import {useLanguage} from "../../components/utils/LanguageProvider";
import {useTranslation} from "react-i18next";

const PrivacyStatementPage = () => {
    const {t} = useTranslation();
    const {lng} = useLanguage();
    const dispatch = useDispatch();
    const privacy = useSelector(getPrivacy);
    useEffect(() => {
        dispatch(privacyStatementLoaded);
    }, [dispatch]);
    return (
        <>
            <div style={{paddingBottom: "20%"}}>
                <img src={BgHeader} alt="" id="background-header"/>
                <div id="background-header" className="opacityBg"/>
                <h1 className="text-center centerHeader text-capitalize mb-4 text-lg">
                    {t('privacy statement')}
                </h1>
            </div>
            <div className="mainPage">
                <section className="privacy-info section">
                    <div className="container">
                        {parse(privacy.data)}
                    </div>
                </section>
            </div>
        </>
    );
};

export default PrivacyStatementPage;
