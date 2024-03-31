import Footer from '../../components/Footer/Footer';
import AddPostForm from '../../components/Forms/AddPostForm/AddPostForm';
import NewPasswordForm from '../../components/Forms/NewPasswordForm/NewPasswordForm';
import Header from '../../components/Header/Header';
import Title from '../../components/Title/Title';
import './AddPost.css';

function AddPost() {
    return ( 
        <div className='add-post'>
            <Header></Header>
            <div className="add-post-wrapper">
                <Title typeTitle={"form__title"}>Add post</Title>
                <AddPostForm></AddPostForm>
            </div>
            <Footer></Footer>
        </div>
     );
}

export default AddPost;