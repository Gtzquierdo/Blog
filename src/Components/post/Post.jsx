import { Link } from 'react-router-dom';
import './post.css';

const Post = ({img}) => {
    return (
        <div className="post">
            <img
                className="postImg"
                src="{img}"
                alt="BlogPost"
            />
            <div className="postInfo">
            {/* Categories */}
                <div className="postCategory">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    lorem ipsum dolor sit amet
                </span>
                <hr />
                <span className="postDate"> 1 HOur Ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    );
}

export default Post;
