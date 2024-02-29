import pipelineImg from "../../../assets/media/images/science/pipeline.png";
import {useDispatch, useSelector} from "react-redux";
import {scienceLoaded} from "../../../application/actions/ui";
import {useEffect} from "react";
import ScienceContentComp from "./component/scienceContent";
import {getScience} from "../../../application/selectors/ui";
import {useParams} from "react-router-dom";
import BgHeaderLoading from "../../components/skeletonLoading/bgHeaderLoading";
import ScienceContentsLoading from "../../components/skeletonLoading/science/scienceContentsLoading";
import {useLanguage} from "../../components/utils/LanguageProvider";
import ProgressBarTable from "./component/pipelineComp";

const SciencePage = () => {
    const {title} = useParams();
    const dispatch = useDispatch();
    const science = useSelector(getScience);
    const {lng} = useLanguage();
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
            {hero ? <Hero data={hero} lng={lng}/> : <BgHeaderLoading/>}
            <div className="mainPage">
                {contents ? <ScienceContentComp data={contents} lng={lng}/> : <ScienceContentsLoading/>}
                <section className="section science-pipline">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="section-title">
                                    <h2 className="mt-3 content-title text-center">PIPELINE</h2>
                                </div>
                                <div className="content-body text-center">
                                    <ProgressBarTable/>
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

export default SciencePage;
