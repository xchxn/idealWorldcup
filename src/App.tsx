import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Layout from "./Layout";
import Tournament1 from './Tournament1';
import Quiz from './Quiz';
import Winner from './Winner';
import NavBar from './NavBar';
import Making from './Making';

const App:React.FC = () => {
  return (
    <Router>
        <NavBar />
      <Routes>
        <Route path="/" element = {<Layout name="router"/>} />
        <Route path="/Tournament1" element = {<Tournament1/>} />
        <Route path="/Quiz" element = {<Quiz />} />
        <Route path="/Making" element = {<Making />} />
        <Route path="/Winner" element = {<Winner />} />
      </Routes>
    </Router>
  );
}

export default App;
