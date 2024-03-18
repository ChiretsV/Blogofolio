import { ITitle } from '../../types/interfaces';
import Link from '../Link/Link';
import './Title.css';
function Title({children, typeTitle}: ITitle) {
    return ( 
        <>
            <Link>Back to home</Link>
            <p className={typeTitle}>{children}</p>
        </>
     );
}

export default Title;