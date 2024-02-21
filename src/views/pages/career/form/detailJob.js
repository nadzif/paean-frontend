import { useDispatch } from "react-redux";
// import BgHeader from "../../../../assets/media/images/page-header/privacy-banner.png"
import { useEffect } from "react";
import { noPageLoaded } from "../../../../application/actions/ui";
import { TfiBriefcase, TfiLocationPin } from "react-icons/tfi";

const DetailJobPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(noPageLoaded);
    }, [dispatch]);
    return (
        <>
            <div style={{ paddingBottom: "20%" }}>
                {/* <img src={BgHeader} alt="" id="background-header" /> */}
                <div id="background-header" className="opacityBg" />
                <div className="text-center centerHeader">
                    <h1 className="text-capitalize mb-4 text-lg" style={{ color: 'white' }}>
                        YPJ Support Services Coordinator
                    </h1>
                    <div><TfiLocationPin size={20} />
                        &nbsp;&nbsp;&nbsp;Tembagapura, Papua, Indonesia</div>
                    <div><TfiBriefcase size={20} />
                        &nbsp;&nbsp;&nbsp;Kontraktor</div>
                </div>

            </div>
            <div className="mainPage">
                <section className="contact-form-wrap section">
                    <div className="container">
                        <h4 className="mb-5">About YPJ Support Services Coordinator</h4>
                        {/* content */}
                        <p>Yayasan Pendidikan Jayawijaya [YPJ] is a school set over two campuses: Kuala Kencana and&nbsp;Tembagapura in Papua, Indonesia. The school provides an inclusive education for PT Freeport&nbsp;Indonesia [PTFI]&nbsp; employees.&nbsp;</p>
                        <p>The student population has a diverse range&nbsp;of needs from various parts of the Indonesian archipelago.</p>
                        <p>﻿<strong>PURPOSE</strong></p>
                        <p>The Student Services Coordinator [SSC] is responsible for assisting the campus to focus on&nbsp;high levels&nbsp;of learning for all students. This involves establishing a delivery model for student services,&nbsp;referral systems, and mechanisms for diagnostic testing to identify students requiring support.&nbsp;</p>
                        <p>The&nbsp;SSC will meet with administrators and grade level teams to share student learning data, discuss&nbsp;intervention and enrichment strategies and where needed facilitate the development of&nbsp;individualized learning plans.&nbsp;</p>
                        <p>The SSC promotes shared leadership and supports the school to&nbsp;model collaborative skills, and structure learning focused meetings. Through a process&nbsp;of professional&nbsp;inquiry the SSC supports colleagues in sharing a range of&nbsp;responsive strategies to&nbsp;maximize student learning.</p>
                        <p><strong>DUTIES AND RESPONSIBILITIES</strong></p>
                        <p><strong>The Support Services Coordinator has the following responsibilities:</strong></p>
                        <ul><li> Lead Support Services and develop an appropriate delivery model for the provision of&nbsp;student services [language, learning and social-emotional support] at the YPJ TPRA&nbsp;Campus, which includes appropriate staffing, resources and learning support policies&nbsp;aligned with the Purpose and Vision of the school.</li><li> Liaise with the Kuala Kencana Student Services Coordinator and attend School-wide&nbsp;Student Services Meeting to align policy and practice across campuses and in alignment&nbsp;with IB Standards of Practice.</li><li> Develop diagnostic testing systems, admissions screening, and referral processes.</li><li> Develop responsive learning strategies for students requiring intervention or enrichment,&nbsp;including the development of individual learning plans.</li><li> Facilitate the regular review of student learning data including referral files, passport&nbsp;folders, student records, diagnostic testing information and anecdotal observation.</li><li> Structure learning conversations that promote a holistic view of the child as a learner and&nbsp;draw evidence from a range of sources to support students learning.</li><li> Use collaborative processes and protocols that provide for systematic, timely response for&nbsp;students in need.</li><li> Utilize a common process to address referrals, provide strategies/support and make&nbsp;recommendations that lead to positive outcomes and opportunities for student success.</li><li> Review student progress toward learning goals in conjunction with the administrators and&nbsp;teachers, and determine readiness to exit/enter support services.</li><li> Support effective communication on the learning needs of students including next steps for their learning, and ensure a collective responsibility for the transition of information between all parties involved in the learning of the child.</li><li> Provide teacher and parent education on a range of topics which include: Parenting, Mindfulness, Social Emotional Well-Being, Intervention and Child -Safeguarding</li><li> Develop Foundation and Tutorial Programs for Asrama Tomawin students in conjunction with Chaperones and teachers.</li><li> Implement the YPJ social emotional program with the support of teachers</li><li> Create a database of external Student Services in collaboration with ISOS</li><li> Complete SENIA Level 1 Instructor Training</li></ul>
                        <p><br></br></p>
                        <p><strong>MINIMUM REQUIREMENTS</strong></p>
                        <ul><li> B. Ed. B.A. or B.S. Degree or equivalent</li><li> A teaching qualification</li><li> Appropriate Student Support Services [and Counseling] credential[s] and equivalent experience.</li><li> Capacity with English preferred</li><li> Experience in a PYP and MYP preferred</li><li>Have Cultural sensitivity ﻿</li><li>Willing to adapt with the school's leave system which must refer to the school academic calendar﻿</li><li>Willing to be placed in a remote area</li></ul>
                        <p>Dateline: July 1, 2023</p>
                        {/* end content */}
                    </div>
                    <div className="container">
                        <div className="justify-content-center mt-5">
                                <a
                                    href={"/job/" + 1 +"/apply"}
                                    className="btn btn-medium btn-main btn-round-full"
                                >
                                    Apply To Position
                                </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default DetailJobPage;
