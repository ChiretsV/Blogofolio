import Button from '../../Button/Button';
import './RegistrationSuccessForm.css'
function RegistrationSuccessForm() {
    return ( 
            <div className='registration-wrapper'>
                <form className='registration-form'> 
                    <p className="registration-text">
                        <span className="registration-text__line">Email confirmed.</span>
                        <span className="registration-text__line">Your registration is now completed</span>
                    </p>  
                    <Button isDisabled={false} typeButton={"submit"}>Go to home</Button>
                </form> 
            </div>
        );
}

export default RegistrationSuccessForm;