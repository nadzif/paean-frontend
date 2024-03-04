import parse from 'html-react-parser'

const HomeMilestoneComp = (props) => {
    const dataProps = props.data;
    let BgImage = 'http://www.paeanbio.com/themes/main/assets/images/homepage/cells.png';
    let title = '';
    for (const i of dataProps.properties) {
        if (i.key === "title") {
            title = props.lng === 'kr' ? (i.value.kr || i.value.en) : (i.value.en || i.value.kr)
        }
    }
    return (
        <>
            <section
                className="section milestone"
                style={{backgroundImage: `url(${BgImage})`}}
            >
                <div className="container">
                    <h2 className="content-title">{title}</h2>
                    <div className="row box">
                        {dataProps.items.map(data => (
                            <div key={data.id} className="col-12 col-md-6 col-lg-3 mb-5">
                                <div className="item">
                                    {data.properties.map(data => {
                                        if (data.key === "name") {
                                            return <>
                                                <h3>{props.lng === 'kr' ? (data.value.kr || data.value.en) : (data.value.en || data.value.kr)}</h3>
                                            </>;
                                        } else if (data.key === "description") {
                                            return <>
                                                <div className="description">
                                                    {parse(`${props.lng === 'kr' ? (data.value.kr || data.value.en) : (data.value.en || data.value.kr)}`)}
                                                </div>
                                            </>;
                                        } else if (data.key === "content") {
                                            return <>
                                                <div className="description pt-lg-5">
                                                    {parse(`${props.lng === 'kr' ? (data.value.kr || data.value.en) : (data.value.en || data.value.kr)}`)}
                                                </div>
                                            </>;
                                        } else if (data.key === "date") {
                                            return <>
                                                <span
                                                    className="date">{props.lng === 'kr' ? (data.value.kr || data.value.en) : (data.value.en || data.value.kr)}</span>
                                            </>;
                                        }

                                        return <></>;
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeMilestoneComp;