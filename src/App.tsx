import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {BookLibraryPage} from "./pages/BookLibraryPage";
import SubmitBookPage from "./pages/SubmitBookPage";

function App() {
  return (
      <BrowserRouter >
        <Routes>
          <Route path="main-page" element={<BookLibraryPage/>}/>
          <Route path="submit-page" element={<SubmitBookPage/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
