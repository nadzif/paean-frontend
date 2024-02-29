import {useSelector} from "react-redux";
import "../../assets/css/footer.css";
import LogoFooter from "../../assets/media/images/logo/footer-logo.png";
import {TfiInfoAlt, TfiAnnouncement, TfiWorld} from "react-icons/tfi";
import {getAddress} from "../../application/selectors/ui";
import {useLanguage} from "./utils/LanguageProvider";

const FooterComp = () => {
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
                                        {
                                            lng === 'en' ? 'Privacy Statement' : lng === 'kr' ? '개인 정보 보호 정책' : ''
                                        }
                                    </a>
                                </li>
                                <li>
                                    <a href="/cookie-policy">
                                        {
                                            lng === 'en' ? 'Cookie Policy' : lng === 'kr' ? '쿠키 정책' : ''
                                        }
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
                                        {
                                            lng === 'en' ? 'Home' : lng === 'kr' ? '집' : ''
                                        }
                                    </a>
                                </li>
                                <li>
                                    <a href="/science">
                                        {
                                            lng === 'en' ? 'Science' : lng === 'kr' ? '과학' : ''
                                        }
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
                                        {
                                            lng === 'en' ? 'News' : lng === 'kr' ? '소식' : ''
                                        }

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
                                        {
                                            lng === 'en' ? 'About US' : lng === 'kr' ? '회사 소개' : ''
                                        }
                                    </a>
                                </li>
                                <li>
                                    <a href="/contactus">
                                        {
                                            lng === 'en' ? 'Contact US' : lng === 'kr' ? '문의하기' : ''
                                        }
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
