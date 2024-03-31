import { ITitle } from '../../types/interfaces';
import MyLink from '../MyLink/MyLink';
import './Title.css';
function Title({children, typeTitle}: ITitle) {
    return ( 
        <>
            <p className={typeTitle}>{children}</p>
        </>
     );
}

export default Title;