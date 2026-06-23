import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Employees() {
  let [empData, setEmpData] = useState({});
  let [error, setError] = useState({});
  let handleChange = (e) => {
    let { name, value } = e.target;
    setEmpData({ ...empData, [name]: value });
  };

  let empErrors = {};

  let handleValidate = (empData) => {
    if (!empData.empEmail) {
      empErrors.empEmail = "Email is required.";
    }
    if(!empData.empID){
      empErrors.empID = "Employee ID is required.";
    }
    if(!empData.empName){
      empErrors.empName = "Employee Name is required.";
    }
    if(!empData.empPhone){
      empErrors.empPhone = "Employee Phone Number is required.";
    }else if(empPhone.length!=10){
      empErrors.empPhone = "Employee Phone Number must be of 10 numbers.";
    }
    if(!empData.empDob){
      empErrors.empDob = "Employee Date of Birth is mandatory.";
    }
    if(!empData.empDesig){
      empErrors.empDesig = "Employee Designation is required.";
    }
    if(!empData.empSalary){
      empErrors.empSalary = "Please fill your current salary.";
    }
    if(!empData.empJoiningDate){
      empErrors.empJoiningDate = "Employee Joining date is required.";
    }
    if(!empData.empDept){
      empErrors.empDept = "Employee Department is required.";
    }
    setError(empErrors);
  };

  

  console.log(empData);

  return (
    //Html fragment
    <>
      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>
            <Dialog>
              <DialogTrigger className="border-2 border-blue-500 rounded-2xl p-2 bg-blue-300">Add Employee</DialogTrigger>
              <DialogContent className="p-6 h-150 scroll-smooth overflow-auto scrollbar-gutter-auto scrollbar-thumb-sky-200 scrollbar-track-sky-100">
                <DialogHeader>
                  <DialogTitle className="mb-4">
                    New to the organisation? Add yourself⭐
                  </DialogTitle>
                  <DialogDescription>
                    <div>
                      <label className="font-semibold text-black ">
                        Employee ID
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        placeholder=" Enter your Employee ID"
                        className="w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empID"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-black ">
                        Employee Name
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        placeholder=" Enter your Name"
                        className="w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empName"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-black ">
                        Employee Email
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        placeholder=" Enter your email."
                        className="w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empEmail"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-black ">
                        Employee Phone number
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        placeholder=" Enter your phone number."
                        className="w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empPhone"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-black ">
                        Employee Date of Birth
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="date"
                        placeholder=" Enter your DOB"
                        className="w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empDob"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-black ">
                        Employee Designation
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        placeholder=" Enter Employee designation"
                        className="w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empDesig"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-black ">
                        Employee Salary
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="number"
                        placeholder=" Enter your Salary."
                        className="w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empSalary"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-black ">
                        Employee Joining Date.
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="date"
                        placeholder=" Enter Employee Joining Date"
                        className="w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empJoiningDate"
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="font-semibold text-black ">
                        Employee Department
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        placeholder=" Enter department"
                        className="w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empDept"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex justify-end gap-3 mt-5">
                      <button className="px-5 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors">
                        Close
                      </button>
                      <button className="px-5 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors">
                        Add
                      </button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </CardAction>
        </CardHeader>
        <CardContent>
          <p>
            <table class="w-full border-collapse border border-gray-400 ...">
              <thead>
                <tr>
                  <th class="border border-gray-300 ...">Emp ID</th>
                  <th class="border border-gray-300 ...">Emp Name</th>
                  <th class="border border-gray-300 ...">Emp Email</th>
                  <th class="border border-gray-300 ...">Emp Phone-number</th>
                  <th class="border border-gray-300 ...">Emp DOB</th>
                  <th class="border border-gray-300 ...">Emp Designation</th>
                  <th class="border border-gray-300 ...">Emp Salary</th>
                  <th class="border border-gray-300 ...">Emp Joining Date</th>
                  <th class="border border-gray-300 ...">Emp Department</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 ...">{empData.empID}</td>
                  <td class="border border-gray-300 ...">{empData.empName}</td>
                  <td class="border border-gray-300 ...">{empData.empEmail}</td>
                  <td class="border border-gray-300 ...">{empData.empPhone}</td>
                  <td class="border border-gray-300 ...">{empData.empDob}</td>
                  <td class="border border-gray-300 ...">{empData.empDesig}</td>
                  <td class="border border-gray-300 ...">{empData.empSalary}</td>
                  <td class="border border-gray-300 ...">{empData.empJoiningDate}</td>
                  <td class="border border-gray-300 ...">{empData.empDept}</td>
                </tr>
              </tbody>
            </table>
          </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
}
export default Employees;
