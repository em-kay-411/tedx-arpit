import '../css/Page4.css';
import { useState, useEffect } from 'react';
import speaker1 from '../speakers/speaker1.png';
import speaker2 from '../speakers/speaker2.png';
import AayushSharma from '../speakers/AayushSharma.png';
import AgastyaShah from '../speakers/AgastyaShah.png';
import PranjalKamra from '../speakers/PranjalKamra.png';
import PriyaJain from '../speakers/PriyaJain.png';
import RajKapoor from '../speakers/RajKapoor.png';
import Image from 'react-bootstrap/Image';

const speakerDescriptionMap = {};
speakerDescriptionMap['Speaker 1'] = 'Indian Actor, Bollywood Celebrity';
speakerDescriptionMap['Speaker 2'] = 'Speaker 2 Description';
speakerDescriptionMap['Speaker 3'] = 'Speaker 3 Description';
speakerDescriptionMap['Speaker 4'] = 'Speaker 4 Description';
speakerDescriptionMap['Speaker 5'] = 'Speaker 5 Description';
speakerDescriptionMap['Speaker 6'] = 'Speaker 6 Description';
speakerDescriptionMap['Aayush Sharma'] = 'Indian Actor, Bollywood Celebrity';
speakerDescriptionMap['Agastya Shah'] = 'YouTuber, Content Creator';
speakerDescriptionMap['Pranjal Kamra'] = 'CEO @ Finology Ventures, Finance Content Creator';
speakerDescriptionMap['Priya Jain'] = 'Social Engineer';
speakerDescriptionMap['Raj Kapoor'] = 'Founder and CEO, India Blockchain Alliance';

const speakerImageMap = {};
speakerImageMap['Speaker 1'] = speaker1;
speakerImageMap['Speaker 2'] = speaker2;
speakerImageMap['Speaker 3'] = speaker1;
speakerImageMap['Speaker 4'] = speaker2;
speakerImageMap['Speaker 5'] = speaker1;
speakerImageMap['Speaker 6'] = speaker2;
speakerImageMap['Aayush Sharma'] = AayushSharma;
speakerImageMap['Agastya Shah'] = AgastyaShah;
speakerImageMap['Pranjal Kamra'] = PranjalKamra;
speakerImageMap['Priya Jain'] = PriyaJain;
speakerImageMap['Raj Kapoor'] = RajKapoor;

const speakerDimensionsMap = {};
speakerDimensionsMap['Speaker 1'] = { height: 100, x: 10, y: -30 };
speakerDimensionsMap['Speaker 2'] = { height: 100, x: 10, y: -30 };
speakerDimensionsMap['Speaker 3'] = { height: 100, x: 10, y: -30 };
speakerDimensionsMap['Speaker 4'] = { height: 100, x: 10, y: -30 };
speakerDimensionsMap['Speaker 5'] = { height: 100, x: 10, y: -30 };
speakerDimensionsMap['Speaker 6'] = { height: 100, x: 10, y: -30 };
speakerDimensionsMap['Aayush Sharma'] = { height: 100, x: 10, y: -30 };
speakerDimensionsMap['Agastya Shah'] = { height: 87, x: 10, y: -17 };
speakerDimensionsMap['Pranjal Kamra'] = { height: 87, x: 10, y: -17 };
speakerDimensionsMap['Priya Jain'] = { height: 130, x: 5, y: -40 };
speakerDimensionsMap['Raj Kapoor'] = { height: 110, x: 10, y: -35 };

const speakerDimensionsMapPortrait = {};
speakerDimensionsMapPortrait['Speaker 1'] = { height: 70, x: 0, y: 20 };
speakerDimensionsMapPortrait['Speaker 2'] = { height: 70, x: 0, y: 20 };
speakerDimensionsMapPortrait['Speaker 3'] = { height: 70, x: 0, y: 20 };
speakerDimensionsMapPortrait['Speaker 4'] = { height: 70, x: 0, y: 20 };
speakerDimensionsMapPortrait['Speaker 5'] = { height: 70, x: 0, y: 20 };
speakerDimensionsMapPortrait['Speaker 6'] = { height: 70, x: 0, y: 20 };
speakerDimensionsMapPortrait['Aayush Sharma'] = { height: 70, x: 0, y: 20 };
speakerDimensionsMapPortrait['Agastya Shah'] = { height: 63, x: 0, y: 30 };
speakerDimensionsMapPortrait['Pranjal Kamra'] = { height: 70, x: 0, y: 20 };
speakerDimensionsMapPortrait['Priya Jain'] = { height: 90, x: 0, y: 7 };
speakerDimensionsMapPortrait['Raj Kapoor'] = { height: 81, x: 0, y: 13 };

// console.log(speakerDescriptionMap);

function Page4() {
    const [pageOpacity, setPageOpacity] = useState(1);
    const [speakerImage, setSpeakerImage] = useState(speaker1);
    const [headingOpacity, setHeadingOpacity] = useState(0);
    const [headingSpacing, setHeadingSpacing] = useState(0);
    const [headingY, setHeadingY] = useState(50);
    const [speaker, setSpeaker] = useState('Speaker 1');
    const [speakerImageHeight, setSpeakerImageHeight] = useState(speakerDimensionsMap[speaker].height);
    const [speakerImageX, setSpeakerImageX] = useState(speakerDimensionsMap[speaker].x);
    const [speakerImageY, setSpeakerImageY] = useState(speakerDimensionsMap[speaker].y);
    const [speakerDescription, setSpeakerDescription] = useState(speakerDescriptionMap['Speaker 1']);
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
                handleSetSpeakerPortrait('Speaker 1');
            }

            if (window.scrollY > 10000 && window.scrollY < 10500) {
                handleSetSpeakerPortrait('Speaker 2');
            }

            if (window.scrollY > 10500 && window.scrollY < 11000) {
                handleSetSpeakerPortrait('Speaker 3');
            }

            if (window.scrollY > 11000 && window.scrollY < 11500) {
                handleSetSpeakerPortrait('Speaker 4');
            }

            if (window.scrollY > 11500 && window.scrollY < 12000) {
                handleSetSpeakerPortrait('Speaker 5');
            }

            if (window.scrollY > 12000 && window.scrollY < 12500) {
                handleSetSpeakerPortrait('Speaker 6');
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
                handleSetSpeaker('Speaker 1');
            }

            if (window.scrollY > 10000 && window.scrollY < 10500) {
                handleSetSpeaker('Speaker 2');
            }

            if (window.scrollY > 10500 && window.scrollY < 11000) {
                handleSetSpeaker('Speaker 3');
            }

            if (window.scrollY > 11000 && window.scrollY < 11500) {
                handleSetSpeaker('Speaker 4');
            }

            if (window.scrollY > 11500 && window.scrollY < 12000) {
                handleSetSpeaker('Speaker 5');
            }

            if (window.scrollY > 12000 && window.scrollY < 12500) {
                handleSetSpeaker('Speaker 6');
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
                        fontSize: `${speaker === 'Speaker 1' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 1' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Speaker 1' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 1' ? '1s' : ''}`
                    }}>SPEAKER ONE</div>}
                    {window.scrollY < 10500 && <div className="page4-present-speaker-2" style={{
                        fontSize: `${speaker === 'Speaker 2' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 2' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Speaker 2' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 2' ? '1s' : ''}`
                    }}>SPEAKER TWO</div>}
                    {window.scrollY < 11000 && <div className="page4-present-speaker-3" style={{
                        fontSize: `${speaker === 'Speaker 3' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 3' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Speaker 3' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 3' ? '1s' : ''}`
                    }}>SPEAKER THREE</div>}
                    {window.scrollY < 11500 && <div className="page4-present-speaker-4" style={{
                        fontSize: `${speaker === 'Speaker 4' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 4' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Speaker 4' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 4' ? '1s' : ''}`
                    }}>SPEAKER FOUR</div>}
                    {window.scrollY < 12000 && <div className="page4-present-speaker-5" style={{
                        fontSize: `${speaker === 'Speaker 5' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 5' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Speaker 5' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 5' ? '1s' : ''}`
                    }}>SPEAKER FIVE</div>}
                    {window.scrollY < 12500 && <div className="page4-present-speaker-6" style={{
                        fontSize: `${speaker === 'Speaker 6' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 6' ? 'white' : '#3a3a3a'}`,
                        animationName: `${speaker === 'Speaker 6' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 6' ? '1s' : ''}`
                    }}>ARTIST</div>}
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