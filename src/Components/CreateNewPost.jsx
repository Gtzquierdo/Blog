import React from "react";
const CreateNewPost = () => {
    return (
        // React.fragment is short syntax than div and takes up less space
        <>
    <form>
            <h1>Create New Post</h1>
            <input type="text" placeholder="title" size="39"required></input>
            <br />
            <br />
            <textarea placeholder="contents" rows="8" cols="41"required></textarea>
            <button>Save Post</button>

    </form>
        </>
    );
};

export default CreateNewPost;