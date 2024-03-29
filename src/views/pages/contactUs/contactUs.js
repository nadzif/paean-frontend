import {useDispatch, useSelector} from "react-redux";
import BgHeader from "../../../assets/media/images/page-header/contact-us.jpg";
import {TfiDirection, TfiMobile, TfiEmail} from "react-icons/tfi";
import {useEffect, useState} from "react";
import {contactUsLoaded} from "../../../application/actions/ui";
import {getContact} from "../../../application/selectors/ui";
import Skeleton from "react-loading-skeleton";
import {useLanguage} from "../../components/utils/LanguageProvider";
import {useTranslation} from "react-i18next";
import axios from "axios";

const ContactUSPage = () => {
    const {t} = useTranslation();
    const {lng} = useLanguage();
    const dispatch = useDispatch();
    const contact = useSelector(getContact);
    const [loading, setLoading] = useState(false);
    const [progressUpload, stProgressUpload] = useState(0);
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    useEffect(() => {
        dispatch(contactUsLoaded);
    }, [dispatch]);

    let title, address, email, phone;

    contact.sections.map(data => {
        if (data.name === "contact") {
            data.properties.map(data => {
                const valueEn = data.value.en;
                const valueKr = data.value.kr;
                if (data.key === "title") {
                    title = lng === 'en' ? (valueEn || valueKr) : (valueKr || valueEn)
                } else if (data.key === "address") {
                    address = lng === 'en' ? (valueEn || valueKr) : (valueKr || valueEn)
                } else if (data.key === "email") {
                    email = lng === 'en' ? (valueEn || valueKr) : (valueKr || valueEn)
                } else if (data.key === "phone") {
                    phone = lng === 'en' ? (valueEn || valueKr) : (valueKr || valueEn)
                }
            });
        }
    });

    const handelSendMessage = async (e) => {
        e.preventDefault();
        setLoading(true)

        try {
            const response = await axios.post('/contactus', {
                name: inputName,
                email: inputEmail,
                message: inputMessage
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
                onUploadProgress: (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                    stProgressUpload(progress)
                },
            })

            if (response.status === 200) {
                setInputName('')
                setInputEmail('')
                setInputMessage('')
                setLoading(false)
                window.alert('Success to Send Application')
            } else {
                setLoading(false)
                console.error('Gagal menyimpan data ke API');
            }

        } catch (error) {
            setLoading(false)
            window.alert('Failed to Send Application')
            console.error('Terjadi kesalahan:', error);
        }
    }

    return (
        <>
            <div style={{paddingBottom: "20%"}}>
                <img src={BgHeader} alt="" id="background-header"/>
                <div id="background-header" className="opacityBg"/>
                <h1 className="text-center centerHeader text-capitalize mb-4 text-lg">
                    {t('contact us')}
                </h1>
            </div>
            <div className="mainPage">
                <section className="contact-form-wrap section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12">
                                <form onSubmit={handelSendMessage}>
                                    <div className="row">
                                        <div className="col-12">
                                            <div
                                                className="alert alert-success contact__msg"
                                                style={{display: "none"}}
                                                role="alert"
                                                id="{{ __SELF__ }}_forms_flash"
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            id="megakitname"
                                            name="name"
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Name"
                                            required
                                            value={inputName}
                                            onChange={(e) => setInputName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            id="megakitemail"
                                            name="email"
                                            type="email"
                                            className="form-control"
                                            placeholder="Email Address"
                                            required
                                            value={inputEmail}
                                            onChange={(e) => setInputEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group-2 mb-4">
                                        <textarea
                                            id="megakitmessage"
                                            name="message"
                                            className="form-control"
                                            rows="4"
                                            placeholder="Your Message"
                                            required
                                            value={inputMessage}
                                            onChange={(e) => setInputMessage(e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <button
                                            id="simpleContactSubmitButton"
                                            className="btn btn-main"
                                            name="submit"
                                            type="submit"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="col-lg-5 col-sm-12">
                                <div className="contact-content pl-lg-5 mt-5 mt-lg-0">
                                    <h2 className="mb-4">{title || <Skeleton/>}</h2>
                                    <ul className="address-block list-unstyled">
                                        <li>
                                            <TfiDirection size={20}/>
                                            &nbsp;&nbsp;&nbsp;{address || <Skeleton/>}
                                        </li>
                                        <li>
                                            <TfiEmail size={20}/>
                                            &nbsp;&nbsp;&nbsp;{email || <Skeleton/>}
                                        </li>
                                        <li>
                                            <TfiMobile size={20}/>
                                            &nbsp;&nbsp;&nbsp;{phone || <Skeleton/>}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3162.6709579783214!2d126.98927590000001!3d37.5628154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDMzJzQ2LjEiTiAxMjbCsDU5JzIxLjQiRQ!5e0!3m2!1sen!2sid!4v1684074608219!5m2!1sen!2sid"
                    width="100%"
                    height="450"
                    style={{border: "0"}}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="maps"
                ></iframe>
            </div>
        </>
    );
};

export default ContactUSPage;
