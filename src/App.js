import './App.css';
import logoWhite from './logo/logo-white.png';
import logoBlack from './logo/logo-black.png';
import background from './images/background.jpg';
import building from './images/building.png';
import { useEffect, useState, useRef } from 'react';
import Page2 from './components/Page2';

function App() {

  const [scroll, setScroll] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [logoSize, setLogoSize] = useState(30);
  const [leftLogoContainer, setLeftLogoContainer] = useState(50);
  const [topLogoContainer, setTopLogoContainer] = useState(window.innerWidth < 1024 ? 50 : 40);
  const [bgLeft, setBgLeft] = useState(0);
  const [scriptPosition, setScriptPosition] = useState(-30);
  const [animationName, setAnimationName] = useState('text-appear');  
  const [logoContainerX, setLogoContainerX] = useState(-50);
  const [logoContainerY, setLogoContainerY] = useState(-50);
  const [logoContainerScale, setLogoContainerScale] = useState(1);
  const [buildingImageX, setBuildingImageX] = useState(0);
  const [buildingImageY, setBuildingImageY] = useState(-25);
  const [buildingImageScale, setBuildingImageScale] = useState(1);

  const handleScroll = () => {
    setScroll(window.scrollY);
    console.log(window.scrollY);

    // For portrait screens
    if(window.matchMedia("(orientation: portrait)").matches){
      if(window.scrollY < 500){
        handleTopLogoContainer();
        handleLeftBg();
      }

      if(window.scrollY > 500 && window.scrollY < 610){
        handleTopLogoContainer();
      }

      if(window.scrollY > 610 && window.scrollY < 2500){
        setTopLogoContainer(20);
        setLogoContainerScale(1);
        setLogoContainerX(-50);
        setLogoContainerY(-50);
        setBuildingImageX(0);
        setBuildingImageY(-25);
        setBuildingImageScale(1);
      }

      if(window.scrollY > 2500 && window.scrollY < 4000){
        handleLogoContainerPassingByEffect();
        handleBuildingImagePassingByEffect();
      }
      
      if(window.scrollY < 900){
        setAnimationName('text-appear');
      }
    }

    // For landscape screens
    if(window.matchMedia("(orientation: landscape)").matches){
      if(window.scrollY < 500){
        // handleTopLogoContainer();
        handleLeftBg();
        handleResizeLogo();
        handleLeftLogoContainer();
      }
      
      if(window.scrollY > 500 && window.scrollY < 2500){
        setLogoSize(8.5);
        setTopLogoContainer(40);
        setLeftLogoContainer(20);
        setLogoContainerScale(1);
        setLogoContainerX(-50);
        setLogoContainerY(-50);
        setBuildingImageX(0);
        setBuildingImageY(-25);
        setBuildingImageScale(1);
      }

      if(window.scrollY > 2500 && window.scrollY < 4000){
        handleLogoContainerPassingByEffect();
        handleBuildingImagePassingByEffect();
      }

      if(window.scrollY < 900){
        setAnimationName('text-appear');
      }
    }
  } 

  const handleLogoContainerPassingByEffect = () => {
    setLogoContainerX(((-350 / 1500) * (window.scrollY - 4000)) - 400);
    setLogoContainerY(((-20 / 1500) * (window.scrollY - 4000)) - 70);
    setLogoContainerScale(((4 / 1500) * (window.scrollY - 4000)) + 5);
  }

  const handleBuildingImagePassingByEffect = () => {
    setBuildingImageX((500 /1500) * (window.scrollY - 2500));
    setBuildingImageY(((15 / 1500) * (window.scrollY - 4000)) - 10);
    setBuildingImageScale(((4 / 1500) * (window.scrollY - 4000)) + 5);
  }

  const handleLeftBg = () => {
    setBgLeft(0 - ((window.scrollY) / 5));
  }

  const handleResizeLogo = () => {
    setLogoSize(30 - (0.0438)*(window.scrollY));
  }

  const handleLeftLogoContainer = () => {
    setLeftLogoContainer(50 - (0.06) * (window.scrollY));
  }

  const handleTopLogoContainer = () => {
    setTopLogoContainer(50 - (0.05) * (window.scrollY));
  }

    // Handle this !!!!!!! Very important
  const handleRefresh = () => {
    console.log('here');
    window.scrollTo(0, 0);
    setScroll(0);
  }

  window.addEventListener('load', handleRefresh);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('load', handleRefresh);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.addEventListener('load', handleRefresh);
    };
  }, []);

  const handleAnimationEnd = () => {
    if(animationName === 'text-appear'){
      setAnimationName('flipping-animation-y');
    }
    else if(animationName === 'flipping-animation-y'){
      setAnimationName('flipping-animation-x');
    }
  }

  return (
    <div className="App">
      {scroll <= 500 && <img src={background} className='bg-image-entrance' style= {{width : '100vw', left : `${bgLeft}%`, display : `${screenWidth > 1024 ? 'block' : 'none'}`}}/>}
      {scroll > 600 && <img src={building} className='building-image' style={{transform : `translate(${buildingImageX}%, ${buildingImageY}%) scale(${buildingImageScale})`}}/>}
      {scroll < 4000 && <div className="logo-entrance-container" style={{left : `${leftLogoContainer}%`, top : `${topLogoContainer}%`, transform: `translate(${logoContainerX}%, ${logoContainerY}%) scale(${logoContainerScale})`}} >
        <img src={logoWhite} className='logo-entrance-img' style={{height : `${logoSize}vw`}} />
        {scroll > 700 && <div className="presents-text" style = {{animationPlayState : `${scroll > 700 ? 'running' : 'paused'}`}}>Presents</div>}
        {scroll > 1500 && <div className="theme-name">
          <div className="top-theme-name">
            <div className="flip" style = {{animationPlayState : `${scroll > 1500 ? 'running' : 'paused'}`}}>FLIP</div>
            <div className="the" style = {{animationPlayState : `${scroll > 1500 ? 'running' : 'paused'}`}}>THE</div>
          </div>
          <div className="bottom-theme-name" onAnimationEnd={handleAnimationEnd} style={{transform : `translate(0, ${scriptPosition}px)`, animationName : `${animationName}`, animationDuration : `${animationName === 'text-appear' ? '1s' : animationName === 'flipping-animation-y' ? '0s' : '0.3s'}`, animationPlayState : `${scroll > 1100 ? 'running' : 'paused'}`}}>SCRIPT</div>
        </div>}
        {scroll > 1500 && <div className="date-and-venue">
          <div className="date" style = {{animationPlayState : `${scroll > 1500 ? 'running' : 'paused'}`}}>
            <div className="date-number">25</div>
            <div className="th">th</div>
            <div className="date-month-year">August '24</div>
          </div>
          <div className="separation">|</div>
          <div className="venue" style = {{animationPlayState : `${scroll > 1500 ? 'running' : 'paused'}`}}>DPU <br /> Auditorium</div>
        </div>}
      </div>} 
      {scroll > 2500 && <Page2/>}
    </div>
  );
}

export default App;
