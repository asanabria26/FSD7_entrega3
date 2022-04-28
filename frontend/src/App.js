//import logo from './logo.svg';
import './assets/App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home'
import Auth from './components/auth/Auth';
import AdminHotel from './components/newHotel/AdminHotel';




function App() {
  return (
    <main>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/adminHotel" element={<AdminHotel />} />
       </Routes>
    </main>
  );
}

export default App;
