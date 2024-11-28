import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomePage from './pages/HomePage';
import AddBookPage from './pages/AddBookPage';
import EditBookPage from './pages/EditBookPage';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddBookPage />} />
          <Route path="/edit/:id" element={<EditBookPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;