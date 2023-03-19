import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './page/MainPage';
import MovieDetail from './page/MovieDetail';
import TvDetail from './page/TvDetail';
import TvPage from './page/TvPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/tv/:id" element={<TvDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
