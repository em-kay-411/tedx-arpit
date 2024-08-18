import '../css/Page4.css';
import { useState, useEffect } from 'react';
import VishwasNangarePatil from '../speakers/VishwasNangrePatil.png'
import RohiniPatil from '../speakers/RohiniPatil.png';
import SandeepAdani from '../speakers/SandeepAdani.png';
import AbhishekKar from '../speakers/AbhishekKar.png';
import VijaypalRawat from '../speakers/VijaypalRawat.png';
import BharatChandak from '../speakers/BharatChandak.png';
import speaker2 from '../speakers/speaker2.png';
import AayushSharma from '../speakers/AayushSharma.png';
import AgastyaShah from '../speakers/AgastyaShah.png';
import PranjalKamra from '../speakers/PranjalKamra.png';
import PriyaJain from '../speakers/PriyaJain.png';
import RajKapoor from '../speakers/RajKapoor.png';
import Image from 'react-bootstrap/Image';

const speakerDescriptionMap = {};
speakerDescriptionMap['Vishwas Nangare Patil'] = 'Additional Director General of the Anti-Corruption Bureau, Maharashtra';
speakerDescriptionMap['Rohini Patil'] = 'MBBS, Nuritionist, Author, Entrepreneur';
speakerDescriptionMap['Sandeep Adani'] = 'Senior Vice President, Adani Total Gas Ltd.';
speakerDescriptionMap['Abhishek Kar'] = 'Finance Influencer';
speakerDescriptionMap['Bharat Chandak'] = 'Artist, Singer & Song Writer';
speakerDescriptionMap['Vijaypal Singh Rawat'] = 'Commodore Vijaypal Rawat, Vishisht Seva Medal (Retired)';
speakerDescriptionMap['Aayush Sharma'] = 'Indian Actor, Bollywood Celebrity';
speakerDescriptionMap['Agastya Shah'] = 'YouTuber, Content Creator';
speakerDescriptionMap['Pranjal Kamra'] = 'CEO @ Finology Ventures, Finance Content Creator';
speakerDescriptionMap['Priya Jain'] = 'Social Engineer';
speakerDescriptionMap['Raj Kapoor'] = 'Founder and CEO, India Blockchain Alliance';

const speakerImageMap = {};
speakerImageMap['Vishwas Nangare Patil'] = VishwasNangarePatil;
speakerImageMap['Rohini Patil'] = RohiniPatil;
speakerImageMap['Sandeep Adani'] = SandeepAdani;
speakerImageMap['Abhishek Kar'] = AbhishekKar;
speakerImageMap['Bharat Chandak'] = BharatChandak;
speakerImageMap['Vijaypal Singh Rawat'] = VijaypalRawat;
speakerImageMap['Aayush Sharma'] = AayushSharma;
speakerImageMap['Agastya Shah'] = AgastyaShah;
speakerImageMap['Pranjal Kamra'] = PranjalKamra;
speakerImageMap['Priya Jain'] = PriyaJain;
speakerImageMap['Raj Kapoor'] = RajKapoor;

const speakerDimensionsMap = {};
speakerDimensionsMap['Vishwas Nangare Patil'] = { height: 80, x: 5, y: -10 };
speakerDimensionsMap['Rohini Patil'] = { height: 100, x: 1, y: -10 };
speakerDimensionsMap['Sandeep Adani'] = { height: 100, x:-10, y: -20 };
speakerDimensionsMap['Abhishek Kar'] = { height: 80, x: 0, y: -5 };
speakerDimensionsMap['Bharat Chandak'] = { height: 110, x: -3, y: -40 };
speakerDimensionsMap['Vijaypal Singh Rawat'] = { height: 85, x: 0, y: -10 };
speakerDimensionsMap['Aayush Sharma'] = { height: 100, x: 10, y: -30 };
speakerDimensionsMap['Agastya Shah'] = { height: 87, x: 10, y: -17 };
speakerDimensionsMap['Pranjal Kamra'] = { height: 87, x: 10, y: -17 };
speakerDimensionsMap['Priya Jain'] = { height: 130, x: 5, y: -40 };
speakerDimensionsMap['Raj Kapoor'] = { height: 110, x: 10, y: -35 };

const speakerDimensionsMapPortrait = {};
speakerDimensionsMapPortrait['Vishwas Nangare Patil'] = { height: 65, x: -5, y: 32 };
speakerDimensionsMapPortrait['Rohini Patil'] = { height: 70, x: -5, y: 32 };
speakerDimensionsMapPortrait['Sandeep Adani'] = { height: 60, x: -10, y: 30 };
speakerDimensionsMapPortrait['Abhishek Kar'] = { height: 55, x: -15, y:35 };
speakerDimensionsMapPortrait['Bharat Chandak'] = { height: 85, x: -25, y: 5 };
speakerDimensionsMapPortrait['Vijaypal Singh Rawat'] = { height: 70, x: -28, y: 30 };
speakerDimensionsMapPortrait['Aayush Sharma'] = { height: 70, x: 0, y: 20 };
speakerDimensionsMapPortrait['Agastya Shah'] = { height: 63, x: 0, y: 30 };
speakerDimensionsMapPortrait['Pranjal Kamra'] = { height: 70, x: 0, y: 25 };
speakerDimensionsMapPortrait['Priya Jain'] = { height: 90, x: 0, y: 7 };
speakerDimensionsMapPortrait['Raj Kapoor'] = { height: 81, x: 0, y: 13 };

// console.log(speakerDescriptionMap);

function Page4() {
    const [pageOpacity, setPageOpacity] = useState(1);
    const [speakerImage, setSpeakerImage] = useState(VishwasNangarePatil);
    const [headingOpacity, setHeadingOpacity] = useState(0);
    const [headingSpacing, setHeadingSpacing] = useState(0);
    const [headingY, setHeadingY] = useState(50);
    const [speaker, setSpeaker] = useState('Vishwas Nangare Patil');
    const [speakerImageHeight, setSpeakerImageHeight] = useState(speakerDimensionsMap[speaker].height);
    const [speakerImageX, setSpeakerImageX] = useState(speakerDimensionsMap[speaker].x);
    const [speakerImageY, setSpeakerImageY] = useState(speakerDimensionsMap[speaker].y);
    const [speakerDescription, setSpeakerDescription] = useState(speakerDescriptionMap['Vishwas Nangare Patil']);
    const [descriptionPastOpacity, setDescriptionPastOpacity] = useState(0);
    const [descriptionPastY, setDescriptionPastY] = useState(30);

    const handleScroll = () => {
        // For portrait screens
        if (window.matchMedia("(orientation: portrait)").matches) {
            if (window.scrollY > 8500 && window.scrollY < 9500) {
                handleHeadingOpacity();
                handleHeadingSpacing();
                handleHeadingY();
            }

            if (window.scrollY > 9500 && window.scrollY < 10000) {
                setHeadingOpacity(1);
                setHeadingSpacing(2.7);
                setHeadingY(0);
                handleSetSpeakerPortrait('Vishwas Nangare Patil');
            }

            if (window.scrollY > 10000 && window.scrollY < 10500) {
                handleSetSpeakerPortrait('Rohini Patil');
            }

            if (window.scrollY > 10500 && window.scrollY < 11000) {
                handleSetSpeakerPortrait('Bharat Chandak');
            }

            if (window.scrollY > 11000 && window.scrollY < 11500) {
                handleSetSpeakerPortrait('Sandeep Adani');
            }

            if (window.scrollY > 11500 && window.scrollY < 12000) {
                handleSetSpeakerPortrait('Abhishek Kar');
            }

            if (window.scrollY > 12000 && window.scrollY < 12500) {
                handleSetSpeakerPortrait('Vijaypal Singh Rawat');
            }

            if (window.scrollY > 12500 && window.scrollY < 13500) {
                handleDescriptionPastOpacity();
                handleDescriptionPastY();
            }

            if (window.scrollY > 13500 && window.scrollY < 14000) {
                setDescriptionPastOpacity(1);
                setDescriptionPastY(0);
                handleSetSpeakerPortrait('Aayush Sharma');
            }

            if (window.scrollY > 14000 && window.scrollY < 14500) {
                handleSetSpeakerPortrait('Agastya Shah');
            }

            if (window.scrollY > 14500 && window.scrollY < 15000) {
                handleSetSpeakerPortrait('Pranjal Kamra');
            }

            if (window.scrollY > 15000 && window.scrollY < 15500) {
                handleSetSpeakerPortrait('Priya Jain');
            }

            if (window.scrollY > 15500 && window.scrollY < 16000) {
                handleSetSpeakerPortrait('Raj Kapoor');
                setPageOpacity(1);
            }

            if(window.scrollY > 16500 && window.scrollY < 17000){
                handleSetSpeakerPortrait('Raj Kapoor');
                handlePageExit();
                setHeadingOpacity(1);
                setHeadingSpacing(2.7);
                setHeadingY(0);
            }
        }

        // For landscape screens
        if (window.matchMedia("(orientation: landscape)").matches) {
            if (window.scrollY > 8500 && window.scrollY < 9500) {
                handleHeadingOpacity();
                handleHeadingSpacing();
                handleHeadingY();
            }

            if (window.scrollY > 9500 && window.scrollY < 10000) {
                setHeadingOpacity(1);
                setHeadingSpacing(2.7);
                setHeadingY(0);
                handleSetSpeaker('Vishwas Nangare Patil');
            }

            if (window.scrollY > 10000 && window.scrollY < 10500) {
                handleSetSpeaker('Rohini Patil');
            }

            if (window.scrollY > 10500 && window.scrollY < 11000) {
                handleSetSpeaker('Bharat Chandak');
            }

            if (window.scrollY > 11000 && window.scrollY < 11500) {
                handleSetSpeaker('Sandeep Adani');
            }

            if (window.scrollY > 11500 && window.scrollY < 12000) {
                handleSetSpeaker('Abhishek Kar');
            }

            if (window.scrollY > 12000 && window.scrollY < 12500) {
                handleSetSpeaker('Vijaypal Singh Rawat');
            }

            if (window.scrollY > 12500 && window.scrollY < 13500) {
                handleDescriptionPastOpacity();
                handleDescriptionPastY();
            }

            if (window.scrollY > 12500 && window.scrollY < 13500) {
                handleDescriptionPastOpacity();
                handleDescriptionPastY();
            }

            if (window.scrollY > 13500 && window.scrollY < 14000) {
                setDescriptionPastOpacity(1);
                setDescriptionPastY(0);
                handleSetSpeaker('Aayush Sharma');
            }

            if (window.scrollY > 14000 && window.scrollY < 14500) {
                handleSetSpeaker('Agastya Shah');
            }

            if (window.scrollY > 14500 && window.scrollY < 15000) {
                handleSetSpeaker('Pranjal Kamra');
            }

            if (window.scrollY > 15000 && window.scrollY < 15500) {
                handleSetSpeaker('Priya Jain');
            }

            if (window.scrollY > 15500 && window.scrollY < 16000) {
                handleSetSpeaker('Raj Kapoor');
                setPageOpacity(1);
            }

            if(window.scrollY > 16500 && window.scrollY < 17000){
                setHeadingOpacity(1);
                setHeadingSpacing(2.7);
                setHeadingY(0);
                handleSetSpeaker('Raj Kapoor');
                handlePageExit();
            }
        }
    }

    const handleSetSpeaker = (speaker) => {
        setSpeaker(speaker);
        setSpeakerDescription(speakerDescriptionMap[speaker]);
        setSpeakerImage(speakerImageMap[speaker]);
        setSpeakerImageHeight(speakerDimensionsMap[speaker]['height']);
        setSpeakerImageX(speakerDimensionsMap[speaker]['x']);
        setSpeakerImageY(speakerDimensionsMap[speaker]['y'])
    }

    const handleSetSpeakerPortrait = (speaker) => {
        setSpeaker(speaker);
        setSpeakerDescription(speakerDescriptionMap[speaker]);
        setSpeakerImage(speakerImageMap[speaker]);
        setSpeakerImageHeight(speakerDimensionsMapPortrait[speaker]['height']);
        setSpeakerImageX(speakerDimensionsMapPortrait[speaker]['x']);
        setSpeakerImageY(speakerDimensionsMapPortrait[speaker]['y'])
    }

    const handleHeadingOpacity = () => {
        setHeadingOpacity((1 / 1000) * (window.scrollY - 8500));
    }

    const handleHeadingSpacing = () => {
        setHeadingSpacing((2.7 / 1000) * (window.scrollY - 8500));
    }

    const handleHeadingY = () => {
        setHeadingY((-50 / 1000) * (window.scrollY - 9500));
    }

    const handleDescriptionPastOpacity = () => {
        setDescriptionPastOpacity((1 / 1000) * (window.scrollY - 12500));
    }

    const handleDescriptionPastY = () => {
        setDescriptionPastY((-30 / 1000) * (window.scrollY - 13500));
    }

    const handlePageExit = () => {
        setPageOpacity((-1 / 500) * (window.scrollY - 17000));
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <div className="page4" style={{opacity : `${pageOpacity}`}}>
            <div className="page4-heading" style={{
                opacity: `${headingOpacity}`,
                letterSpacing: `${headingSpacing}vw`,
                transform: `translate(0, ${headingY}%)`
            }}>
                SPEAKERS
            </div>
            {window.scrollY < 12500 && <div className="page4-description" style={{
                opacity: `${headingOpacity}`,
                transform: `translate(0, ${headingY}%)`
            }}>to watch out for</div>}
            {window.scrollY > 12500 && <div className="page4-description" style={{
                opacity: `${descriptionPastOpacity}`,
                transform: `translate(0, ${descriptionPastY}%)`
            }}>from the past</div>}
            {((window.scrollY > 9500 && window.scrollY < 12500) || (window.scrollY > 13500 && window.scrollY < 17000)) && <div className="page4-speaker-description">{speakerDescription}</div>}
            {((window.scrollY > 9500 && window.scrollY < 12500) || (window.scrollY > 13500 && window.scrollY < 17000)) && <div className="page4-content">
                <div className="page4-speaker-image">
                    {/* <img src={speakerImage} alt="" style={{transform: 'translate(0px, 0vh)'}} /> */}
                    <Image src={speakerImage} style={{
                        zIndex: '-1',
                        height: `${speakerImageHeight}vh`,
                        transform: `translate(${speakerImageX}vw, ${speakerImageY}vh)`
                    }}
                        fluid />
                </div>
                <div className="page4-list-of-speakers">
                    {window.scrollY < 10000 && <div className="page4-present-speaker-1" style={{
                        fontSize: `${speaker === 'Vishwas Nangare Patil' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Vishwas Nangare Patil' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Vishwas Nangare Patil' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Vishwas Nangare Patil' ? '1s' : ''}`
                    }}>VISHWAS NANGRE PATIL</div>}
                    {window.scrollY < 10500 && <div className="page4-present-speaker-2" style={{
                        fontSize: `${speaker === 'Rohini Patil' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Rohini Patil' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Rohini Patil' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Rohini Patil' ? '1s' : ''}`
                    }}>DR. ROHINI PATIL</div>}
                    {window.scrollY < 11000 && <div className="page4-present-speaker-5" style={{
                        fontSize: `${speaker === 'Bharat Chandak' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Bharat Chandak' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Bharat Chandak' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Bharat Chandak' ? '1s' : ''}`
                    }}>BHARAT CHANDAK</div>}
                    {window.scrollY < 11500 && <div className="page4-present-speaker-3" style={{
                        fontSize: `${speaker === 'Sandeep Adani' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Sandeep Adani' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Sandeep Adani' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Sandeep Adani' ? '1s' : ''}`
                    }}>SANDEEP ADANI</div>}
                    {window.scrollY < 12000 && <div className="page4-present-speaker-4" style={{
                        fontSize: `${speaker === 'Abhishek Kar' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Abhishek Kar' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Abhishek Kar' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Abhishek Kar' ? '1s' : ''}`
                    }}>ABHISHEK KAR</div>}
                    {window.scrollY < 12500 && <div className="page4-present-speaker-6" style={{
                        fontSize: `${speaker === 'Vijaypal Singh Rawat' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Vijaypal Singh Rawat' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Vijaypal Singh Rawat' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Vijaypal Singh Rawat' ? '1s' : ''}`
                    }}>VIJAYPAL SINGH RAWAT</div>}
                    {window.scrollY > 13500 && window.scrollY < 14000 && <div className="page4-past-speaker-1" style={{
                        fontSize: `${speaker === 'Aayush Sharma' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Aayush Sharma' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Aayush Sharma' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Aayush Sharma' ? '1s' : ''}`
                    }}>AAYUSH SHARMA</div>}
                    {window.scrollY > 13500 && window.scrollY < 14500 && <div className="page4-past-speaker-2" style={{
                        fontSize: `${speaker === 'Agastya Shah' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Agastya Shah' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Agastya Shah' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Agastya Shah' ? '1s' : ''}`
                    }}>AGASTYA SHAH</div>}
                    {window.scrollY > 13500 && window.scrollY < 15000 && <div className="page4-past-speaker-3" style={{
                        fontSize: `${speaker === 'Pranjal Kamra' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Pranjal Kamra' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Pranjal Kamra' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Pranjal Kamra' ? '1s' : ''}`
                    }}>PRANJAL KAMRA</div>}
                    {window.scrollY > 13500 && window.scrollY < 15500 && <div className="page4-past-speaker-4" style={{
                        fontSize: `${speaker === 'Priya Jain' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Priya Jain' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Priya Jain' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Priya Jain' ? '1s' : ''}`
                    }}>PRIYA JAIN</div>}
                    {window.scrollY > 13500 && window.scrollY < 17000 && <div className="page4-past-speaker-5" style={{
                        fontSize: `${speaker === 'Raj Kapoor' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Raj Kapoor' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Raj Kapoor' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Raj Kapoor' ? '1s' : ''}`
                    }}>RAJ KAPOOR</div>}
                </div>
            </div>}

        </div>
    )
}

export default Page4;