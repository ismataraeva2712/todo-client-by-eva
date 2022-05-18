import logo from './logo.svg';
import './App.css';
import TodoList from './Component/ToDoApp';
import ToDoApp from './Component/ToDoApp';
import Login from './Component/Login/Login';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Home from './Component/Home';
import RequireAuth from './Component/Login/RequireAuth';
import Signup from './Component/Login/Signup';
import Header from './Component/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<RequireAuth>
          <Home></Home>
        </RequireAuth>}></Route>
        <Route path='/home' element={<RequireAuth>
          <Home></Home>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
