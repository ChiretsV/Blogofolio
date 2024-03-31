import './MyLink.css'
import {IMyLink} from '../../types/interfaces'

function MyLink({children}: IMyLink) {
    return ( 
    <>
        <a href="#" className="my-link">{children}</a>
    </> 
    );
}

export default MyLink;