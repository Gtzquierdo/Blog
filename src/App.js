import React from 'react';
import CreateNewPost from './Components/CreateNewPost';
import Posts from './Components/Post';


const App = () => {
  return (
    <div>
      <CreateNewPost />
      <Posts />
    </div>
  );
};
export default App;