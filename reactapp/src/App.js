import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
