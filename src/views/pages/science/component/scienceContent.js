import parse from 'html-react-parser'

const ScienceContentComp = (data) => {
    return <>
        {data.data.items.map(data => {
            let title = '';
            let desc = '';
            let position = 'left';
            let bgImage = '';
            let bgColor = '';
            {
                for (const i of data.properties) {
                    if (i.key === "title") {
                        title = data.lng === 'kr' ? i.value.kr : i.value.en
                    } else if (i.key === "descriptions") {
                        desc = data.lng === 'kr' ? i.value.kr : i.value.en
                    } else if (i.key === "position") {
                        if (i.value.en === 'right') {
                            position = 'end'
                        } else if (i.value.en === 'middle') {
                            position = 'center'
                        }
                    } else if (i.key === 'background-image') {
                        bgImage = data.lng === 'kr' ? i.value.kr : i.value.en
                    } else if (i.key === 'background-color') {
                        bgColor = data.lng === 'kr' ? i.value.kr : i.value.en
                    }
                }
            }
            return <>
                <div className="science-content">
                    <section
                        style={bgImage === '' ? {
                            color: "white",
                        } : {
                            backgroundImage: `url(${bgImage})`,
                            backgroundSize: "100%",
                            color: "white",
                        }}
                    >
                        <div
                            className="opacityBg"
                            style={bgImage === '' ? {
                                backgroundColor: bgColor,
                                padding: "10%",
                                width: "100%",
                            } : {
                                backgroundColor: "rgba(0, 0, 0, 0.8)",
                                padding: "10%",
                                width: "100%",
                            }}
                        >
                            <div className="container">
                                <div className={"row justify-content-" + position}>
                                    <div className={"col-lg-7 text-" + position}>
                                        <div className="section-title">
                                            <h2
                                                className="mt-3 content-title"
                                                style={{color: "white"}}
                                            >
                                                {title}
                                            </h2>
                                        </div>
                                        <div className="content-body">
                                            {parse(`${desc}`)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>;
        })}
    </>;
};

export default ScienceContentComp;