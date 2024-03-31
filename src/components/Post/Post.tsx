import './Post.css'
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../../data";

function Post() {

    const {id} = useParams();
    const navigate = useNavigate();


    return ( 
        <>
            
        </>
     );
}

export default Post;