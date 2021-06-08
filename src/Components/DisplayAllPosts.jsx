import React, {useState} from 'react';
import CreateNewPost from './CreateNewPost';

const DisplayAllPosts = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const savePostTitleToState = event => {
        setTitle(event.target.value);
        console.log(title);
    };
    const savePostContentToState = event => {
        setContent(event.target.value);
        console.log(content);
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