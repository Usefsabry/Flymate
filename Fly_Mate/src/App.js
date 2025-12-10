
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyTrip from "./pages/MyTrip";
import Services from "./pages/Services";
import About from "./pages/About";
import SignUpForm from './pages/SignUp';
import LoginPage from './pages/Login';
import UserProfile from "./pages/UserProfile";

import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 2100, 
  once: false 
});


function App() {
  return (
    <>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mytrip" element={<MyTrip />} />
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/signup" element={<SignUpForm/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
        <Route path="/profile" element={<UserProfile />} />

      </Routes>
       


      
      
    </>
  );
}

export default App;
