import '../css/Page3.css';
import { useState, useEffect, useRef } from 'react';

const contentMap = {};
contentMap['TED'] = 'TED is a non-profit that believes powerful ideas, powerfully presented, move us: to feel something, to think differently, to take action. In a world that can feel dark and overwhelming, these ideas have ripple effects of many magnitudes, pointing toward the possibility of a better future for people, communities and humanity at large.';
contentMap['TEDx'] = 'A TEDx event is a local gathering where live TED-like talks and performances are shared with the community. TEDx events are fully planned and coordinated independently, on a community-by-community basis. The content and design of each TEDx event is unique and developed by each organizing team.'
contentMap['TEDxDYPIT'] = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus saepe deserunt incidunt officiis sunt, at culpa possimus repudiandae velit tempore non perspiciatis illo ipsum, vero labore quod similique ullam?';

function Page3() {
    const [heading, setHeading] = useState('TED');
    const [content, setContent] = useState(contentMap['TED']);
    const contentRef = useRef(null);

    const handleScroll = () => {
        // For portrait screens
        if (window.matchMedia("(orientation: portrait)").matches) {
            if (window.scrollY < 7500) {
                handleTEDClick();
            }

            if (window.scrollY > 7500 && window.scrollY < 8500) {
                handleTEDxClick();
            }

            if (window.scrollY > 8500 && window.scrollY < 9500) {
                handleTEDxDYPITClick();
            }
        }

        // For landscape screens
        if (window.matchMedia("(orientation: landscape)").matches) {
            if (window.scrollY < 7500) {
                handleTEDClick();
            }

            if (window.scrollY > 7500 && window.scrollY < 8500) {
                handleTEDxClick();
            }

            if (window.scrollY > 8500 && window.scrollY < 9500) {
                handleTEDxDYPITClick();
            }
        }
    }

    const handleTEDClick = () => {
        setHeading('TED');
        setContent(contentMap['TED']);
    }

    const handleTEDxClick = () => {
        setHeading('TEDx');
        setContent(contentMap['TEDx']);
    }

    const handleTEDxDYPITClick = () => {
        setHeading('TEDxDYPIT');
        setContent(contentMap['TEDxDYPIT']);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        const handleChangedContent = () => {
            contentRef.current.style.animationName = 'appear-text';
            contentRef.current.style.animationDuration = '1s';
            contentRef.current.style.animationState = 'running';
        }

        console.log('here');
        handleChangedContent();

    }, [content])

    return (
        <div className="page3">
            <div className="page3-text">
                <div className="page3-heading">
                    <div className="page3-heading1"
                        onClick={() => window.scrollTo(0, 6501)}
                        style={{
                            fontSize: `${heading === 'TED' ? window.matchMedia("(orientation: portrait)").matches ? '8rem' : '10rem' : '2rem'}`,
                            color: `${heading === 'TED' ? '#eb0028' : 'grey'}`, animationName: `${heading === 'TED' ? 'appear-text' : ''}`,
                            animationDuration: `${heading === 'TED' ? '1s' : ''}`
                        }} >TED</div>
                    <div className="page3-heading2"
                        onClick={() => window.scrollTo(0, 7501)}
                        style={{
                            fontSize: `${heading === 'TEDx' ? window.matchMedia("(orientation: portrait)").matches ? '8rem' : '10rem' : '2rem'}`,
                            color: `${heading === 'TEDx' ? '#eb0028' : 'grey'}`,
                            animationName: `${heading === 'TEDx' ? 'appear-text' : ''}`,
                            animationDuration: `${heading === 'TEDx' ? '1s' : ''}`
                        }} >TEDx</div>
                    <div className="page3-heading3"
                        onClick={() => window.scrollTo(0, 8501)}
                        style={{
                            fontSize: `${heading === 'TEDxDYPIT' ? window.matchMedia("(orientation: portrait)").matches ? '8rem' : '10rem' : '2rem'}`,
                            color: `${heading === 'TEDxDYPIT' ? '#eb0028' : 'grey'}`,
                            flexDirection: `${heading === 'TEDxDYPIT' ? 'column' : 'row'}`,
                            animationName: `${heading === 'TEDxDYPIT' ? 'appear-text' : ''}`,
                            animationDuration: `${heading === 'TEDxDYPIT' ? '1s' : ''}`
                        }} >
                        <div className="page3-heading-tedx">TEDx</div>
                        <div className="page3-dypit"
                            style={{
                                transform: `${heading === 'TEDxDYPIT' ? window.matchMedia("(orientation: portrait)").matches ? 'translate(0px, -30px)' : 'translate(0px, -35px)' : ''}`,
                                fontSize: '2rem',
                                color: `${heading === 'TEDxDYPIT' ? '#eb0028' : 'grey'}`,
                                textAlign : `${heading === 'TEDxDYPIT' ? 'center' : 'left'}`
                            }}>DYPIT Pimpri</div>
                    </div>
                </div>
                <div className="page3-content" ref={contentRef}>{content}</div>
            </div>
        </div>
    )
}

export default Page3;