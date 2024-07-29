import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersonForm from './components/PersonForm';
import PersonList from './components/PersonList';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<PersonList />} />
          <Route path="/add" element={<PersonForm />} />
          <Route path="/edit/:id" element={<PersonForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

