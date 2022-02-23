import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import './styles/App.css';
import './styles/media-query.css';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Topbar />
        <Routes>
          <Route path='/*' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
