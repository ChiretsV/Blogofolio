import './SignInForm.css';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import Link from '../../Link/Link';
import Text from '../../Text/Text';

function SignInForm() {
    return ( 
        <div className='form-wrapper'>
            <form className='sign-in-form'>
                <div className="sign-in-inputs">
                    <Input title='Email' isDisabled={false} type='email' placeholder='Your email'></Input>
                    <Input title='Password' isDisabled={false} type='password' placeholder='Your password'></Input>
                </div>
                <div className="passwd-link">
                    <Link>Forgot password?</Link>
                </div>
                <Button isDisabled={false} typeButton={"submit"}>Sign Up</Button>
            </form> 
            <div className="sign-in-link">
                <Text type='help'>Don't have an account?</Text>
                <Link>Sign Up</Link>
            </div>
        </div>
     );
}

export default SignInForm;