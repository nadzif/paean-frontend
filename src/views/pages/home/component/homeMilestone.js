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
                                <div
                                    className="item d-flex align-items-start flex-column bd-highlight mb-3"
                                    style={{
                                        minHeight: '250px',
                                    }}
                                >
                                    {data.properties.map(data => {
                                        if (data.key === "name") {
                                            return <>
                                                <div className="p-2 bd-highlight">
                                                    <h3>{props.lng === 'kr' ? (data.value.kr || data.value.en) : (data.value.en || data.value.kr)}</h3>
                                                </div>
                                            </>;
                                        } else if (data.key === "description") {
                                            return <>
                                                <div className="p-2 bd-highlight">
                                                    <div className="description">
                                                        {parse(`${props.lng === 'kr' ? (data.value.kr || data.value.en) : (data.value.en || data.value.kr)}`)}
                                                    </div>
                                                </div>
                                            </>;
                                        } else if (data.key === "content") {
                                            return <>
                                                <div className="mt-auto p-1 bd-highlight">
                                                    <div className="description">
                                                        {parse(`${props.lng === 'kr' ? (data.value.kr || data.value.en) : (data.value.en || data.value.kr)}`)}
                                                    </div>
                                                </div>
                                            </>;
                                        } else if (data.key === "date") {
                                            return <>
                                                <div className="mt-auto p-1 bd-highlight">
                                                <span
                                                    className="date">{props.lng === 'kr' ? (data.value.kr || data.value.en) : (data.value.en || data.value.kr)}</span>
                                                </div>
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