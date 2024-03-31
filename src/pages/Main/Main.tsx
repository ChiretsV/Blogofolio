import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard';
import Title from '../../components/Title/Title';
import './Main.css'
import { useEffect, useState } from "react";
import { IObj } from '../../types/interfaces';
import { data } from "../../data";
import Tabs from '../../components/Tabs/Tabs';

function Main() {

    // const [data, setData] = useState<any>(null);

    // useEffect(() => {
    //     async function getData() {
    //         fetch('https://660355662393662c31cee0e0.mockapi.io/blog/data')
    //         .then(response => response.json())
    //         .then(json => setData(json))
    //     };

    //     getData();
    // }, [])

    // data.map((item: IObj) => {
    //                 console.log(item)
    //                 })

    return ( 
        <div className='main'>
            <Header></Header>
            <div className="title-tabs">
                <Title typeTitle='page__title'>Blog</Title>
                <Tabs></Tabs>
            </div>
            <div className="main-wrapper">
                <div className="main-left">
                    <Link to={`/posts/${data[0].id}`}><PostCard size='big' source={data[0]}></PostCard></Link>
                    <Link to={`/posts/${data[1].id}`}><PostCard size='average' source={data[1]}></PostCard></Link>
                    <Link to={`/posts/${data[2].id}`}><PostCard size='average' source={data[2]}></PostCard></Link>
                    <Link to={`/posts/${data[3].id}`}><PostCard size='average' source={data[3]}></PostCard></Link>
                    <Link to={`/posts/${data[4].id}`}><PostCard size='average' source={data[4]}></PostCard></Link>
                </div>
                <div className="main-right">
                    <Link to={`/posts/${data[5].id}`}><div key={data[5].id}><PostCard size='small' source={data[5]}></PostCard></div></Link>
                    <Link to={`/posts/${data[6].id}`}><div key={data[6].id}><PostCard size='small' source={data[6]}></PostCard></div></Link>
                    <Link to={`/posts/${data[7].id}`}><div key={data[7].id}><PostCard size='small' source={data[7]}></PostCard></div></Link>
                    <Link to={`/posts/${data[8].id}`}><div key={data[8].id}><PostCard size='small' source={data[8]}></PostCard></div></Link>
                    <Link to={`/posts/${data[9].id}`}><div key={data[9].id}><PostCard size='small' source={data[9]}></PostCard></div></Link>
                    <Link to={`/posts/${data[10].id}`}><div key={data[10].id}><PostCard size='small' source={data[10]}></PostCard></div></Link>
                </div>
            </div>
            
            <Footer></Footer>
        </div>
     );
}

export default Main;