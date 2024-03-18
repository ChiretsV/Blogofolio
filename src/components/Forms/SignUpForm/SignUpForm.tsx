import './SignUpForm.css';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import Link from '../../Link/Link';
import Text from '../../Text/Text';

function SignUpForm() {
    return ( 
        <div className='form-wrapper'>
            <form className='form'>
                <div className="inputs">
                    <Input title='Name' isDisabled={false} type='text' placeholder='Your name'></Input>
                    <Input title='Email' isDisabled={false} type='email' placeholder='Your email'></Input>
                    <Input title='Password' isDisabled={false} type='password' placeholder='Your password'></Input>
                    <Input title='Confirm password' isDisabled={false} type='password' placeholder='Confirm password'></Input>
                </div>    
                <Button isDisabled={false} typeButton={"submit"}>Sign Up</Button>
            </form> 
            <div className="link">
                <Text type='help'>Already have an account?</Text>
                <Link>Sign In</Link>
            </div>
        </div>
     );
}

export default SignUpForm;