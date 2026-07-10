import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeePanel from "./components/Employee_panel/employeePanel";
import EmployeeDashboard from "./components/Employee_panel/employeeDash";
import Profile from "./components/Employee_panel/myProfile";
const Login = lazy(() => import("./components/Loginpage/login"));
const SignUp = lazy(() => import("./components/SignupPage/signup"));
const Panel = lazy(() => import("./components/admin/panel"));
const Dashboard = lazy(() => import("./components/admin/dashboard"));
const Employees = lazy(() => import("./components/admin/Pages/employees"));
const Attendance = lazy(() => import("./components/admin/Pages/attendance"));
const LeaveRequest = lazy(() => import("./components/admin/Pages/leaveRequests"));
const Payroll = lazy(() => import("./components/admin/Pages/payroll"));
const Performance = lazy(() => import("./components/admin/Pages/performance"));
const Reports = lazy(() => import("./components/admin/Pages/reports"));
const Settings = lazy(() => import("./components/admin/Pages/settings"));
const RequireAuth = lazy(() => import("./components/requireAuth"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
            <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-300 border-t-sky-600"></div>

            <p className="mt-5 animate-pulse text-lg font-medium text-slate-700">
              Loading...
            </p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/panel"
            element={
              <RequireAuth>
                <Panel />
              </RequireAuth>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="employees" element={<Employees />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="leave/request" element={<LeaveRequest />} />
            <Route path="pay/roll" element={<Payroll />} />
            <Route path="performance" element={<Performance />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="/employeepanel" element={<EmployeePanel/>}>
            <Route index element={<EmployeeDashboard/>} />
            <Route path="profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;