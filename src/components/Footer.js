import logoWhite from '../logo/logo-white.png';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import '../css/Footer.css'

function Footer() {

    const [bottom, setBottom] = useState(-100);

    const handleScroll = () => {
        if(window.scrollY < 22500){
            setBottom(-100);
        }

        if(window.scrollY > 22500 && window.scrollY < 24000){
            setBottom((window.scrollY / 15) - 1600);
        }

        if(window.scrollY > 24000){
            setBottom(0);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className="footer" style={{bottom : `${bottom}%`}}>
            
            <div className="footer-social-media">
                <div className="footer-social-heading">Follow us</div>
                <div className="footer-social-logos">
                    <div className="footer-social-logo"><Icon icon="entypo-social:instagram" height='3rem' onClick={() => window.open('https://www.instagram.com/d_y_patil_pimpri/?hl=en')} /></div>
                    <div className="footer-social-logo"><Icon icon="entypo-social:linkedin" height='3rem' onClick={() => window.open('https://in.linkedin.com/company/tedxdypitpimpri')} /></div>
                </div>
                <div className="footer-social-heading">Important Links</div>
                <div className="footer-ted-links">
                    <div className="footer-link" onClick={() => window.open('https://www.ted.com')}>TED</div>
                    <div className="footer-link" onClick={() => window.open('https://www.ted.com/about/programs-initiatives/tedx-program')}>TEDx</div>
                    <div className="footer-link" onClick={() => window.open('https://www.ted.com/watch/tedx-talks')}>TEDx Talks</div>
                </div>
            </div>
            <div className="footer-logo"><img className='footer-logo-img' src={logoWhite} alt="" /><div className="footer-statement">&#169; 2024 TEDxDYPITPimpri   |   All rights reserved. </div></div>
            <div className="footer-contact-us">
                <div className="footer-address-section">
                    <div className="footer-icon"><Icon icon="ic:baseline-location-on" height="1.2rem" /></div>
                    <div className="footer-address"> Dr. D. Y. Patil Unitech Society <br /> Dr. D. Y. Patil Institute of Technology <br /> Main Campus, Sant Tukaram Nagar, <br />
                        Pimpri, Pune- 411018, <br />
                        Maharashtra, India.</div>
                </div>
                <div className="footer-number-section">
                    <div className="footer-icon"><Icon icon="material-symbols:call" width="1.2rem" height="1.2rem" /></div>
                    <div className="footer-number">TEDxDYPITPimpri <br /> +91 9579251272</div>
                </div>

                <div className="footer-number-section">
                    <div className="footer-icon"><Icon icon="material-symbols:call" width="1.2rem" height="1.2rem" /></div>
                    <div className="footer-number">Vikramaditya Gujar <br /> <div className="position">Organiser</div> +91 9579251272</div>
                </div>

                <div className="footer-number-section">
                    <div className="footer-icon"><Icon icon="material-symbols:call" width="1.2rem" height="1.2rem" /></div>
                    <div className="footer-number">Bhavik Dahatonde <br /> <div className="position"></div> +91 7447553387</div>
                </div>

                <div className="footer-number-section">
                    <div className="footer-icon"><Icon icon="material-symbols:call" width="1.2rem" height="1.2rem" /></div>
                    <div className="footer-number">Arpit Gulhane <br /> <div className="position"></div> +91 7775875592</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;