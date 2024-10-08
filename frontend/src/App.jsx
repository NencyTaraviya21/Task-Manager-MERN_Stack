import './App.css';
import Signin from './Components/registration/Signin';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom';
import Signup from './Components/registration/Signup';
import Tasks from './Components/Tasks';
import TaskForm from './Components/TaskForm';


function App() { 
  return (
      <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>}>
            <Route index element={<Home/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/tasks' element={<Tasks/>}/>
            <Route path='taskform' element={<TaskForm/>}/>
            <Route path="/edit/:id" element={<TaskForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
  

      </>
  )
}

export default App;