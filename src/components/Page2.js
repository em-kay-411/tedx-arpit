import '../css/Page2.css';
import { useState, useEffect } from 'react';

function Page2() {

    const [page2Opacity, setPage2Opacity] = useState(0);
    const [page2Scale, setPage2Scale] = useState(0);
    const [mousePosition, setMousePosition] = useState('');

    const handleScroll = () => {
        // For portrait screens
        if (window.matchMedia("(orientation: portrait)").matches) {
            if(window.scrollY < 2500){
                setPage2Opacity(0);
                setPage2Scale(0);
            }

            if (window.scrollY > 2500 && window.scrollY < 4000) {
                handlePage2Entrance();
            }

            if(window.scrollY > 4000 && window.scrollY < 5000){
                setPage2Opacity(1);
                setPage2Scale(1);
            }

            if(window.scrollY > 5000){
                handlePage2Exit();
            }
        }

        // For landscape screens
        if (window.matchMedia("(orientation: landscape)").matches) {

            if(window.scrollY < 2500){
                setPage2Opacity(0);
                setPage2Scale(0);
            }

            if (window.scrollY > 2500 && window.scrollY < 4000) {
                handlePage2Entrance();
            }

            if(window.scrollY > 4000 && window.scrollY < 5000){
                setPage2Opacity(1);
                setPage2Scale(1);
            }

            if(window.scrollY > 5000){
                handlePage2Exit();
            }
        }
    }    

    const handlePage2Entrance = () => {
        setPage2Opacity((1 / 1500) * (window.scrollY - 2500));
        setPage2Scale((1 / 1500) * (window.scrollY - 2500));
    }

    const handlePage2Exit = () => {
        setPage2Opacity((-1 / 1500) * (window.scrollY - 6500));
        setPage2Scale((-1 / 1500) * (window.scrollY - 6500));
    }

    // Fix this
    const handleMouseMove = (event) => {
        if(event.clientX < window.innerWidth / 2){
            setMousePosition('left');
        }
        else{
            setMousePosition('');
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive : true});
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.addEventListener('mousemove', handleMouseMove);
        }
    }, [])

    return (
        <div className="page2" style={{ opacity: `${page2Opacity}`, transform: `translate(-50%, -50%) scale(${page2Scale})` }}>
            <div className="page2-x" style={{animationDirection : `${mousePosition === 'left' ? 'reverse' : 'forwards'}`}}>X</div>
            <div className="page2-heading">
                <div className="page2-heading-top">
                    <div className="page2-flip">FLIP</div>
                    <div className="page2-the">THE</div>
                </div>                
                <div className="page2-script">SCRIPT</div>
            </div>
            <div className="page2-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At eligendi alias ipsam eius? Voluptatum accusamus sequi, inventore nostrum, molestias quasi ad voluptatem doloribus quod amet error qui aspernatur architecto quaerat.</div>
        </div>
    )
}

export default Page2;