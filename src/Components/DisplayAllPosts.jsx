import React, {useState, useRef} from 'react';
import CreateNewPost from './CreateNewPost';

const DisplayAllPosts = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPosts, setAllPosts] = useState([]);

    // Initialize useRef
    const getTitle = useRef();
    const getContent = useRef();

    const savePostTitleToState = event => {
        setTitle(event.target.value);
        console.log(title);
    };
    const savePostContentToState = event => {
        setContent(event.target.value);
        console.log(content);
    };

    const savePost = () => {
        const id = Date.now();
        setAllPost([...allPost, {title, content, id}]);
        setTitle("");
        setContent("");
        console.log(allPost);
    };
    
    return (
    <>
    <CreateNewPost
    savePostTitleToState = {savePostTitleToState}
    savePostContentToState = {savePostContentToState} 
    
    />
    </>
    )
};





export default DisplayAllPosts;