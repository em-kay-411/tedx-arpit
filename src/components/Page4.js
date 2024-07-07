import '../css/Page4.css';
import { useState, useEffect } from 'react';
import speaker1 from '../speakers/speaker1.png';
import speaker2 from '../speakers/speaker2.png';
import Image from 'react-bootstrap/Image';

const speakerDescriptionMap = {};
speakerDescriptionMap['Speaker 1'] = 'Indian Actor, Bollywood Celebrity';
speakerDescriptionMap['Speaker 2'] = 'Speaker 2 Description';
speakerDescriptionMap['Speaker 3'] = 'Speaker 3 Description';
speakerDescriptionMap['Speaker 4'] = 'Speaker 4 Description';
speakerDescriptionMap['Speaker 5'] = 'Speaker 5 Description';
speakerDescriptionMap['Speaker 6'] = 'Speaker 6 Description';

const speakerImageMap = {};
speakerImageMap['Speaker 1'] = speaker1;
speakerImageMap['Speaker 2'] = speaker2;
speakerImageMap['Speaker 3'] = speaker1;
speakerImageMap['Speaker 4'] = speaker2;
speakerImageMap['Speaker 5'] = speaker1;
speakerImageMap['Speaker 6'] = speaker2;

console.log(speakerDescriptionMap);

function Page4() {

    const [speakerImage, setSpeakerImage] = useState(speaker1);
    const [headingOpacity, setHeadingOpacity] = useState(0);
    const [headingSpacing, setHeadingSpacing] = useState(0);
    const [headingY, setHeadingY] = useState(50);
    const [speaker, setSpeaker] = useState('Speaker 1');
    const [speakerDescription, setSpeakerDescription] = useState(speakerDescriptionMap['Speaker 1']);

    const handleScroll = () => {
        // For portrait screens
        if (window.matchMedia("(orientation: portrait)").matches) {
            if (window.scrollY > 8500 && window.scrollY < 9500) {
                handleHeadingOpacity();
                handleHeadingY();
            }

            if (window.scrollY > 9500) {
                setHeadingOpacity(1);
                setHeadingSpacing(0);
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
            <div className="page4-description" style={{
                opacity: `${headingOpacity}`,
                transform: `translate(0, ${headingY}%)`
            }}>to watch out for</div>
            {window.scrollY > 9500 && <div className="page4-content">
                <div className="page4-speaker-image">
                    {/* <img src={speakerImage} alt="" style={{transform: 'translate(0px, 0vh)'}} /> */}
                    <Image src={speakerImage} style={{ height: '100vh', transform: 'translate(10vw, -30vh)' }} fluid />
                </div>
                <div className="page4-speaker-description">{speakerDescription}</div>
                <div className="page4-list-of-speakers">
                    {window.scrollY < 10000 && <div className="page4-present-speaker-1" style={{
                        fontSize: `${speaker === 'Speaker 1' ? '3.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 1' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Speaker 1' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 1' ? '1s' : ''}`
                    }}>SPEAKER ONE</div>}
                    {window.scrollY < 10500 && <div className="page4-present-speaker-2" style={{
                        fontSize: `${speaker === 'Speaker 2' ? '3.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 2' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Speaker 2' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 2' ? '1s' : ''}`
                    }}>SPEAKER TWO</div>}
                    {window.scrollY < 11000 && <div className="page4-present-speaker-3" style={{
                        fontSize: `${speaker === 'Speaker 3' ? '3.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 3' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Speaker 3' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 3' ? '1s' : ''}`
                    }}>SPEAKER THREE</div>}
                    {window.scrollY < 11500 && <div className="page4-present-speaker-4" style={{
                        fontSize: `${speaker === 'Speaker 4' ? '3.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 4' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Speaker 4' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 4' ? '1s' : ''}`
                    }}>SPEAKER FOUR</div>}
                    {window.scrollY < 12000 && <div className="page4-present-speaker-5" style={{
                        fontSize: `${speaker === 'Speaker 5' ? '3.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 5' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Speaker 5' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 5' ? '1s' : ''}`
                    }}>SPEAKER FIVE</div>}
                    {window.scrollY < 12500 && <div className="page4-present-speaker-6" style={{
                        fontSize: `${speaker === 'Speaker 6' ? '3.5rem' : '2rem'}`,
                        color: `${speaker === 'Speaker 6' ? 'white' : '#3a3a3a'}`,
                        animationName : `${speaker === 'Speaker 6' ? 'text-move' : ''}`,
                        animationDuration: `${speaker === 'Speaker 6' ? '1s' : ''}`
                    }}>ARTIST</div>}
                </div>
            </div>}

        </div>
    )
}

export default Page4;