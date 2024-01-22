import './App.css';
import Homepage from './pages/Homepage';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import NotFoundpage from './pages/NotFoundpage';
import SingleBlog from './pages/SingleBlog';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Homepage /> } />
      <Route path="/login" element={ <Loginpage /> } />
      <Route path="/signup" element={ <Signuppage /> } />
      <Route path="/single" element={ <SingleBlog /> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
      <Route path="*" element={ <NotFoundpage /> } />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
