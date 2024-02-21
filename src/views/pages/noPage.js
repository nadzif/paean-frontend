import { useDispatch } from "react-redux";
import BgHeader from "../../assets/media/images/page-header/contact-us.jpg"
import { useEffect } from "react";
import { noPageLoaded } from "../../application/actions/ui";

const NoPage = () => {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(noPageLoaded);
    }, [dispatch]);
  return (
    <>
      <div style={{ paddingBottom: "20%" }}>
        <img src={BgHeader} alt="" id="background-header" />
        <div id="background-header" className="opacityBg" />
        <h1 className="text-center centerHeader text-capitalize mb-4 text-lg">
          Page Not Found
        </h1>
      </div>
      <div className="mainPage"></div>
    </>
  );
};

export default NoPage;
