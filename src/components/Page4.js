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

console.log(speakerDescriptionMap);

function Page4() {

    const [speakerImage, setSpeakerImage] = useState(speaker1);
    const [headingOpacity, setHeadingOpacity] = useState(0);
    const [headingSpacing, setHeadingSpacing] = useState(0);
    const [headingY, setHeadingY] = useState(50);
    const [speaker, setSpeaker] = useState('Speaker 1');
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
                setSpeaker('Speaker 1');
                setSpeakerDescription(speakerDescriptionMap['Speaker 1']);
                setSpeakerImage(speakerImageMap['Speaker 1']);
            }

            if(window.scrollY > 10000 && window.scrollY < 10500){
                setSpeaker('Speaker 2');
                setSpeakerDescription(speakerDescriptionMap['Speaker 2']);
                setSpeakerImage(speakerImageMap['Speaker 2']);
            }

            if(window.scrollY > 10500 && window.scrollY < 11000){
                setSpeaker('Speaker 3');
                setSpeakerDescription(speakerDescriptionMap['Speaker 3']);
                setSpeakerImage(speakerImageMap['Speaker 3']);
            }

            if(window.scrollY > 11000 && window.scrollY < 11500){
                setSpeaker('Speaker 4');
                setSpeakerDescription(speakerDescriptionMap['Speaker 4']);
                setSpeakerImage(speakerImageMap['Speaker 4']);
            }

            if(window.scrollY > 11500 && window.scrollY < 12000){
                setSpeaker('Speaker 5');
                setSpeakerDescription(speakerDescriptionMap['Speaker 5']);
                setSpeakerImage(speakerImageMap['Speaker 5']);
            }

            if(window.scrollY > 12000 && window.scrollY < 12500){
                setSpeaker('Speaker 6');
                setSpeakerDescription(speakerDescriptionMap['Speaker 6']);
                setSpeakerImage(speakerImageMap['Speaker 6']);
            }

            if(window.scrollY > 12500 && window.scrollY < 13500){
                handleDescriptionPastOpacity();
                handleDescriptionPastY();
            }

            if(window.scrollY > 13500 && window.scrollY < 14000){
                setDescriptionPastOpacity(1);
                setDescriptionPastY(0);
                setSpeaker('Aayush Sharma');
                setSpeakerDescription(speakerDescriptionMap['Aayush Sharma']);
                setSpeakerImage(speakerImageMap['Aayush Sharma']);
            }

            if(window.scrollY > 14000 && window.scrollY < 14500){
                setSpeaker('Agastya Shah');
                setSpeakerDescription(speakerDescriptionMap['Agastya Shah']);
                setSpeakerImage(speakerImageMap['Agastya Shah']);
            }

            if(window.scrollY > 14500 && window.scrollY < 15000){
                setSpeaker('Pranjal Kamra');
                setSpeakerDescription(speakerDescriptionMap['Pranjal Kamra']);
                setSpeakerImage(speakerImageMap['Pranjal Kamra']);
            }

            if(window.scrollY > 15000 && window.scrollY < 15500){
                setSpeaker('Priya Jain');
                setSpeakerDescription(speakerDescriptionMap['Priya Jain']);
                setSpeakerImage(speakerImageMap['Priya Jain']);
            }

            if(window.scrollY > 15500 && window.scrollY < 16000){
                setSpeaker('Raj Kapoor');
                setSpeakerDescription(speakerDescriptionMap['Raj Kapoor']);
                setSpeakerImage(speakerImageMap['Raj Kapoor']);
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
                setSpeaker('Speaker 1');
                setSpeakerDescription(speakerDescriptionMap['Speaker 1']);
                setSpeakerImage(speakerImageMap['Speaker 1']);
            }

            if(window.scrollY > 10000 && window.scrollY < 10500){
                setSpeaker('Speaker 2');
                setSpeakerDescription(speakerDescriptionMap['Speaker 2']);
                setSpeakerImage(speakerImageMap['Speaker 2']);
            }

            if(window.scrollY > 10500 && window.scrollY < 11000){
                setSpeaker('Speaker 3');
                setSpeakerDescription(speakerDescriptionMap['Speaker 3']);
                setSpeakerImage(speakerImageMap['Speaker 3']);
            }

            if(window.scrollY > 11000 && window.scrollY < 11500){
                setSpeaker('Speaker 4');
                setSpeakerDescription(speakerDescriptionMap['Speaker 4']);
                setSpeakerImage(speakerImageMap['Speaker 4']);
            }

            if(window.scrollY > 11500 && window.scrollY < 12000){
                setSpeaker('Speaker 5');
                setSpeakerDescription(speakerDescriptionMap['Speaker 5']);
                setSpeakerImage(speakerImageMap['Speaker 5']);
            }

            if(window.scrollY > 12000 && window.scrollY < 12500){
                setSpeaker('Speaker 6');
                setSpeakerDescription(speakerDescriptionMap['Speaker 6']);
                setSpeakerImage(speakerImageMap['Speaker 6']);
            }

            if(window.scrollY > 12500 && window.scrollY < 13500){
                handleDescriptionPastOpacity();
                handleDescriptionPastY();
            }

            if(window.scrollY > 12500 && window.scrollY < 13500){
                handleDescriptionPastOpacity();
                handleDescriptionPastY();
            }

            if(window.scrollY > 13500 && window.scrollY < 14000){
                setDescriptionPastOpacity(1);
                setDescriptionPastY(0);
                setSpeaker('Aayush Sharma');
                setSpeakerDescription(speakerDescriptionMap['Aayush Sharma']);
                setSpeakerImage(speakerImageMap['Aayush Sharma']);
            }

            if(window.scrollY > 14000 && window.scrollY < 14500){
                setSpeaker('Agastya Shah');
                setSpeakerDescription(speakerDescriptionMap['Agastya Shah']);
                setSpeakerImage(speakerImageMap['Agastya Shah']);
            }

            if(window.scrollY > 14500 && window.scrollY < 15000){
                setSpeaker('Pranjal Kamra');
                setSpeakerDescription(speakerDescriptionMap['Pranjal Kamra']);
                setSpeakerImage(speakerImageMap['Pranjal Kamra']);
            }

            if(window.scrollY > 15000 && window.scrollY < 15500){
                setSpeaker('Priya Jain');
                setSpeakerDescription(speakerDescriptionMap['Priya Jain']);
                setSpeakerImage(speakerImageMap['Priya Jain']);
            }

            if(window.scrollY > 15500 && window.scrollY < 16000){
                setSpeaker('Raj Kapoor');
                setSpeakerDescription(speakerDescriptionMap['Raj Kapoor']);
                setSpeakerImage(speakerImageMap['Raj Kapoor']);
            }
        }
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

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <div className="page4">
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
            {((window.scrollY > 9500 && window.scrollY < 12500) || (window.scrollY > 13500)) && <div className="page4-content">
                <div className="page4-speaker-image">
                    {/* <img src={speakerImage} alt="" style={{transform: 'translate(0px, 0vh)'}} /> */}
                    <Image src={speakerImage} style={{ zIndex:'-1', height: `${window.matchMedia("(orientation: portrait)").matches ? '70vh' : '100vh'}`, transform: `${window.matchMedia("(orientation: portrait)").matches ? 'translate(0vw, 20vh)' : 'translate(10vw, -30vh)'}` }} fluid />
                </div>
                <div className="page4-speaker-description">{speakerDescription}</div>
                <div className="page4-list-of-speakers">
                    {window.scrollY < 10000 && <div className="page4-present-speaker-1" style={{
                        fontSize: `${speaker === 'Speaker 1' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 1' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Speaker 1' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 1' ? '1s' : ''}`
                    }}>SPEAKER ONE</div>}
                    {window.scrollY < 10500 && <div className="page4-present-speaker-2" style={{
                        fontSize: `${speaker === 'Speaker 2' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 2' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Speaker 2' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 2' ? '1s' : ''}`
                    }}>SPEAKER TWO</div>}
                    {window.scrollY < 11000 && <div className="page4-present-speaker-3" style={{
                        fontSize: `${speaker === 'Speaker 3' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 3' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Speaker 3' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 3' ? '1s' : ''}`
                    }}>SPEAKER THREE</div>}
                    {window.scrollY < 11500 && <div className="page4-present-speaker-4" style={{
                        fontSize: `${speaker === 'Speaker 4' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 4' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Speaker 4' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 4' ? '1s' : ''}`
                    }}>SPEAKER FOUR</div>}
                    {window.scrollY < 12000 && <div className="page4-present-speaker-5" style={{
                        fontSize: `${speaker === 'Speaker 5' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 5' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Speaker 5' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 5' ? '1s' : ''}`
                    }}>SPEAKER FIVE</div>}
                    {window.scrollY < 12500 && <div className="page4-present-speaker-6" style={{
                        fontSize: `${speaker === 'Speaker 6' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 6' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Speaker 6' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 6' ? '1s' : ''}`
                    }}>ARTIST</div>}
                    {window.scrollY > 13500 && window.scrollY < 14000 && <div className="page4-past-speaker-1" style={{
                        fontSize: `${speaker === 'Aayush Sharma' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Aayush Sharma' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Aayush Sharma' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Aayush Sharma' ? '1s' : ''}`
                    }}>AAYUSH SHARMA</div>}
                    {window.scrollY > 13500 && window.scrollY < 14500 && <div className="page4-past-speaker-2" style={{
                        fontSize: `${speaker === 'Agastya Shah' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Agastya Shah' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Agastya Shah' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Agastya Shah' ? '1s' : ''}`
                    }}>AGASTYA SHAH</div>}
                    {window.scrollY > 13500 && window.scrollY < 15000 && <div className="page4-past-speaker-3" style={{
                        fontSize: `${speaker === 'Pranjal Kamra' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Pranjal Kamra' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Pranjal Kamra' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Pranjal Kamra' ? '1s' : ''}`
                    }}>PRANJAL KAMRA</div>}
                    {window.scrollY > 13500 && window.scrollY < 15500 && <div className="page4-past-speaker-4" style={{
                        fontSize: `${speaker === 'Priya Jain' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Priya Jain' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Priya Jain' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Priya Jain' ? '1s' : ''}`
                    }}>PRIYA JAIN</div>}
                    {window.scrollY > 13500 && window.scrollY < 16000 && <div className="page4-past-speaker-5" style={{
                        fontSize: `${speaker === 'Raj Kapoor' ? window.matchMedia("(orientation: portrait)").matches ? '2rem' : '3.5rem' : window.matchMedia("(orientation: portrait)").matches ? '1.5rem' : '2rem'}`,
                        color: `${speaker === 'Raj Kapoor' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Raj Kapoor' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Raj Kapoor' ? '1s' : ''}`
                    }}>RAJ KAPOOR</div>}
                </div>
            </div>}

        </div>
    )
}

export default Page4;