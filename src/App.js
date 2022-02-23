import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Home';
import './styles/App.css';
import './styles/media-query.css';

import Topbar from './components/Topbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Topbar />
        <Routes>
          <Route path='/*' element={<Home/>} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
