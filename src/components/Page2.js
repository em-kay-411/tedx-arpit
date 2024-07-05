import '../css/Page2.css';
import { useState, useEffect } from 'react';

function Page2() {

    const [page2Opacity, setPage2Opacity] = useState(0);
    const [page2Scale, setPage2Scale] = useState(0);

    const handleScroll = () => {
        // For portrait screens
        if (window.matchMedia("(orientation: portrait)").matches) {
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

            if(window.scrollY > 4000){
                setPage2Opacity(1);
                setPage2Scale(1);
            }
        }
    }    

    const handlePage2Entrance = () => {
        setPage2Opacity((1 / 1500) * (window.scrollY - 2500));
        setPage2Scale((1 / 1500) * (window.scrollY - 2500));
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive : true});

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className="page2" style={{ opacity: `${page2Opacity}`, transform: `translate(-50%, -50%) scale(${page2Scale})` }}>Page 2</div>
    )
}

export default Page2;