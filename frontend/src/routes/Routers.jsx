import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ContactUs from '../pages/ContactUs';
import Psychologists from '../pages/Psychologists/Psychologists';
import PsychologistDetails from '../pages/Psychologists/PyschologistDetails';

import {Routes, Route} from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/psychologists" element={<Psychologists />} />
      <Route path="/psychologists/:id" element={<PsychologistDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
};

export default Routers;