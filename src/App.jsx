import logo from './assets/logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Profile from "./pages/Profile.jsx";

function App() {
    return (
        <div className="App">
            <Header logo={logo}/>
            <Profile userName='igorkang-smc'/>
        </div>
    );
}

export default App;
