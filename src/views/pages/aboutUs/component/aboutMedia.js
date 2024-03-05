import ReactPlayer from "react-player/youtube";

const AboutMediaComp = (data) => {
  let title, subtitle, embed;
  for (const i of data.data.properties) {
    if (i.key === "title") {
      title = data.lng === 'kr' ? (i.value.kr || i.value.en) : (i.value.en || i.value.kr)
    } else if (i.key === "subtitle") {
      subtitle = data.lng === 'kr' ? (i.value.kr || i.value.en) : (i.value.en || i.value.kr)
    } else if (i.key === "embed") {
      embed = data.lng === 'kr' ? (i.value.kr || i.value.en) : (i.value.en || i.value.kr)
    }
  }
  return (
    <>
      <section className="section about-2 position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              <div className="about-item pr-3 mb-5 mb-lg-0">
                <span className="h6 text-color">{subtitle}</span>
                <h2 className="mt-3 mb-4 position-relative content-title">
                  {title}
                </h2>
                <div className="mb-5">
                  {subtitle}
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="frame-youtube">
                <ReactPlayer url={embed} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMediaComp;