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
                    <TextField type='text' className="registration-form-field" label="First Name" variant="outlined" />
                    <TextField type='text' className="registration-form-field" label="Last Name" variant="outlined" />
                    <TextField type='tel' className="registration-form-field" label="Contact no." variant="outlined" />
                    <TextField type='email' className="registration-form-field" label="Email" variant="outlined" />
                </div>
            </div>}
        </>        
    )
}

export default RegistrationForm;