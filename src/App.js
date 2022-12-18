import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import './tias.css'

import Home from './pages/Home';
import AdminHome from './pages/admin/Home';
import Test from './pages/Test';
import AdminDashboard from './pages/admin/Dashboard';
import AdminUsers from './pages/admin/AdminUsers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<AdminUsers/>} />
        <Route path="/test" element={<Test />} />
        <Route path="/abort" element={"404 NOT FOUND"} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
