import AboutUsProfileComp from "./aboutProfile";

const AboutListPeopleComp = (data) => {
  let title;
  let bgColor = "bg-gray"
  if (data.data.name === "medicalAdvisor") {
    bgColor = ""
  }
  for (const i of data.data.properties) {
    if (i.key === "title") {
      title = data.lng === 'kr' ? i.value.kr : i.value.en
    }
  }
  return (
    <>
      <section className={"section team " + bgColor}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h6 text-color"></span>
                <h2 className="mt-3 content-title">{title}</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-around">
            {data.data.items.map(data => {
              return <>
                <AboutUsProfileComp data={data} />
              </>;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutListPeopleComp;