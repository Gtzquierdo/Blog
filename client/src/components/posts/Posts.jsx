import Post from '../post/Post';
import  './posts.css';

const posts = ({posts}) => {
    return (
        <div className="posts">
            {posts.map((p) =>(
                <Post  post={p}/>
            ))}
        </div>
    );
}

export default posts;
