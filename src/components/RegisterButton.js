import '../css/RegisterButton.css';
import { useState } from 'react';
import RegistrationForm from './RegistrationForm';

function RegisterButton() {

    const [scroll, setScroll] = useState(window.scrollY);
    const [animation, setAnimation] = useState('button-appear');
    const [registerVisibility, setRegisterVisibility] = useState('hidden');
    const [formRendered, setFormRendered] = useState(false);

    const handleScroll = () => {
        setScroll(window.scrollY);
        // For portrait screens
        if (window.matchMedia("(orientation: portrait)").matches) {
        }

        // For landscape screens
        if (window.matchMedia("(orientation: landscape)").matches) {
        }
    }

    const handleRegisterClick = () => {
        setFormRendered(!formRendered);

        if(formRendered){
            
        }
    }

    return (
        <>
            <RegistrationForm visibility={formRendered} />
            {!formRendered && <div className='register-button'
                onMouseEnter={() => setAnimation('change-color')}
                onMouseLeave={() => setAnimation('')}
                style={{ animationName: `${animation}` }}
                onAnimationEnd={() => setRegisterVisibility('visible')}
                onClick={() => setFormRendered(!formRendered)}
            >
                <div className="register-button-text" style={{ visibility: `${registerVisibility}` }}>
                    REGISTER
                </div>
            </div>}
        </>
    )
}

export default RegisterButton