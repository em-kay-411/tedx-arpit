import './App.css';
import logoWhite from './logo/logo-white.png';
import logoBlack from './logo/logo-black.png';
import { useEffect, useState } from 'react';

function App() {

  const [scroll, setScroll] = useState(0);
  const [logoSize, setLogoSize] = useState(30);
  const [leftLogoContainer, setLeftLogoContainer] = useState(50);
  const [topLogoContainer, setTopLogoContainer] = useState(50);

  const handleScroll = () => {
    setScroll(window.scrollY);

    if(window.scrollY < 500){      
      handleTopLogoContainer();

      if(window.innerWidth > 1024){
        handleResizeLogo();
        handleLeftLogoContainer();
      }
    }

    if(window.scrollY > 500 && window.scrollY < 750 && window.innerWidth < 1024){
      handleTopLogoContainer();
    }
  }

  const handleResizeLogo = () => {
    setLogoSize(30 - (0.052)*(window.scrollY));
  }

  const handleLeftLogoContainer = () => {
    setLeftLogoContainer(50 - (0.06) * (window.scrollY));
  }

  const handleTopLogoContainer = () => {
    setTopLogoContainer(50 - (0.05) * (window.scrollY));
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="logo-entrance-container" style={{left : `${leftLogoContainer}%`, top : `${topLogoContainer}%`}} >
        <img src={logoWhite} className='logo-entrance-img' style={{height : `${logoSize}vw`}} />
      </div>
    </div>
  );
}

export default App;
