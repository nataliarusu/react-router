import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetup';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Book from './pages/Book';
import Navigation from './components/layout/Navigation';
function App() {
  //the path after the domain will be the path
  // localhost:3000/
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-meetups" element={<NewMeetups />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/all-meetups" element={<AllMeetups />} />
        <Route path="/hi" element={<h1>Hi</h1>} />
        <Route path='/book-list' element={<BookList/>}/>
        <Route path='/book-list/:id' element={<Book/>}/>
      </Routes>
    </div>
  );
}

export default App;
