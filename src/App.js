import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Basic from './components/Basic';
import ArrayUser from './components/ArrayUser';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import Search from './components/Search';
import IncrementCounter from './components/IncrementCounter';
import "./App.css"
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Basic />} />
          <Route path="/users" element={<ArrayUser />} />
          <Route path="/counter" element={<IncrementCounter />} />
          <Route path="/AddValue" element={<Counter />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
