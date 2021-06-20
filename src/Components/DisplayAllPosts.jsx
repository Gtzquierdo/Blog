import React, {useState, useRef} from 'react';
import CreateNewPost from './CreateNewPost';
import Post from './Post';

const DisplayAllPosts = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPosts, setAllPosts] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);

    // Initialize useRef
    const getTitle = useRef();
    const getContent = useRef();

    const savePostTitleToState = event => {
        setTitle(event.target.value);
        // console.log(title);
    };
    const savePostContentToState = event => {
        setContent(event.target.value);
        // console.log(content);
    };
    const toggleCreateNewPost = () => {
        setIsCreateNewPost(!isCreateNewPost);
    }

    const savePost = (event) => {
        event.preventDefault();
        setAllPosts([...allPosts, {title, content}]);
        console.log(allPosts);
        getTitle.current.value = "";
        getContent.current.value = "";
        toggleCreateNewPost()
        
    };
    if (isCreateNewPost) {
        return (
            <>
                <CreateNewPost
                    savePostTitleToState = {savePostTitleToState}
                    savePostContentToState = {savePostContentToState} 
                    getTitle = {getTitle}
                    getContent = {getContent}
                    savePost = {savePost}
                />
            </>
        );
    }

    return (
        <>
            <h2>All Posts</h2>
            {!allPosts.length ? (
                <div>
                    <h3>There is nothing to see here.</h3>
                </div>
            ) : (
                allPosts.map(eachPost => {
                    return (
                        <Post 
                        id = {eachPost.id}
                        key = {eachPost.id}
                        title = {eachPost.title}
                        content = {eachPost.content}
                        />
                    );
                })
            )}
            <br/>
            <br/>
            <button onClick={toggleCreateNewPost}>Create New</button>
        </>
    )
};





export default DisplayAllPosts;