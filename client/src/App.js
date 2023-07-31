import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import PlayListHome from './components/PlayListHome';
import HomePage from './components/HomePage';
const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/playlist/:id" element={<PlayListHome />} />
          </Routes>
    </Router>
  );
};

export default App;