import '../css/Page3.css';
import { useState } from 'react';

const contentMap = {};
contentMap['TED'] = 'TED is a non-profit that believes powerful ideas, powerfully presented, move us: to feel something, to think differently, to take action. In a world that can feel dark and overwhelming, these ideas have ripple effects of many magnitudes, pointing toward the possibility of a better future for people, communities and humanity at large.';
contentMap['TEDx'] = 'A TEDx event is a local gathering where live TED-like talks and performances are shared with the community. TEDx events are fully planned and coordinated independently, on a community-by-community basis. The content and design of each TEDx event is unique and developed by each organizing team.'
contentMap['TEDxDYPIT'] = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam minus saepe deserunt incidunt officiis sunt, at culpa possimus repudiandae velit tempore non perspiciatis illo ipsum, vero labore quod similique ullam?';

function Page3() {
    const [heading, setHeading] = useState('TED');
    const [content, setContent] = useState(contentMap['TED']);

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

    return (
        <div className="page3">
            <div className="page3-text">
                <div className="page3-heading">
                    <div className="page3-heading1" onClick={handleTEDClick} style={{fontSize : `${heading === 'TED' ? '10rem' : '2rem' }`, color : `${heading === 'TED' ? '#eb0028' : 'grey'}`}} >TED</div>
                    <div className="page3-heading2" onClick={handleTEDxClick} style={{fontSize : `${heading === 'TEDx' ? '10rem' : '2rem' }`, color : `${heading === 'TEDx' ? '#eb0028' : 'grey'}`}} >TEDx</div>
                    <div className="page3-heading3" onClick={handleTEDxDYPITClick} style={{fontSize : `${heading === 'TEDxDYPIT' ? '10rem' : '2rem' }`, color : `${heading === 'TEDxDYPIT' ? '#eb0028' : 'grey'}`}} >
                        <div className="page3-heading-tedx">TEDx</div>                        
                        <div className="page3-dypit" style={{fontSize : `${heading === 'TEDxDYPIT' ? '3rem' : '2rem' }`, color : `${heading === 'TEDxDYPIT' ? '#eb0028' : 'grey'}`, flexDirection : `${heading === 'TEDxDYPIT' ? 'row' : 'column' }`}}>DYPIT Pimpri</div>
                    </div>
                </div>
                <div className="page3-content">{content}</div>
            </div>            
        </div>
    )
}

export default Page3;