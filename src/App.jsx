import logo from './assets/logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Profile from "./pages/Profile.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects';
import ProjectDetail from "./pages/ProjectDetail.jsx";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header logo={logo}/>
                <Routes>
                    <Route path='*' element={<Profile userName='igorkang-smc'/>}/>
                    <Route path='/projects' element={<Projects userName='igorkang-smc'/>} />
                    <Route path='/projects/:name' element={<ProjectDetail userName='igorkang-smc'/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
