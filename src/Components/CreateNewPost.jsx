import React from "react";
const CreateNewPost = props => {
    return (
        // React.fragment is short syntax than div and takes up less space
        <>
            <form onSubmit={props.savePost}>
                <h1>Create New Post</h1>
                <input type="text" onChange={props.savePostTitleToState} placeholder="title" size="39" required ref={props.getTitle}></input>
                <br />
                <br />
                <textarea onChange={props.savePostContentToState} placeholder="contents" rows="8" cols="41" required ref={props.getContent} ></textarea>
                <br />
                <br />
                <button>Save Post</button>
            </form>
        </>
    );
};

export default CreateNewPost;