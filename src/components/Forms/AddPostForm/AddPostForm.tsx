import './AddPostForm.css';
import Button from '../../Button/Button';
import Input from '../../Input/Input';

function AddPostForm() {
    return ( 
        <>
            <form className='add-post-form'> 
                <div className="add-post-title-wrapper">
                    <Input title='Title' isDisabled={false} type='text' placeholder='Add title'></Input>
                </div>
                <div className="add-post-lesson-image-wrapper">
                    <div className="add-post-lesson-wrapper">
                        <Input title='Lesson number' isDisabled={false} type='number' placeholder='Add number of lesson'></Input>
                    </div>
                    <div className="add-post-image-wrapper">
                        <Input title='Image' isDisabled={false} type='file' placeholder='Add image'></Input>
                        <Button isDisabled={false} typeButton={"submit"}>Upload new</Button>
                    </div>     
                </div>
                <div className="add-post-description-wrapper">
                    <Input title='Description' isDisabled={false} type='text' placeholder='Add your text'></Input>
                </div>
                <div className="add-post-text-wrapper">
                    <Input title='Text' isDisabled={false} type='text' placeholder='Add your text'></Input>
                </div>
                <div className="add-post-buttons-wrapper">
                    <div className="add-post-buttons-wrapper-left">
                        <Button isDisabled={false} typeButton={"submit"}>Delete post</Button>
                    </div>
                    <div className="add-post-buttons-wrapper-right">
                        <Button isDisabled={false} typeButton={"submit"}>Cancel</Button>
                        <Button isDisabled={false} typeButton={"submit"}>Add post</Button>
                    </div>
                </div>
            </form>
        </>
     );
}

export default AddPostForm;