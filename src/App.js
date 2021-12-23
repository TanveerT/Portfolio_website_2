import './App.css';
import About from './components/about/About';
import Description from './components/description/Description';
import Experience from './components/experience/Experience';
import Certification from './components/certification/Certification';
import Footer from './components/footer/Footer';
// import { BsHeartHalf}  from 'react-icons/bs';
import {FaHeartbeat} from 'react-icons/fa';

function App() {

  return (
    <div className="app-container">
        <div className='left-space'></div>
        <div className='main-container'>
          <About/>
          <Description/>
          <Experience/>
          <Certification/>
          <Footer/>
          <div className='end-quote'>Made with <span><FaHeartbeat/> </span></div>
        </div>
        <div className='right-space'></div>
    </div>
  );
}

export default App;
