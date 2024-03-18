import './Link.css'
import {ILink} from '../../types/interfaces'

function Link({children}: ILink) {
    return ( 
    <>
        <a href="#" className="link">{children}</a>
    </> 
    );
}

export default Link;