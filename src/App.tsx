import { Route, Routes } from "react-router-dom";
import HomePage from "./lib/HomePage";
import UxPage from "./lib/UxPage"
import ItPage from "./lib/ItPage";
import ProjectPage from "./lib/ProjectPage";
import HomePageYand from "./yandex/HomeYand";
import SkillaPage from "./skilla/SkillaPage";
import { SmartUxArea } from "./components/Smart drive/SmartPage";
import { UJMHome } from "./components/Smart drive/UJM/UJM-Home";

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
                
                <Route path="/smart-drive" element={SmartUxArea()}/>
                <Route path="/smart-drive/ujm" element={UJMHome()}/>
            </Routes>
        </div>
    )
}