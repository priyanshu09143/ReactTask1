import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Basic from './components/Basic';
import ArrayUser from './components/ArrayUser';
import NavBar from './components/NavBar';
import Counter from './components/Counter';
import Search from './components/Search';
import IncrementCounter from './components/IncrementCounter';
import InputChild from './components/InputChild';
import Show from './components/Show';
import Dynamically from './components/Dynamically';
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
          <Route path="/AddChild" element={<InputChild />} />
          <Route path="/show" element={<Show />} />
          <Route path="/dynamic" element={<Dynamically />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;
