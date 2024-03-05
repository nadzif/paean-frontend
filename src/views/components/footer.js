import {useSelector} from "react-redux";
import "../../assets/css/footer.css";
import LogoFooter from "../../assets/media/images/logo/footer-logo.png";
import {TfiInfoAlt, TfiAnnouncement, TfiWorld} from "react-icons/tfi";
import {getAddress} from "../../application/selectors/ui";
import {useLanguage} from "./utils/LanguageProvider";
import {useTranslation} from "react-i18next";

const FooterComp = () => {
    const {t} = useTranslation();
    const {lng} = useLanguage();
    const year = new Date().getFullYear()
    const address = useSelector(getAddress);

    return (
        <>
            <footer className="footer section">
                <div className="row bg-footer">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="widget">
                            <div className="logo mb-4">
                                <img alt="logo footer" src={LogoFooter}/>
                            </div>
                            <ul className="list-unstyled footer-menu lh-35 mb-4">
                                <li>
                                    <a href="/privacy-statement">
                                        {t('privacy statement')}
                                    </a>
                                </li>
                                <li>
                                    <a href="/cookie-policy">
                                        {t('cookie policy')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="widget">
                            <h4 className="text-capitalize mb-4">
                                <TfiWorld/>
                            </h4>
                            <ul className="list-unstyled footer-menu lh-35 mb-4">
                                <li>
                                    <a href="/">
                                        {t('home')}
                                    </a>
                                </li>
                                <li>
                                    <a href="/science">
                                        {t('science')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="widget">
                            <h4 className="text-capitalize mb-4">
                                <TfiAnnouncement/>
                            </h4>
                            <ul className="list-unstyled footer-menu lh-35 mb-4">
                                <li>
                                    <a href="/news">
                                        {t('news')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="widget">
                            <h4 className="text-capitalize mb-4">
                                <TfiInfoAlt/>
                            </h4>
                            <ul className="list-unstyled footer-menu lh-35 mb-4">
                                <li>
                                    <a href="/aboutus">
                                        {t('about us')}
                                    </a>
                                </li>
                                <li>
                                    <a href="/contactus">
                                        {t('contact us')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container-fluid footer-btm p-5">
                    <div className="d-flex flex-column flex-md-row justify-content-lg-between align-items-lg-center">
                        <div className="mb-4 mb-lg-0 text-center text-lg-left">
                            {address.address} Email: {address.email} Phone:
                            {address.phone} Fax: {address.fax}
                        </div>
                        <div className="text-center text-lg-right">
                            Copyright PAEAN Biotechnology &copy; {year}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterComp;
