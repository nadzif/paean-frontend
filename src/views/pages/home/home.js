import "../../../assets/css/homePage.css";
import { useMediaQuery } from "react-responsive";
import VideoMobile from "../../../assets/media/video/mobile.mp4";
import { useDispatch, useSelector } from 'react-redux';
import { homeLoaded } from '../../../application/actions/ui';
import { useEffect } from "react";
import HomeMissionComp from "./component/homeMission";
import HomeWidgetComp from "./component/homewidget";
import HomeHighlightComp from "./component/homeHighlights";
import HomeMilestoneComp from "./component/homeMilestone";
import { getHome } from "../../../application/selectors/ui";
import parse from 'html-react-parser'
import BgHeaderLoading from "../../components/skeletonLoading/bgHeaderLoading";
import HomeAboutLoading from "../../components/skeletonLoading/home/homeAboutLoading";
import HomeMissionLoading from "../../components/skeletonLoading/home/homeMissionLoading";
import HomeMilestoneLoading from "../../components/skeletonLoading/home/homeMilestoneLoading";
import HomeHighlightLoading from "../../components/skeletonLoading/home/homeHighlightLoading";

const HomePage = () => {
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
      {hero ? <Hero data={hero} /> : <BgHeaderLoading />}
      <div className="mainPage">
        {about ? <About data={about} /> : <HomeAboutLoading />}
        {mission ? <HomeMissionComp data={mission} /> : <HomeMissionLoading />}
        {milestone ? <HomeMilestoneComp data={milestone} /> : <HomeMilestoneLoading />}
        {press ? <HomeHighlightComp data={press} /> : <HomeHighlightLoading />}
        <HomeWidgetComp />
      </div>
    </>
  );
};

const Hero = (data) => {
  var lng = localStorage.getItem("lng") || 'en';
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  let title, subtitle, embed;
  for (const i of data.data.properties) {
    if (i.key === "title") {
      title = lng === 'kr' ? i.value.kr : i.value.en
    } else if (i.key === "subtitle") {
      subtitle = lng === 'kr' ? i.value.kr : i.value.en
    } else if ("embed") {
      embed = lng === 'kr' ? i.value.kr : i.value.en
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
          <h1 className="title">
            {title}
          </h1>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
      </div>
    </>
  );
};

const About = (data) => {
  var lng = localStorage.getItem("lng") || 'en';
  let title, desc;
  for (const i of data.data.properties) {
    if (i.key === "title") {
      title = lng === 'kr' ? i.value.kr : i.value.en
    } else if (i.key === "description") {
      desc = lng === 'kr' ? i.value.kr : i.value.en
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
