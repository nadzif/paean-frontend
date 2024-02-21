import pipelineImg from "../../../assets/media/images/science/pipeline.png";
import { useDispatch, useSelector } from "react-redux";
import { scienceLoaded } from "../../../application/actions/ui";
import { useEffect } from "react";
import ScienceContentComp from "./component/scienceContent";
import { getScience } from "../../../application/selectors/ui";
import { useParams } from "react-router-dom";
import BgHeaderLoading from "../../components/skeletonLoading/bgHeaderLoading";
import ScienceContentsLoading from "../../components/skeletonLoading/science/scienceContentsLoading";

const SciencePage = () => {
  const { title } = useParams();
  const dispatch = useDispatch();
  const science = useSelector(getScience);
  useEffect(() => {
    dispatch(scienceLoaded);
    // setTimeout(() => {
    //   if (title !== undefined) {
    //     const element = document.getElementById(title);
    //     if (element) {
    //       element.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   }
    // }, 100);
  }, [dispatch, title]);

  let hero, contents;

  science.sections.map(data => {
    if (data.name === "hero") {
      hero = data;
    } else if (data.name === "contents") {
      contents = data;
    }
  });

  return (
    <>
      {hero ? <Hero data={hero} /> : <BgHeaderLoading />}
      <div className="mainPage">
        {contents ? <ScienceContentComp data={contents} /> : <ScienceContentsLoading />}
        <section className="section science-pipline">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section-title">
                  <h2 className="mt-3 content-title text-center">PIPELINE</h2>
                </div>
                <div className="content-body text-center">
                  <img src={pipelineImg} alt="" style={{ width: "80%" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
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

export default SciencePage;
