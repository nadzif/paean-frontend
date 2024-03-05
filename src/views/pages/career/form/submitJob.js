import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { jobLoaded, noPageLoaded } from "../../../../application/actions/ui";
import { TfiBriefcase, TfiLocationPin } from "react-icons/tfi";
import { useLanguage } from "../../../components/utils/LanguageProvider";
import { useNavigate, useParams } from "react-router-dom";
import { getJob } from "../../../../application/selectors/ui";
import axios from "axios";
import moment from "moment/moment";
import { useTranslation } from "react-i18next";

const SubmitJobPage = () => {
    const { t } = useTranslation();
    const { lng } = useLanguage();
    const { id, page } = useParams();
    const job = useSelector(getJob);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [fieldData, setFieldData] = useState({
        email: "",
        phone: "",
        address: "",
        references: "",
        full_name: "",
        cover_letter: "",
        additional_information: "",
        resume: null,
        degree_certificate: [],
        other_certificate: [],
    });
    const [selectedFiles, setSelectedFiles] = useState({
        resume: null,
        degree_certificate: [],
        other_certificate: [],
    });
    const [totalSize, setTotalSize] = useState(0);
    const [loading, setLoading] = useState(false);
    const [progressUpload, stProgressUpload] = useState(0);
    const [dataDetail, setDataDetail] = useState(null);

    const validation =
        fieldData.full_name !== "" &&
        fieldData.email !== "" &&
        fieldData.phone !== "" &&
        fieldData.address !== "" &&
        fieldData.resume !== null &&
        totalSize <= 15 * 1024 * 1024;

    const detail = () => {
        if (job && job.data) {
            return job.data.find((data) => data.id === parseInt(id));
        }
        return null;
    };

    const handleFileChange = (field, files) => {
        if (
            (field === "resume" && files.length !== 1) ||
            ((field === "degree_certificate" || field === "other_certificate") && files.length > 5)
        ) {
            alert(`Invalid number of files for ${field}.`);
            return;
        }

        const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
        for (let i = 0; i < files.length; i++) {
            if (!allowedTypes.includes(files[i].type)) {
                alert("Invalid file type. Please upload PDF, JPEG, or PNG.");
                return;
            }
        }

        if (field === "resume") {
            setSelectedFiles((prevFiles) => ({
                ...prevFiles,
                [field]: files[0],
            }));
            setFieldData({ ...fieldData, [field]: files[0] });
        } else {
            setSelectedFiles((prevFiles) => ({
                ...prevFiles,
                [field]: [...prevFiles[field], ...files],
            }));
            setFieldData({ ...fieldData, [field]: [...fieldData[field], ...files] });
        }
    };

    const removeFile = (field, index) => {
        setSelectedFiles((prevFiles) => ({
            ...prevFiles,
            [field]: prevFiles[field].filter((_, i) => i !== index),
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
        setLoading(true);
        const formData = new FormData();

        Object.entries(fieldData).forEach(([key, value]) => {
            if (value !== null) {
                if (Array.isArray(value)) {
                    for (let i = 0; i < value.length; i++) {
                        formData.append(`${key}`, value[i]);
                    }
                } else {
                    formData.append(key, value);
                }
            }
        });

        try {
            const response = await axios.post("/applicant", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                    const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                    stProgressUpload(progress);
                },
            });

            if (response.status === 201) {
                console.log("Data berhasil disimpan ke API");
                setFieldData({
                    email: "",
                    phone: "",
                    address: "",
                    references: "",
                    full_name: "",
                    cover_letter: "",
                    additional_information: "",
                    resume: null,
                    degree_certificate: null,
                    other_certificate: null,
                });
                setSelectedFiles({
                    resume: [],
                    degree_certificate: [],
                    other_certificate: [],
                });
                setLoading(false);
                window.alert("Success to Send Application");
                navigate("/career");
            } else {
                setLoading(false);
                console.error("Gagal menyimpan data ke API");
            }
        } catch (error) {
            setLoading(false);
            window.alert("Failed to Send Application");
            console.error("Terjadi kesalahan:", error);
        }
    };

    return (
        <>
            <div>
                {/*<img src={BgHeader} alt="" id="background-header"/>*/}
                <div id="background-header" className="opacityBg" />
                <h1 className="text-center centerHeader text-capitalize mb-4 text-lg">{/*{type} Content*/}</h1>
            </div>
            <div className="contentPage">
                <section className="contact-form-wrap section">
                    <div className="container mb-4">
                        {dataDetail && (
                            <>
                                <h3 className="text-uppercase mb-2 text-lg">
                                    {lng === "en"
                                        ? dataDetail.title.en || dataDetail.title.kr
                                        : dataDetail.title.kr || dataDetail.title.en}
                                </h3>
                                <div>
                                    <TfiLocationPin size={20} className="me-3" />
                                    {lng === "en"
                                        ? dataDetail.location.en || dataDetail.location.kr
                                        : dataDetail.location.kr || dataDetail.location.en}
                                </div>
                                <div>
                                    <TfiBriefcase size={20} className="me-3" />
                                    {lng === "en"
                                        ? dataDetail.employment_type.en || dataDetail.employment_type.kr
                                        : dataDetail.employment_type.kr || dataDetail.employment_type.en}
                                </div>
                            </>
                        )}
                        {dataDetail && (
                            <>
                                <h4 className="mt-3 mb-3">{lng === "en" ? "Job Description" : "업무 설명서"}</h4>
                                <p>
                                    {lng === "en"
                                        ? dataDetail.description.en || dataDetail.description.kr
                                        : dataDetail.description.kr || dataDetail.description.en}
                                </p>
                                {/*---------------------------------------------------------------*/}
                                <h4>{lng === "en" ? "Qualifications" : "자격"}</h4>
                                <p>
                                    {lng === "en"
                                        ? dataDetail.qualifications.en || dataDetail.qualifications.kr
                                        : dataDetail.qualifications.kr || dataDetail.qualifications.en}
                                </p>
                                {/*---------------------------------------------------------------*/}
                                <h4>{lng === "en" ? "Application Deadline" : "신청 마감"}</h4>
                                <p>{moment(dataDetail.applicationDeadline).format("LLL")}</p>
                            </>
                        )}
                    </div>
                    <div className="container">
                        <div className=" mb-3">
                            <h4>{lng === "en" ? "Apply for this Job" : "구직 신청하다"}</h4>
                        </div>

                        <form onSubmit={(event) => save(event)}>
                            <div className="form-group">
                                <div>{t("name")}</div>
                                <input
                                    id="megakitname"
                                    name="full_name"
                                    type="text"
                                    className="form-control"
                                    placeholder={t("name")}
                                    required
                                    value={fieldData.full_name}
                                    onChange={(e) => setFieldData({ ...fieldData, full_name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <div>{t("phone number")}</div>
                                <input
                                    id="megakitphone"
                                    name="phone"
                                    type="tel"
                                    className="form-control"
                                    placeholder={t("phone number")}
                                    required
                                    value={fieldData.phone}
                                    onChange={(e) => setFieldData({ ...fieldData, phone: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <div>{t("email")}</div>
                                <input
                                    id="megakitemail"
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    placeholder={t("email")}
                                    required
                                    value={fieldData.email}
                                    onChange={(e) => setFieldData({ ...fieldData, email: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <div>{t("address")}</div>
                                <input
                                    id="megakitaddress"
                                    name="address"
                                    type="text"
                                    className="form-control"
                                    placeholder={t("address")}
                                    required
                                    value={fieldData.address}
                                    onChange={(e) => setFieldData({ ...fieldData, address: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <div>{t("references")}</div>
                                <textarea
                                    id="megakitreferences"
                                    name="references"
                                    className="form-control"
                                    placeholder={t("references")}
                                    value={fieldData.references}
                                    onChange={(e) => setFieldData({ ...fieldData, references: e.target.value })}
                                />
                            </div>
                            <div style={{ paddingBottom: "15px" }}>
                                <div>{t("curriculum vitae")}</div>
                                <input
                                    id="megakitcv"
                                    name="resume"
                                    type="file"
                                    className="form-control"
                                    placeholder={t("curriculum vitae")}
                                    multiple
                                    onChange={(e) => handleFileChange("resume", e.target.files)}
                                />
                            </div>
                            <div style={{ paddingBottom: "15px" }}>
                                <div>{t("degree certificate")}</div>
                                <input
                                    id="megakitbachelor"
                                    name="degree_certificate"
                                    type="file"
                                    className="form-control"
                                    placeholder={t("degree certificate")}
                                    multiple
                                    onChange={(e) => handleFileChange("degree_certificate", e.target.files)}
                                />
                            </div>
                            {selectedFiles.degree_certificate && (
                                <div className="table-responsive mb-3">
                                    <table className="table table-bordered table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ width: "5%" }}>
                                                    #
                                                </th>
                                                <th scope="col">{t("name")}</th>
                                                <th scope="col" style={{ width: "10%" }}>
                                                    {t("size")}
                                                </th>
                                                <th scope="col" style={{ width: "7%" }}>
                                                    {t("action")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedFiles.degree_certificate.map((file, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{file.name}</td>
                                                    <td>{(file.size / 1000000).toFixed(2)} mb</td>
                                                    <td>
                                                        <button
                                                            onClick={() => removeFile("degree_certificate", index)}
                                                            className="ms-3"
                                                        >
                                                            {t("remove")}
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            <div style={{ paddingBottom: "15px" }}>
                                <div>{lng === "en" ? "Other Certificates" : "기타 인증서"}</div>
                                <input
                                    id="megakitother"
                                    name="other_certificate"
                                    type="file"
                                    className="form-control"
                                    placeholder={t("other certificates")}
                                    multiple
                                    onChange={(e) => handleFileChange("other_certificate", e.target.files)}
                                />
                            </div>

                            {selectedFiles.other_certificate && (
                                <div className="table-responsive mb-3">
                                    <table className="table table-bordered table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col" style={{ width: "5%" }}>
                                                    #
                                                </th>
                                                <th scope="col">{t("name")}</th>
                                                <th scope="col" style={{ width: "10%" }}>
                                                    {t("size")}
                                                </th>
                                                <th scope="col" style={{ width: "7%" }}>
                                                    {t("action")}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {selectedFiles.other_certificate.map((file, index) => (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{file.name}</td>
                                                    <td>{(file.size / 1000000).toFixed(2)} mb</td>
                                                    <td>
                                                        <button
                                                            onClick={() => removeFile("other_certificate", index)}
                                                            className="ms-3"
                                                        >
                                                            {t("remove")}
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                            {(selectedFiles.resume ||
                                selectedFiles.degree_certificate ||
                                selectedFiles.other_certificate) && (
                                <div className="text-center">
                                    <h4>
                                        {t("total file size")}
                                        <span className="badge bg-secondary ms-1 me-1">
                                            {(totalSize / 1000000).toFixed(2)} MB
                                        </span>
                                        {t("max file size")}
                                        <span className="badge bg-danger ms-1 me-1">15 MB</span>
                                    </h4>
                                </div>
                            )}

                            <progress max={15 * 1024 * 1024} value={totalSize} className="w-100"></progress>

                            <div>
                                {loading ? (
                                    <button
                                        className={`btn btn-medium btn-main btn-round-full mt-3 disabled`}
                                        type="submit"
                                    >
                                        {progressUpload + " %"}
                                    </button>
                                ) : (
                                    <button
                                        className={`btn btn-medium btn-main btn-round-full mt-3 ${
                                            validation ? "" : "disabled"
                                        }`}
                                        type="submit"
                                    >
                                        {t("send application")}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SubmitJobPage;
