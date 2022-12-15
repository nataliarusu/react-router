import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetup';
function App() {
  //the path after the domain will be the path
  // localhost:3000/
  return (
    <div>
      <Routes>
      
        <Route path="/new-meetups" element={<NewMeetups />}/>
        <Route path="/favorites" element={ <Favorites />}/>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/hi" element={<h1>Hi</h1>} />     

      </Routes>
    </div>
  );
}

export default App;
