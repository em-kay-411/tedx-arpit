import '../css/RegistrationForm.css';

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
            </div>}
        </>        
    )
}

export default RegistrationForm;