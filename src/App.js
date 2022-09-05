
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';

function App() {
  return (
   <>
   <Navbar/>
   <br /><br />
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='aboutus' element={<Aboutus/>}></Route>
    <Route path='contact' element={<Contact/>}></Route>
   </Routes>
   </>
  );
}

export default App;
