import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {aboutUsLoaded} from "../../../application/actions/ui";
import {getAboutUs} from "../../../application/selectors/ui";
import BgHeaderLoading from "../../components/skeletonLoading/bgHeaderLoading";
import AboutUsListPeopleLoading from "../../components/skeletonLoading/aboutUs/aboutUsListPeopleLoading";
import AboutUsMediaLoading from "../../components/skeletonLoading/aboutUs/aboutUsMediaLoading";
import AboutMediaComp from "./component/aboutMedia";
import AboutListPeopleComp from "./component/aboutListPeople";
import {useLanguage} from "../../components/utils/LanguageProvider";

const AboutUSPage = () => {
    const {lng} = useLanguage();
    const aboutUs = useSelector(getAboutUs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(aboutUsLoaded);
    }, [dispatch]);

    let hero, media, leadership, medicalAdvisor, europeanAdvisor;

    aboutUs.sections.map(data => {
        if (data.name === "hero") {
            hero = data;
        } else if (data.name === "media") {
            media = data;
        } else if (data.name === "leadership") {
            leadership = data;
        } else if (data.name === "medicalAdvisor") {
            medicalAdvisor = data;
        } else if (data.name === "europeanAdvisor") {
            europeanAdvisor = data;
        }
    });

    return (
        <>
            {hero ? <Hero data={hero} lng={lng}/> : <BgHeaderLoading/>}
            <div className="mainPage">
                {media ? <AboutMediaComp data={media} lng={lng}/> : <AboutUsMediaLoading/>}
                {leadership ? <AboutListPeopleComp data={leadership} lng={lng}/> : <AboutUsListPeopleLoading/>}
                {medicalAdvisor ? <AboutListPeopleComp data={medicalAdvisor} lng={lng}/> : <AboutUsListPeopleLoading/>}
                {europeanAdvisor ? <AboutListPeopleComp data={europeanAdvisor} lng={lng}/> :
                    <AboutUsListPeopleLoading/>}
            </div>
        </>
    );
};

const Hero = (data) => {
    let title, bgImage;
    for (const i of data.data.properties) {
        const valueEn = i.value.en;
        const valueKr = i.value.kr;

        if (i.key === "title") {
            title = data.lng === 'en' ? (valueEn || valueKr) : (valueKr || valueEn)
        } else if (i.key === "background-image") {
            bgImage = data.lng === 'en' ? (valueEn || valueKr) : (valueKr || valueEn)
        }
    }
    return (
        <>
            <div style={{paddingBottom: "20%"}}>
                <img src={bgImage} alt="" id="background-header"/>
                <div id="background-header" className="opacityBg"/>
                <h1 className="text-center centerHeader text-capitalize mb-4 text-lg">
                    {title}
                </h1>
            </div>
        </>
    );
};

export default AboutUSPage;
