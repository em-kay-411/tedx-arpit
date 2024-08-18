import logoWhite from '../logo/logo-white.png';
import { Icon } from '@iconify/react';
import '../css/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo"><img className='footer-logo-img' src={logoWhite} alt="" /></div>
            <div className="footer-social-media">
                <div className="footer-social-heading"><h2>Follow us</h2></div>
                <div className="footer-social-logos">
                    <div className="footer-social-logo"><Icon icon="entypo-social:instagram" height='3rem' onClick={() => window.open('https://www.instagram.com/d_y_patil_pimpri/?hl=en')}  /></div>
                    <div className="footer-social-logo"><Icon icon="entypo-social:linkedin" height='3rem' onClick={() => window.open('https://in.linkedin.com/company/tedxdypitpimpri')} /></div>
                </div>
            </div>
            <div className="footer-contact-us">
                <div className="footer-address-section">
                    <Icon icon="ic:baseline-location-on" height="1.2rem" />
                    <div className="footer-address"> Dr. D. Y. Patil Unitech Society <br /> Dr. D. Y. Patil Institute of Technology <br /> Main Campus, Sant Tukaram Nagar, <br />
                        Pimpri, Pune- 411018, <br />
                        Maharashtra, India.</div>
                </div>
                <div className="footer-number-section">
                    <Icon icon="material-symbols:call" width="1.2rem" height="1.2rem" />
                    <div className="footer-number">+91 9579251272</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;