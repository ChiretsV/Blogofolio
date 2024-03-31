import './SignInForm.css';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import MyLink from '../../MyLink/MyLink';
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
                    <MyLink>Forgot password?</MyLink>
                </div>
                <Button isDisabled={false} typeButton={"submit"}>Sign Up</Button>
            </form> 
            <div className="sign-in-link">
                <Text type='help'>Don't have an account?</Text>
                <MyLink>Sign Up</MyLink>
            </div>
        </div>
     );
}

export default SignInForm;