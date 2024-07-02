import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LogoutPage from './pages/LogoutPage';
import MainPage from './pages/MainPage';
import SessionCheckPage from './pages/SessionCheckPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element = {<LoginPage/>} />
          <Route path='/SignUpPage' element = {<SignUpPage/>} />
          <Route path='/logout' element = {<LogoutPage/>} />
          <Route path='/main' element= {<MainPage/>} />
          <Route path="/session" element={<SessionCheckPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
