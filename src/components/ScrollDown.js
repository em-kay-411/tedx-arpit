import '../css/ScrollDown.css';
import { useState, useEffect } from 'react';

function ScrollDown() {

    const [spanHeight, setSpanHeight] = useState(20);
    const [spanWidth, setSpanWidth] = useState(20);
    const [boxLeft, setBoxLeft] = useState(50);
    const [boxHeight, setBoxHeight] = useState(55);
    const [boxTop, setBoxTop] = useState(75);
    const [transformLeft, setTransformLeft] = useState(-50);

    const handleScroll = () => {
        // For portrait screens
        if (window.matchMedia("(orientation: portrait)").matches) {
            if (window.scrollY < 700) {
                handleBoxHeight();
                handleBoxLeft();
                handleSpanWidthHeight();
                handleboxTop();
                handleTransformLeft();
            }
        }

        // For landscape screens
        if (window.matchMedia("(orientation: landscape)").matches) {
            if (window.scrollY < 700) {
                handleBoxHeight();
                handleBoxLeft();
                handleSpanWidthHeight();
                handleboxTop();
                handleTransformLeft();
            }

            if(window.scrollY > 700){
                setBoxHeight(28);
                setBoxLeft(0);
                setSpanWidth(10);
                setSpanHeight(10);
                setBoxTop(90);
                setTransformLeft(0);
            }
        }
    }

    const handleboxTop = () => {
        setBoxTop((3 / 140) * window.scrollY + 75);
    }

    const handleBoxLeft = () => {
        setBoxLeft(((-5 / 70) * window.scrollY) + 50);
    }

    const handleTransformLeft = () => {
        setTransformLeft((5 / 70) * (window.scrollY) - 50);
    }

    const handleBoxHeight = () => {
        setBoxHeight(((-27 / 700) * window.scrollY) + 55);
    }

    const handleSpanWidthHeight = () => {
        setSpanWidth(((-1 / 70) * window.scrollY) + 20);
        setSpanHeight(((-1 / 70) * window.scrollY) + 20);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <div className="box" id="box" style={{ left: `${boxLeft}%`, height: `${boxHeight}px`, top: `${boxTop}%`, transform : `translate(${transformLeft}%, 0)` }}>
            <span style={{ height: `${spanHeight}px`, width: `${spanWidth}px` }}></span>
            <span style={{ height: `${spanHeight}px`, width: `${spanWidth}px` }}></span>
            <span style={{ height: `${spanHeight}px`, width: `${spanWidth}px` }}></span>
        </div>
    )
}

export default ScrollDown;