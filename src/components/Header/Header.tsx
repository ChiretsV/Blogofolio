import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";

function Header() {
    return ( 
        <>
            <header className="header">
                <div className="header-burger">
                    <div className="header-burger-icon">
                        <GiHamburgerMenu />
                    </div>
                </div>
                <div className='header-search-profile'>
                    <div className="header-search">
                        <div className="header-search-icon">
                            <IoSearch />
                        </div>
                    </div>
                    <div className="header-profile">
                        <div className="header-profile-icon">
                            <RxAvatar />
                        </div>
                    </div>
                </div>
            </header>
        </>
     );
}

export default Header;