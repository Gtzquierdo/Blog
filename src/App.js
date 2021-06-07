import React from 'react';
import CreateNewPost from './Components/CreateNewPost';
import Posts from './Components/Post';
import ModifyPost from './Components/ModifyPost';


const App = () => {
  return (
    <div>
      <CreateNewPost />
      <Posts />
      <ModifyPost />
    </div>
  );
};
export default App;