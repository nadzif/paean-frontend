import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import parse from 'html-react-parser'

const AboutUsProfileComp = (props) => {
    var lng = localStorage.getItem("lng") || 'en';
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let image, name, position, desc = '';
    
    props.data.properties.forEach(data => {
        if (data.key === "name") {
            name = lng === 'kr' ? data.value.kr : data.value.en;
        } else if (data.key === "description") {
            desc = lng === 'kr' ? data.value.kr : data.value.en;
        } else if (data.key === "photo") {
            image = lng === 'kr' ? data.value.kr : data.value.en;
        } else if (data.key === "position") {
            position = lng === 'kr' ? data.value.kr : data.value.en;
        }
    })
    return (
        <>
            <div
                key={props.data.id}
                className="col-md-3 col-sm-6 show-profile"
                onClick={handleShow}
            >
                <div className="team-item-wrap mb-2 p-3">
                    <div className="team-item position-relative d-flex justify-content-center p-3 align-items-start">
                        <img
                            src={`${image}`}
                            alt=""
                            className="img-fluid w-100"
                            style={{ borderRadius: "10px" }}
                        />
                    </div>
                    <div className="team-item-content p-0 py-2">
                        <h4 className="name mb-0 text-capitalize text-center">
                            {name}
                        </h4>
                        <p className="text-position text-center mb-0">
                            {position}
                        </p>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>{name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{parse(`${desc}`)}</Modal.Body>
            </Modal>
        </>
    );
};

export default AboutUsProfileComp;