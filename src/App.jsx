import { useState } from 'react'
import './App.css'
import Login from './components/Loginpage/login'
import SignUp from './components/SignupPage/signup'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Panel from './components/admin/panel';
import Dashboard from './components/admin/dashboard';
import Employees from './components/admin/Pages/employees';
import Attendance from './components/admin/Pages/attendance';
import LeaveRequest from './components/admin/Pages/leaveRequests';
import Payroll from './components/admin/Pages/payroll';
import Performance from './components/admin/Pages/performance';
import Reports from './components/admin/Pages/reports';
import Settings from './components/admin/Pages/settings';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path = '/panel' element={<Panel/>}>
        {/* Nested Routing -> it has already a slash defined*/}
            <Route index element={<Dashboard/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>

            <Route path='employees' element={<Employees/>}/>
            <Route path='attendance' element={<Attendance/>}/>
            <Route path='leave/request' element={<LeaveRequest/>}/>
            <Route path='pay/roll' element={<Payroll/>}/>
            <Route path='performance' element={<Performance/>}/>
            <Route path='reports' element={<Reports/>}/>
            <Route path='settings' element={<Settings/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
