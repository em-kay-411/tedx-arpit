import '../css/RegistrationForm.css';

function RegistrationForm ({visibility}) {

    return (
        <>
            {visibility && <div className="registration-form">
                Form
            </div>}
        </>        
    )
}

export default RegistrationForm;