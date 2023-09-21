import './App.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <ul className='ul_class'>
          <li className='li_class'>
            <Link className='link' to='/'>Home</Link>    
          </li>
          <li className='li_class'><Link className='link' to='/about'>About</Link></li>
          <li className='li_class'><Link className='link'  to='/contact'>Contact Us</Link></li>
         </ul>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          
        </Routes>
        
       </BrowserRouter>
    </div>
  );
}

export default App;
