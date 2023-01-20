import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Addpost from './pages/Addpost';

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/profile'  element={<Profile/>} />
          <Route path='/addpost'  element={<Addpost />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
