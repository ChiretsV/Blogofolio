import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import Title from '../../components/Title/Title';
import './Main.css'

function Main() {
    return ( 
        <div className='main'>
            <Header></Header>
            <div className="title-tabs">
                <Title typeTitle='page__title'>Blog</Title>
            </div>
            <div className="main-wrapper">
                <div className="main-left">
                    <PostCard size='big'></PostCard>
                    <PostCard size='average'></PostCard>
                    <PostCard size='average'></PostCard>
                    <PostCard size='average'></PostCard>
                    <PostCard size='average'></PostCard>
                </div>
                <div className="main-right">
                    <PostCard size='small'></PostCard>
                    <PostCard size='small'></PostCard>
                    <PostCard size='small'></PostCard>
                    <PostCard size='small'></PostCard>
                    <PostCard size='small'></PostCard>
                    <PostCard size='small'></PostCard>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
     );
}

export default Main;