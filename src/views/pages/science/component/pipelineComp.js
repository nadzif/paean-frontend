import React, {useEffect, useState} from 'react';
import '../../../../assets/css/progressBarTable.css';
import axios from "axios";

const ProgressBarTable = () => {

    const [phase, setPhase] = useState([])
    const [pipeline, setPipeline] = useState([])

    const getPhase = async () => {
        await axios.get('/phase')
            .then((response) => {
                setPhase(response.data.data)
            })
            .catch((error) => {
                console.log('Failed ' + error)
            })
    }

    const getPipeline = async () => {
        await axios.get('/pipeline')
            .then((response) => {
                setPipeline(response.data.data)
            })
            .catch((error) => {
                console.log('Failed' + error)
            })
    }

    useEffect(() => {
        getPhase()
        getPipeline()
    }, []);

    return (
        <table>
            <thead>
            <tr className="text-uppercase">
                <th style={{width: "20%"}}>Platform</th>
                <th style={{width: "10%"}}>Pipeline</th>
                <th style={{width: "10%"}}>Indication</th>
                {phase.map((i) => (
                    <th style={{width: `${60 / phase.length}%`}}>{i.name}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {pipeline.map((i) => (
                <>
                    {i.progresses.map((e, index) => {
                        let isDivine = false
                        return (
                            <tr>
                                {index === 0 ? (<td rowSpan={i.progresses.length}>{i.name}</td>) : (<></>)}
                                <td>
                                    {e.name}
                                </td>
                                <td>
                                    {e.indication}
                                </td>
                                {phase.map((p) => {
                                    if (p.id === e.phase_id) {
                                        isDivine = true
                                        return (
                                            <td className="progress-cell">
                                                <div style={{
                                                    "margin-top": "5px",
                                                    "margin-bottom": "5px",
                                                    "background": `linear-gradient(to right, rgb(132, 183, 249) ${e.phase_rate}%, white 0%)`,
                                                    "height": "20px"
                                                }}></div>
                                            </td>
                                        )
                                    } else {
                                        if (isDivine) {
                                            return (
                                                <td className="progress-cell"></td>
                                            )
                                        } else {
                                            return (
                                                <td className="progress-cell">
                                                    <div style={{
                                                        "margin-top": "5px",
                                                        "margin-bottom": "5px",
                                                        "background": `linear-gradient(to right, rgb(132, 183, 249) 100%, white 0%)`,
                                                        "height": "20px"
                                                    }}></div>
                                                </td>
                                            )
                                        }
                                    }
                                })}
                            </tr>
                        )
                    })}
                </>
            ))}
            </tbody>
        </table>
    );
};

export default ProgressBarTable;
