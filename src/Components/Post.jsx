import React from 'react';

const Post = (props) => {
    return (
    <>
    <section>
        <h3>props.title</h3>
        <p>props.content</p>
        <button>Edit</button>
        <button>Delete</button>
    </section>
    </>
    )
};

export default Post;