import './PostCard.css'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { IObj } from '../../types/interfaces';

function PostCard({size, source}: {size: string, source: IObj}) {
    return ( 
        <div className={size}>
            <div className="card-wrapper">
                <div className="card-info">
                    <p className="card-info__date">April 20, 2021</p>
                    <p className="card-info__title">{source.title}</p>
                    <p className="card-info__description">{source.description}</p>
                </div>
                <div className="card-img" style={{ backgroundImage: `url(${source.image})` }}></div>
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