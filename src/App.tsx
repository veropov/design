import { Route, Routes } from "react-router-dom";
import HomePage from "./lib/HomePage";
import {UxPage} from "./lib/UxPage"
import ItPage from "./lib/ItPage";
import ProjectPage from "./lib/ProjectPage";
import HomePageYand from "./yandex/HomeYand";
import SkillaPage from "./skilla/SkillaPage";
import { SmartUxArea } from "./components/Smart drive/SmartPage";
import { UJMHome } from "./components/Smart drive/UJM/UJM-Home";
import { UJMReg } from "./components/Smart drive/UJM/UJM-Reg";
import { UJMProgress } from "./components/Smart drive/UJM/UJM-Progress";
import { UJMHisory } from "./components/Smart drive/UJM/UJM-History";
import { UserFlowHome } from "./components/Smart drive/User Flow/UserFlow";
import { UIHome } from "./components/Smart drive/UI/SmartUiHome";

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
                <Route path="/smart-drive/ujm/reg" element={UJMReg()}/>
                <Route path="/smart-drive/ujm/progress" element={UJMProgress()}/>
                <Route path="/smart-drive/ujm/history" element={UJMHisory()}/>
                <Route path="/smart-drive/userflow" element={UserFlowHome()}/>
                <Route path="/smart-drive/ui" element={UIHome()}/>
            </Routes>
        </div>
    )
}