import './App.css';
import AddPost from './pages/AddPost/AddPost';
import Main from './pages/Main/Main';
import NewPassword from './pages/NewPassword/NewPassword';
import Registration from './pages/Registration/Registration';
import RegistrationSuccess from './pages/RegistrationSuccess/RegistrationSuccess';
import Reset from './pages/Reset/Reset';
import SignIn from './pages/SignIn/SignIn';
import SingUp from './pages/SignUp/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
          <Route path='/AddPost' element={<AddPost></AddPost>}></Route>
          <Route path='/NewPassword' element={<NewPassword></NewPassword>}></Route>
          <Route path='/Reset' element={<Reset></Reset>}></Route>
          <Route path='/SingUp' element={<SingUp></SingUp>}>
            <Route path='/SingUp/Registration' element={<Registration></Registration>}>
              <Route path='/SingUp/Registration/RegistrationSuccess' element={<RegistrationSuccess></RegistrationSuccess>}></Route>
            </Route>
          </Route>
          <Route path='/SignIn' element={<SignIn></SignIn>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
