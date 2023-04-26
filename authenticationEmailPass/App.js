
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
<Route path='/' exact  element={<Home/>}>
</Route>
<Route path='/login' element={<Login/>}>
</Route>
<Route path='/SignUp' element={ <Signup/>}>
</Route>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
