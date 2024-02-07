import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './Components/Base';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import YouTube from './Pages/YouTube';
import Dashboard from './Pages/Dashboard';
import AddPost from './Components/AddPost';

function App() {
  return (
    <BrowserRouter>
      <Base>
      </Base>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Contavt' element={<Contact />} />
        <Route path='/YouTube' element={<YouTube />} />
        <Route path='/AddPost' element={<AddPost />} />

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
