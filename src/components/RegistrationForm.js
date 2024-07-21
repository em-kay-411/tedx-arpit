import '../css/RegistrationForm.css';
import { TextField } from '@mui/material';

function RegistrationForm ({formRendered, setFormRendered}) {

    const handleRegistrationFormClose = () => {
        setFormRendered(false);
    }

    return (
        <>
            {formRendered && <div className="registration-form"
                style={{animationDirection : `${formRendered ? 'forwards' : 'reverse'}`}}
            >
                <div className="registration-form-close"
                    onClick={handleRegistrationFormClose}
                >&#x2715;</div>

                <div className="registration-form-fields">
                    <TextField className="registration-form-first-name" label="First Name" variant="outlined" />
                    <TextField className="registration-form-last-name" label="Last Name" variant="outlined" />
                </div>
            </div>}
        </>        
    )
}

export default RegistrationForm;