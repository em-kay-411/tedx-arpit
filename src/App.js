import './App.css';
import logoWhite from './logo/logo-white.png';
import logoBlack from './logo/logo-black.png';
import background from './images/background.jpg';
import building from './images/building.png';
import { useEffect, useState } from 'react';

function App() {

  const [scroll, setScroll] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [logoSize, setLogoSize] = useState(30);
  const [leftLogoContainer, setLeftLogoContainer] = useState(50);
  const [topLogoContainer, setTopLogoContainer] = useState(50);
  const [bgLeft, setBgLeft] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);

    // For portrait screens
    if(window.innerWidth < 1024){
      if(window.scrollY < 500){
        handleTopLogoContainer();
        handleLeftBg();
      }

      if(window.scrollY > 500 && window.scrollY < 770){
        handleTopLogoContainer();
      }

      if(window.scrollY > 770){
        setTopLogoContainer(10);
      }
    }

    // For landscape screens
    if(window.innerWidth >= 1024){
      if(window.scrollY < 500){
        handleTopLogoContainer();
        handleLeftBg();
        handleResizeLogo();
        handleLeftLogoContainer();
      }
      
      if(window.scrollY > 500 && window.scrollY < 750){
        setLogoSize(6.5);
        setTopLogoContainer(25);
        setLeftLogoContainer(20);
      }
    }
  } 

  const handleLeftBg = () => {
    setBgLeft(0 - ((window.scrollY) / 5));
  }

  const handleResizeLogo = () => {
    setLogoSize(30 - (0.047)*(window.scrollY));
  }

  const handleLeftLogoContainer = () => {
    setLeftLogoContainer(50 - (0.06) * (window.scrollY));
  }

  const handleTopLogoContainer = () => {
    setTopLogoContainer(50 - (0.05) * (window.scrollY));
  }

    // Handle this !!!!!!! Very important
  const handleRefresh = (event) => {
    event.preventDefault();
    if(scroll > 0){
      window.scrollTo(0, 0);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleRefresh);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleRefresh);
    };
  }, []);

  return (
    <div className="App">
      {scroll <= 500 && <img src={background} className='bg-image-entrance' style= {{width : '100vw', left : `${bgLeft}%`, display : `${screenWidth > 1024 ? 'block' : 'none'}`}}/>}
      {scroll > 600 && <img src={building} className='building-image'/>}
      <div className="logo-entrance-container" style={{left : `${leftLogoContainer}%`, top : `${topLogoContainer}%`}} >
        <img src={logoWhite} className='logo-entrance-img' style={{height : `${logoSize}vw`}} />
      </div>
    </div>
  );
}

export default App;
