import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { aboutUsLoaded } from "../../../application/actions/ui";
import { getAboutUs } from "../../../application/selectors/ui";
import BgHeaderLoading from "../../components/skeletonLoading/bgHeaderLoading";
import AboutUsListPeopleLoading from "../../components/skeletonLoading/aboutUs/aboutUsListPeopleLoading";
import AboutUsMediaLoading from "../../components/skeletonLoading/aboutUs/aboutUsMediaLoading";
import AboutMediaComp from "./component/aboutMedia";
import AboutListPeopleComp from "./component/aboutListPeople";

const AboutUSPage = () => {
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
      {hero ? <Hero data={hero} /> : <BgHeaderLoading />}
      <div className="mainPage">
        {media ? <AboutMediaComp data={media} /> : <AboutUsMediaLoading />}
        {leadership ? <AboutListPeopleComp data={leadership} /> : <AboutUsListPeopleLoading />}
        {medicalAdvisor ? <AboutListPeopleComp data={medicalAdvisor} /> : <AboutUsListPeopleLoading />}
        {europeanAdvisor ? <AboutListPeopleComp data={europeanAdvisor} /> : <AboutUsListPeopleLoading />}
      </div>
    </>
  );
};

const Hero = (data) => {
  var lng = localStorage.getItem("lng") || 'en';
  let title, bgImage;
  for (const i of data.data.properties) {
    if (i.key === "title") {
      title = lng === 'kr' ? i.value.kr : i.value.en
    } else if (i.key === "background-image") {
      bgImage = lng === 'kr' ? i.value.kr : i.value.en
    }
  }
  return (
    <>
      <div style={{ paddingBottom: "20%" }}>
        <img src={bgImage} alt="" id="background-header" />
        <div id="background-header" className="opacityBg" />
        <h1 className="text-center centerHeader text-capitalize mb-4 text-lg">
          {title}
        </h1>
      </div>
    </>
  );
};

export default AboutUSPage;
