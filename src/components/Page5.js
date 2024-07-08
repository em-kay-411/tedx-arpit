import '../css/Page5.css';
import { useEffect, useState } from 'react';
import dhirajImage from '../team/dhiraj.png';

const nameInfoMap = {};
nameInfoMap['MR. DHEERAJ AGARWAL'] = 'Director - Central Corporate Relations, Dr. D Y Patil Unitech Society, Pune';

function Page5() {

    const [fontSizeW, setFontSizeW] = useState(1);
    const [fontSizeE, setFontSizeE] = useState(1);
    const [weOpacity, setWeOpacity] = useState(0);
    const [imageName, setImageName] = useState('MR. DHEERAJ AGARWAL');
    const [imageDescription, setImageDescription] = useState('Director - Center of Corporate Relations,    Dr. D Y Patil Unitech Society, Pune')

    const handleScroll = () => {
        // For portrait screens
        if (window.matchMedia("(orientation: portrait)").matches) {
            if(window.scrollY > 17000 && window.scrollY < 17100){
                handleFontSizeChangeEPortrait();
                handleOpacityChange();
            }

            if(window.scrollY > 17100 && window.scrollY < 18000){
                handleFontSizeChangeEPortrait();
                handleFontSizeChangeWPortrait();
                handleOpacityChange();
                handleOpacityChange();
            }

            if(window.scrollY > 18000 && window.scrollY < 18100){
                setFontSizeE(10);
                handleFontSizeChangeWPortrait();
                handleOpacityChange();
                handleOpacityChange();
            }

            if(window.scrollY > 18100 && window.scrollY < 18500){
                setFontSizeW(10);
                setWeOpacity(1);
            }

            if(window.scrollY > 18500){
                setImageName('MR. DHEERAJ AGARWAL');
                setImageDescription(nameInfoMap['MR. DHIRAJ AGARWAL']);
            }
        }

        // For landscape screens
        if (window.matchMedia("(orientation: landscape)").matches) {
            if(window.scrollY > 17000 && window.scrollY < 17100){
                handleFontSizeChangeE();
                handleOpacityChange();
            }

            if(window.scrollY > 17100 && window.scrollY < 18000){
                handleFontSizeChangeE();
                handleFontSizeChangeW();
                handleOpacityChange();
                handleOpacityChange();
            }

            if(window.scrollY > 18000 && window.scrollY < 18100){
                setFontSizeE(22);
                handleFontSizeChangeW();
                handleOpacityChange();
                handleOpacityChange();
            }

            if(window.scrollY > 18100 && window.scrollY < 18500){
                setFontSizeW(22);
                setWeOpacity(1);
            }

            if(window.scrollY > 18500){
                setImageName('MR. DHEERAJ AGARWAL');
                setImageDescription(nameInfoMap['MR. DHEERAJ AGARWAL']);
            }
        }
    }

    const handleOpacityChange = () => {
        setWeOpacity((1 / 1100) * (window.scrollY - 17000));
    }

    const handleFontSizeChangeE = () => {
        setFontSizeE((21 / 1000) * (window.scrollY - 17000) + 1);
    }

    const handleFontSizeChangeW = () => {
        setFontSizeW((21 / 1000) * (window.scrollY - 17100) + 1)
    }

    const handleFontSizeChangeEPortrait = () => {
        setFontSizeE((9 / 1000) * (window.scrollY - 17000) + 1);
    }

    const handleFontSizeChangeWPortrait = () => {
        setFontSizeW((9 / 1000) * (window.scrollY - 17100) + 1)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className="page5">
            <div className="page5-we" style={{opacity : `${weOpacity}`}}>
                <div className="page5-w" style={{fontSize : `${fontSizeW}rem`}}>W</div>
                <div className="page5-e" style={{fontSize : `${fontSizeE}rem`}}>E</div>
            </div>
            {window.scrollY > 18500 && <div className="page5-image-info">
                <div className="page5-image-name">
                    {imageName}
                </div>
                <div className="page5-image-description">
                    {imageDescription}
                </div>
            </div>}
            {window.scrollY > 18100 && <div className="page5-description">
                a line-up behind the scenes making TEDxDYPIT Pimpri happen
            </div>}
            {window.scrollY > 18500 && <div className="page5-special">Special Thanks</div>}
            {window.scrollY > 18500 && <img className="page5-dhiraj-image" src={dhirajImage} alt="" />}
        </div>
    )
}

export default Page5;