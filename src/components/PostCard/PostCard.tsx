import './PostCard.css'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { IoEllipsisHorizontal } from "react-icons/io5";

function PostCard({size}: {size: string}) {
    return ( 
        <div className={size}>
            <div className="card-wrapper">
                <div className="card-info">
                    <p className="card-info__date">April 20, 2021</p>
                    <p className="card-info__title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...</p>
                    <p className="card-info__description">Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.</p>
                </div>
                <div className="card-img"></div>
            </div>
            <div className="card-icons">
                <div className="card-icons-grade">
                    <div className="card-icons-grade-like">
                        <AiOutlineLike />
                    </div>
                    <div className="card-icons-grade-dislike">
                        <AiOutlineDislike />
                    </div>
                </div>
                <div className="card-icons-options">
                    <div className="card-icons-options-bookmark">
                        <FaRegBookmark />
                    </div>
                    <div className="card-icons-options-ellipsis">
                        <IoEllipsisHorizontal />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default PostCard;