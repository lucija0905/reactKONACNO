import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main'


function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Main />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
