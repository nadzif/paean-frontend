import "../../../assets/css/homePage.css";
import {useMediaQuery} from "react-responsive";
import VideoMobile from "../../../assets/media/video/mobile.mp4";
import {useDispatch, useSelector} from 'react-redux';
import {homeLoaded} from '../../../application/actions/ui';
import {useEffect} from "react";
import HomeMissionComp from "./component/homeMission";
import HomeWidgetComp from "./component/homewidget";
import HomeHighlightComp from "./component/homeHighlights";
import HomeMilestoneComp from "./component/homeMilestone";
import {getHome} from "../../../application/selectors/ui";
import parse from 'html-react-parser'
import BgHeaderLoading from "../../components/skeletonLoading/bgHeaderLoading";
import HomeAboutLoading from "../../components/skeletonLoading/home/homeAboutLoading";
import HomeMissionLoading from "../../components/skeletonLoading/home/homeMissionLoading";
import HomeMilestoneLoading from "../../components/skeletonLoading/home/homeMilestoneLoading";
import HomeHighlightLoading from "../../components/skeletonLoading/home/homeHighlightLoading";
import {useLanguage} from "../../components/utils/LanguageProvider";

const HomePage = () => {
    const {lng} = useLanguage();
    const dispatch = useDispatch();
    const home = useSelector(getHome);
    useEffect(() => {
        dispatch(homeLoaded);
    }, [dispatch]);
    // const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

    let hero, about, mission, milestone, press;

    home.sections.map(data => {
        if (data.name === "hero") {
            hero = data;
        } else if (data.name === "about") {
            about = data;
        } else if (data.name === "mission") {
            mission = data;
        } else if (data.name === "milestone") {
            milestone = data;
        } else if (data.name === "press") {
            press = data;
        }
    });

    return (
        <>
            {hero ? <Hero data={hero} lng={lng}/> : <BgHeaderLoading/>}
            <div className="mainPage">
                {about ? <About data={about} lng={lng}/> : <HomeAboutLoading/>}
                {mission ? <HomeMissionComp data={mission} lng={lng}/> : <HomeMissionLoading/>}
                {milestone ? <HomeMilestoneComp data={milestone} lng={lng}/> : <HomeMilestoneLoading/>}
                {press ? <HomeHighlightComp data={press} lng={lng}/> : <HomeHighlightLoading/>}
                <HomeWidgetComp/>
            </div>
        </>
    );
};

const Hero = (data) => {
    const isMobile = useMediaQuery({query: `(max-width: 760px)`});
    let title, subtitle, embed;
    for (const i of data.data.properties) {
        const valueEn = i.value.en;
        const valueKr = i.value.kr;
        if (i.key === "title") {
            title = data.lng === 'en' ? (valueEn || valueKr) : (valueKr || valueEn)
        } else if (i.key === "subtitle") {
            subtitle = data.lng === 'en' ? (valueEn || valueKr) : (valueKr || valueEn)
        } else if ("embed") {
            embed = data.lng === 'en' ? (valueEn || valueKr) : (valueKr || valueEn)
        }
    }
    return (
        <>
            <div>
                <video
                    id="background-header"
                    src={isMobile ? VideoMobile : embed}
                    autoPlay
                    loop
                    muted
                />
                <div className="centerTitle">
                    <h3 className="title">
                        {title}
                    </h3>
                    <h4 className="subtitle">{subtitle}</h4>
                </div>
            </div>
        </>
    );
};

const About = (data) => {
    let title, desc;
    for (const i of data.data.properties) {
        if (i.key === "title") {
            title = data.lng === 'kr' ? i.value.kr : i.value.en
        } else if (i.key === "description") {
            desc = data.lng === 'kr' ? i.value.kr : i.value.en
        }
    }
    return (
        <>
            <section className="section intro">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2 className="content-title">{title}</h2>
                            </div>
                            <p className="content-body">
                                {parse(`${desc}`)}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
