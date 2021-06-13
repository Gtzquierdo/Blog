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

    const savePost = (event) => {
        event.preventDefault();
        setAllPosts([...allPosts, {title, content}]);
        console.log(allPosts);
        getTitle.current.value = "";
        getContent.current.value = "";
        
    };
    
    return (
    <>
    <CreateNewPost
    savePostTitleToState = {savePostTitleToState}
    savePostContentToState = {savePostContentToState} 
    getTitle = {getTitle}
    getContent = {getContent}
    />
    </>
    )
};





export default DisplayAllPosts;