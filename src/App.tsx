import { Route, Routes } from "react-router-dom";
import HomePage from "./lib/HomePage";
import UxPage from "./lib/UxPage"
import ItPage from "./lib/ItPage";
import ProjectPage from "./lib/ProjectPage";
import HomePageYand from "./yandex/HomeYand";
import SkillaPage from "./skilla/SkillaPage";

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={HomePage()}/>
                <Route path="/ux" element={UxPage()}/>
                <Route path="/it" element={ItPage()}/>
                <Route path="/project" element={ProjectPage()}/>
                <Route path="/yandex" element={HomePageYand()}/>
                <Route path="/skilla" element={SkillaPage()}/>
            </Routes>
        </div>
    )
}