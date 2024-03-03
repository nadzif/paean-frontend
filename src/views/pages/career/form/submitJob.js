import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {jobLoaded, noPageLoaded} from "../../../../application/actions/ui";
import {TfiBriefcase, TfiLocationPin} from "react-icons/tfi";
import {useLanguage} from "../../../components/utils/LanguageProvider";
import {useParams} from "react-router-dom";
import {getJob} from "../../../../application/selectors/ui";
import axios from "axios";

const SubmitJobPage = () => {
    const {lng} = useLanguage();
    const {id, page} = useParams();
    const job = useSelector(getJob);
    const dispatch = useDispatch();
    const [fieldData, setFieldData] = useState({
        email: '',
        phone: '',
        address: '',
        references: '',
        full_name: '',
        cover_letter: '',
        additional_information: '',
        resume: null,
        degree_certificate: null,
        other_certificate: null,
    });
    const [selectedFiles, setSelectedFiles] = useState({
        resume: [], degree_certificate: [], other_certificate: [],
    });
    const [totalSize, setTotalSize] = useState(0);
    const [dataDetail, setDataDetail] = useState(null);

    const detail = () => {
        if (job && job.data) {
            return job.data.find((data) => data.id === parseInt(id));
        }
        return null;
    };

    const handleFileChange = (field, files) => {
        if ((field === 'resume' && files.length !== 1) || ((field === 'degree_certificate' || field === 'other_certificate') && files.length > 5)) {
            alert(`Invalid number of files for ${field}.`);
            return;
        }

        const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
        for (let i = 0; i < files.length; i++) {
            if (!allowedTypes.includes(files[i].type)) {
                alert('Invalid file type. Please upload PDF, JPEG, or PNG.');
                return;
            }
        }

        setSelectedFiles((prevFiles) => ({
            ...prevFiles, [field]: [...prevFiles[field], ...files],
        }));

        setFieldData({...fieldData, [field]: files});
    };

    const removeFile = (field, index) => {
        setSelectedFiles((prevFiles) => ({
            ...prevFiles, [field]: prevFiles[field].filter((_, i) => i !== index),
        }));
    };

    useEffect(() => {
        let newSize = 0;
        Object.values(selectedFiles).forEach((files) => {
            if (files) {
                for (let i = 0; i < files.length; i++) {
                    newSize += files[i].size;
                }
            }
        });
        setTotalSize(newSize);
    }, [selectedFiles]);

    useEffect(() => {
        dispatch(jobLoaded(page));
    }, [dispatch, page]);

    useEffect(() => {
        const fetchDataDetail = () => {
            const detailData = detail();
            setDataDetail(detailData);
        };
        fetchDataDetail();
    }, [job, id]);

    const save = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        Object.entries(fieldData).forEach(([key, value]) => {
            if (value !== null) {
                if (Array.isArray(value)) {
                    for (let i = 0; i < value.length; i++) {
                        formData.append(`${key}[]`, value[i]);
                    }
                } else {
                    formData.append(key, value);
                }
            }
        });

        // console.log(fieldData)
        // console.log(formData)

        try {

            const response = await axios.post('http://paean-api.live-version.com/api/applicant', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })

            if (response.ok) {
                console.log('Data berhasil disimpan ke API');
            } else {
                console.error('Gagal menyimpan data ke API');
            }
        } catch (error) {
            console.error('Terjadi kesalahan:', error);
        }
    };


    return (<>
        <div style={{paddingBottom: "20%"}}>
            <div id="background-header" className="opacityBg"/>
            <div className="text-center centerHeader">
                {dataDetail && (<>
                    <h1 className="text-capitalize mb-4 text-lg" style={{color: 'white'}}>
                        {lng === 'en' ? (dataDetail.title.en || dataDetail.title.kr) : (dataDetail.title.kr || dataDetail.title.en)}
                        YPJ Support Services Coordinator
                    </h1>
                    <div>
                        <TfiLocationPin size={20} className="me-3"/>
                        {lng === 'en' ? (dataDetail.location.en || dataDetail.location.kr) : (dataDetail.location.kr || dataDetail.location.en)}
                        Tembagapura, Papua, Indonesia
                    </div>
                    <div>
                        <TfiBriefcase size={20} className="me-3"/>
                        {lng === 'en' ? (dataDetail.employment_type.en || dataDetail.employment_type.kr) : (dataDetail.employment_type.kr || dataDetail.employment_type.en)}
                        Kontraktor
                    </div>
                </>)}
            </div>
        </div>
        <div className="mainPage">
            <section className="contact-form-wrap section">
                <div className="container">
                    <form onSubmit={(event) => save(event)}>

                        <div className="form-group">
                            <div>{lng === 'en' ? 'Name' : '이름'}</div>
                            <input
                                id="megakitname"
                                name="full_name"
                                type="text"
                                className="form-control"
                                placeholder={lng === 'en' ? 'Name' : '이름'}
                                required
                                value={fieldData.full_name}
                                onChange={(e) => setFieldData({...fieldData, full_name: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <div>{lng === 'en' ? 'Phone Number' : '전화 번호'}</div>
                            <input
                                id="megakitphone"
                                name="phone"
                                type="tel"
                                className="form-control"
                                placeholder={lng === 'en' ? 'Phone Number' : '전화 번호'}
                                required
                                value={fieldData.phone}
                                onChange={(e) => setFieldData({...fieldData, phone: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <div>{lng === 'en' ? 'Email' : '이메일'}</div>
                            <input
                                id="megakitemail"
                                name="email"
                                type="email"
                                className="form-control"
                                placeholder={lng === 'en' ? 'Email' : '이메일'}
                                required
                                value={fieldData.email}
                                onChange={(e) => setFieldData({...fieldData, email: e.target.value})}
                            />
                        </div>
                        <div className="form-group">
                            <div>{lng === 'en' ? 'Address' : '주소'}</div>
                            <input
                                id="megakitaddress"
                                name="address"
                                type="text"
                                className="form-control"
                                placeholder={lng === 'en' ? 'Address' : '주소'}
                                required
                                value={fieldData.address}
                                onChange={(e) => setFieldData({...fieldData, address: e.target.value})}
                            />
                        </div>
                        <div style={{paddingBottom: '15px'}}>
                            <div>{lng === 'en' ? 'Curriculum Vitae' : '이력서'}</div>
                            <input
                                id="megakitcv"
                                name="resume"
                                type="file"
                                className="form-control"
                                placeholder={lng === 'en' ? 'Curriculum Vitae' : '이력서'}
                                multiple
                                onChange={(e) => handleFileChange('resume', e.target.files)}
                            />
                        </div>
                        <div style={{paddingBottom: '15px'}}>
                            <div>{lng === 'en' ? 'Curriculum Vitae' : '학위증명서'}</div>
                            <input
                                id="megakitbachelor"
                                name="degree_certificate"
                                type="file"
                                className="form-control"
                                placeholder={lng === 'en' ? 'Curriculum Vitae' : '학위증명서'}
                                multiple
                                onChange={(e) => handleFileChange('degree_certificate', e.target.files)}
                            />
                        </div>
                        {selectedFiles.degree_certificate && (<div className="table-responsive mb-3">
                            <table className="table table-bordered table-sm">
                                <thead>
                                <tr>
                                    <th scope="col" style={{width: '5%'}}>#</th>
                                    <th scope="col">{lng === 'en' ? 'NAME' : '이름'}</th>
                                    <th scope="col" style={{width: '10%'}}>{lng === 'en' ? 'SIZE' : '크기'}</th>
                                    <th scope="col" style={{width: '7%'}}>{lng === 'en' ? 'ACTION' : '행동'}</th>
                                </tr>
                                </thead>
                                <tbody>
                                {selectedFiles.degree_certificate.map((file, index) => (<tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{file.name}</td>
                                    <td>{(file.size / 1000000).toFixed(2)} mb</td>
                                    <td>
                                        <button
                                            onClick={() => removeFile('degree_certificate', index)}
                                            className="ms-3"
                                        >
                                            {lng === 'en' ? 'Remove' : '제거하다'}
                                        </button>
                                    </td>
                                </tr>))}
                                </tbody>
                            </table>
                        </div>)}
                        <div style={{paddingBottom: '15px'}}>
                            <div>{lng === 'en' ? 'Other Certificates' : '기타 인증서'}</div>
                            <input
                                id="megakitother"
                                name="other_certificate"
                                type="file"
                                className="form-control"
                                placeholder="Other Certificates"
                                multiple
                                onChange={(e) => handleFileChange('other_certificate', e.target.files)}
                            />
                        </div>

                        {selectedFiles.other_certificate && (<div className="table-responsive mb-3">
                            <table className="table table-bordered table-sm">
                                <thead>
                                <tr>
                                    <th scope="col" style={{width: '5%'}}>#</th>
                                    <th scope="col">{lng === 'en' ? 'NAME' : '이름'}</th>
                                    <th scope="col" style={{width: '10%'}}>{lng === 'en' ? 'SIZE' : '크기'}</th>
                                    <th scope="col" style={{width: '7%'}}>{lng === 'en' ? 'ACTION' : '행동'}</th>
                                </tr>
                                </thead>
                                <tbody>
                                {selectedFiles.other_certificate.map((file, index) => (<tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{file.name}</td>
                                    <td>{(file.size / 1000000).toFixed(2)} mb</td>
                                    <td>
                                        <button
                                            onClick={() => removeFile('other_certificate', index)}
                                            className="ms-3"
                                        >
                                            {lng === 'en' ? 'Remove' : '제거하다'}
                                        </button>
                                    </td>
                                </tr>))}
                                </tbody>
                            </table>
                        </div>)}
                        {(selectedFiles.resume || selectedFiles.degree_certificate || selectedFiles.other_certificate) && (
                            <div className="text-center">
                                <h4>
                                    {lng === 'en' ? 'Total File Size' : '총 파일 크기'}
                                    <span
                                        className="badge bg-secondary ms-1 me-1">{(totalSize / 1000000).toFixed(2)} MB</span>
                                    {lng === 'en' ? 'Max File Size' : '최대 파일 크기'}
                                    <span className="badge bg-danger ms-1 me-1">15 MB</span>
                                </h4>
                            </div>)}

                        <progress max={15 * 1024 * 1024} value={totalSize} className="w-100"></progress>

                        <div>
                            <button
                                className="btn btn-medium btn-main btn-round-full mt-3"
                                type="submit"
                            >
                                {lng === 'en' ? 'Apply' : '적용하다'}
                            </button>
                        </div>
                    </form>

                </div>
            </section>
        </div>
    </>);
};

export default SubmitJobPage;
