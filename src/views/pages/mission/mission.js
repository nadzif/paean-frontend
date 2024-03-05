import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getHome} from "../../../application/selectors/ui";
import {useEffect, useState} from "react";
import {homeLoaded} from "../../../application/actions/ui";

const MissionPageDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const home = useSelector(getHome);
    const [dataDetail, setDataDetail] = useState(null);

    let mission;
    home.sections.map(data => {
        if (data.name === "mission") {
            mission = data;
        }
    });

    const detailMission = () => {
        if (mission) {
            return mission.items.find((data) => data.id === parseInt(id));
        }
        return null
    };

    useEffect(() => {
        dispatch(homeLoaded);
    }, [dispatch]);

    useEffect(() => {
        const fetchDataDetail = () => {
            const detailData = detailMission();
            setDataDetail(detailData);
        };
        fetchDataDetail();
    }, [home, id]);


    return (
        <>
        </>
    )
}

export default MissionPageDetail