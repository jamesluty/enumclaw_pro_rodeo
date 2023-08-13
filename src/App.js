import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavbarComp from './components/Navbar';
import Home from './views/Home';
import Rodeo from './views/Rodeo';
import Concerts from './views/Concerts';
import Sponsors from './views/Sponsors';
import SponsorForm from './views/SponsorForm';
import SiteMap from './components/SiteMap';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/rodeo-info" exact element={<Rodeo/>} />
        <Route path="/sponsors" exact element={<Sponsors/>} />
        <Route path="/rodeo-concerts" exact element={<Concerts/>} />
        <Route path="/become-a-sponsor" exact element={<SponsorForm/>} />
        <Route path="*" exact element={<Navigate to="/"/>}/>
      </Routes>
      <SiteMap/>
    </div>
  );
}

export default App;
