import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup'
import BookList from './pages/BookList';
import Book from './pages/Book';
import NotFound from './pages/NotFound';
import Navigation from './components/layout/Navigation';

function App() {
  //the path after the domain will be the path
  // localhost:3000/
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/all-meetups" element={<AllMeetups/>}/>
        <Route path = "/favorites" element={<Favorites/>}/>
        <Route path ="new-meetups" element={<NewMeetup/>}/>
        <Route path="/book-list">
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<Book />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
