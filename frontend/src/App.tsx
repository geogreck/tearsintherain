import React from 'react';
import Post from './components/Post';
import { Question } from './components/Question';
import { users } from './data/user';


function App() {
  return (
    <div className='h-100 items-center' >
        <Post user={users[0]} />
        <Post user={users[0]}/>
    </div>
  );
}

export default App;
