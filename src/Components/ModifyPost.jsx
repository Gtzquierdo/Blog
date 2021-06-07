import React from 'react';

const ModifyPost = () => {
    return (
        <>
            <form>
                <h1>Modify Post</h1>
                <input type="text" placeholder="title" size="39"required></input>
                <br />
                <br />
                <textarea placeholder="contents" rows="8" cols="41" required></textarea>
                <br />
                <br />
                <button>Update Post</button>
            </form>
        </>
    );
};

export default ModifyPost;