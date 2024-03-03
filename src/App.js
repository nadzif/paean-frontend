import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";
import 'react-loading-skeleton/dist/skeleton.css'
import {SkeletonTheme} from 'react-loading-skeleton';
import NavbarComp from "./views/components/navBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./views/pages/home/home";
import NoPage from "./views/pages/noPage";
import SciencePage from "./views/pages/science/science";
import NewsPage from "./views/pages/news/news";
import ContactUSPage from "./views/pages/contactUs/contactUs";
import AboutUSPage from "./views/pages/aboutUs/aboutUs";
import PrivacyStatementPage from "./views/pages/privacyStatement/privacyStatement";
import CookiePolicyPage from "./views/pages/cookiePolicy/cookiePolicy";
import CareerPage from "./views/pages/career/career";
import DetailJobPage from "./views/pages/career/form/detailJob";
import SubmitJobPage from "./views/pages/career/form/submitJob";
import ContentPage from "./views/pages/news/newsContent";
import MissionPageDetail from "./views/pages/mission/mission";

function App() {
    return (
        <SkeletonTheme baseColor="#c1bbbb" highlightColor="#857e7e">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<NavbarComp/>}>
                        <Route index element={<HomePage/>}/>
                        <Route path="/mission/:id?" element={<MissionPageDetail/>}/>
                        <Route path="/science/:title?" element={<SciencePage/>}/>
                        <Route path="/news/:id?" element={<NewsPage/>}/>
                        <Route path="/blog/:id?" element={<NewsPage/>}/>
                        <Route path="/contactus" element={<ContactUSPage/>}/>
                        <Route path="/aboutus" element={<AboutUSPage/>}/>
                        <Route path="/content/:type/:page/:id" element={<ContentPage/>}/>
                        {/*<Route path="/blogcontent/:id" element={<NewsContentPage/>}/>*/}
                        <Route path="/privacy-statement" element={<PrivacyStatementPage/>}/>
                        <Route path="/cookie-policy" element={<CookiePolicyPage/>}/>
                        <Route path="/career" element={<CareerPage/>}/>
                        <Route path="/career/:page/:id?" element={<DetailJobPage/>}/>
                        <Route path="/career/:page/:id?/apply" element={<SubmitJobPage/>}/>
                        <Route path="*" element={<NoPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </SkeletonTheme>
    );
}

export default App;
