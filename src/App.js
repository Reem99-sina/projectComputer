import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Review from './components/Review';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Welcome from './components/Welcome';
import './IBM_Plex_Sans,Poppins,Roboto/IBM_Plex_Sans/IBMPlexSans-Regular.ttf'
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} /></Routes>

    </BrowserRouter>
  );
}

export default App;
