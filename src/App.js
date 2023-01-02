import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Manage from './Pages/Manage/Manage';
import AddService from './Pages/AddService/AddService';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/serviceDetails/:serviceId' element={<ServiceDetail></ServiceDetail>}>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={<RequireAuth>
          <CheckOut></CheckOut>
        </RequireAuth>}></Route>
        <Route path='/manage' element={<RequireAuth>
          <Manage></Manage>
        </RequireAuth>}></Route>
        <Route path='/addService' element={<RequireAuth>
          <AddService></AddService>
        </RequireAuth>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
