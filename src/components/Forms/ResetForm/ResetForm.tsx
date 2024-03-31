import './ResetForm.css';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

function ResetForm() {
    return ( 
        <>
            <form className='reset-form'> 
                <Input title='Email' isDisabled={false} type='email' placeholder='Your email'></Input>  
                <Button isDisabled={false} typeButton={"submit"}>Reset</Button>
            </form>
        </>
     );
}

export default ResetForm;