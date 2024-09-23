import './App.css';
import Signin from './Components/registration/Signin';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './Components/registration/Signup';


function App() { 
  return (
      <>

      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
  

      </>
  )
}

export default App;