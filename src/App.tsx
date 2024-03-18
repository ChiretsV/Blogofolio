import './App.css';
import Main from './pages/Main/Main';
import Registration from './pages/Registration/Registration';
import RegistrationSuccess from './pages/RegistrationSuccess/RegistrationSuccess';
import SignIn from './pages/SignIn/SignIn';
import SingUp from './pages/SignUp/SignUp';

function App() {

  return (
    <>
      <Main></Main>
      <SingUp></SingUp>
      <Registration></Registration>
      <RegistrationSuccess></RegistrationSuccess>
      <SignIn></SignIn>
    </>
  );
}

export default App;
