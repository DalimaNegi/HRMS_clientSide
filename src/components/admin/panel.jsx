import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEmployeeData } from "../../features/Employee/EmployeeSlice";

let baseUrl = import.meta.env.VITE_BASE_URL;

function Panel() {
  const [empFormData, setEmpFormData] = useState([]);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${baseUrl}/get/employee`)
      .then((res) => {
        let { success, message, data } = res.data;

        // Store in local state (optional)
        setEmpFormData(data);

        // Store in Redux
        dispatch(setEmployeeData(data));
      })
      .catch((err) => {
        let { success, message } = err.response.data;
        console.log(message);
      });
  }, [dispatch]);

  let sidebarData = [
    { label: "Dashboard", path: "/panel/dashboard" },
    { label: "Employee Directory", path: "/panel/employees" },
    { label: "Attendance", path: "/panel/attendance" },
    { label: "Leave Requests", path: "/panel/leave/request" },
    { label: "Payroll", path: "/panel/pay/roll" },
    { label: "Performance", path: "/panel/performance" },
    { label: "Reports", path: "/panel/reports" },
    { label: "Settings", path: "/panel/settings" },
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-100 text-slate-900">
        <header className="flex flex-col gap-4 bg-white px-6 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="rounded-2xl bg-sky-600 px-4 py-3 text-white shadow-sm">
              <span className="text-lg font-semibold">HRMS Admin</span>
            </div>

            <nav className="flex flex-wrap gap-2 text-sm text-slate-600">
              <button
                className="rounded-full px-4 py-2 hover:bg-slate-100"
                onClick={() => {
                  navigate("/panel/dashboard");
                }}
              >
                Dashboard
              </button>

              <button
                className="rounded-full px-4 py-2 hover:bg-slate-100"
                onClick={() => {
                  navigate("/panel/employees");
                }}
              >
                Employees
              </button>

              <button className="rounded-full px-4 py-2 hover:bg-slate-100">
                Attendance
              </button>

              <button className="rounded-full px-4 py-2 hover:bg-slate-100">
                Payroll
              </button>
            </nav>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="w-full sm:w-auto">
              <input
                type="text"
                placeholder="Search employees..."
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-2 shadow-sm">
              <span className="text-sm font-medium">Admin</span>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-white">
                <img
                  src="data:image/png;base64,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"
                  alt="Admin"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="grid min-h-[calc(100vh-88px)] grid-cols-1 gap-6 px-6 py-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="mb-5 text-base font-semibold text-slate-900">
              HRMS Menu
            </h3>

            <ul className="space-y-2 text-sm text-slate-600">
              {sidebarData.map((item) => (
                <li
                  key={item.label}
                  className="cursor-pointer rounded-2xl px-4 py-3 hover:bg-slate-50 hover:text-slate-900"
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </aside>

          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Panel;