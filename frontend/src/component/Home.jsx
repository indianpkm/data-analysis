import Sector from './chart/Sector';
import Navbar from './navbar/Navbar';
import '../component/Home.css'
import Topic from './mapChart/Topic';
import StartYear from './startYear/StartYear';
import Pestle from './chart/Pestle';
import Region from './region/Region';
import EndYear from './endYear/EndYear';
import Country from './mapChart/Country';
import Intensity from './intensity/Intensity';
import { useEffect } from 'react'; import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  useEffect(() => {
    toast.info(<>
      <span style={{ color: 'black', fontSize: '2rem', fontWeight: 'bold' }}>
        Welcome to my website! </span> <br /> {' '}
      <span style={{ cursor: 'pointer', fontWeight: 500, fontSize: '1.5rem' }}>
        • If you want to read any data, hover the mouse above the data. <br />
        • Select dropdown if you want to filter data and wait.... <br />
        • If any error please refresh page or check internet
      </span>
    </>, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 30000,
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className="upper">
          <Intensity />
          <StartYear />
          <Pestle />
        </div>
        <div className='lineChart'>
          <Region />
          <Country />
          <Topic />
        </div>
        <div style={{ display: 'flex' }}>
          <EndYear />
          <Sector />
        </div>
      </div>
    </>
  )
}

export default Home