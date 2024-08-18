import '../css/RegisterButton.css';
import { useState } from 'react';

function RegisterButton() {
    const [animation, setAnimation] = useState('button-appear');
    const [registerVisibility, setRegisterVisibility] = useState('hidden');

    const handleRegisterClick = () =>{
        window.open("https://docs.google.com/forms/d/e/1FAIpQLScX8eRPk-DzDG1V58pDp_kTdvHRiFcCZ9Mqdi9nfwtBVeJ8bw/viewform", '_blank');
    }

    return (
        <>
            <div className='register-button'
                onMouseEnter={() => setAnimation('change-color')}
                onMouseLeave={() => setAnimation('')}
                style={{ animationName: `${animation}` }}
                onAnimationEnd={() => setRegisterVisibility('visible')}
                onClick={handleRegisterClick}
            >
                <div className="register-button-text" style={{ visibility: `${registerVisibility}` }}>
                    REGISTER
                </div>
            </div>
        </>
    )
}

export default RegisterButton