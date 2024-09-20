import './App.css';
import Signin from './Components/registration/Signin';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './Components/registration/Login'


function App() {  

  return (
      <>
      <Header/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  
        {/* <Signin/>  */}
      </>
  )
}

export default App;