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
  let [openModal, setOpenModal] = useState(false);
  let [openEditModal, setOpenEditModal] = useState(false);
  let [empFormData, setEmpFormData] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;
    setEmpData({ ...empData, [name]: value });
  };

  let empErrors = {};

  let handleValidate = (empData) => {
    if (!empData.empEmail) {
      empErrors.empEmail = "Email is required.";
    }
    if (!empData.empID) {
      empErrors.empID = "Employee ID is required.";
    }
    if (!empData.empName) {
      empErrors.empName = "Employee Name is required.";
    }
    if (!empData.empPhone) {
      empErrors.empPhone = "Employee Phone Number is required.";
    } else if (empPhone.length != 10) {
      empErrors.empPhone = "Employee Phone Number must be of 10 numbers.";
    }
    if (!empData.empDob) {
      empErrors.empDob = "Employee Date of Birth is mandatory.";
    }
    if (!empData.empDesig) {
      empErrors.empDesig = "Employee Designation is required.";
    }
    if (!empData.empSalary) {
      empErrors.empSalary = "Please fill your current salary.";
    }else if (empSalary > 5000) {
      empErrors.empSalary = "Invalid Salary";
    }
    if (!empData.empJoiningDate) {
      empErrors.empJoiningDate = "Employee Joining date is required.";
    }
    if (!empData.empDept) {
      empErrors.empDept = "Employee Department is required.";
    }
    setError(empErrors);
  };

  console.log(empData);

  let handleSubmit = () =>{
    setEmpFormData(empData);
    setOpenModal(false);
  };

  let handleEditSubmit = () =>{
    setEmpFormData(empData);
    setOpenEditModal(false);
  };

  return (
    //Html fragment
    <>
      <Card>
        <CardHeader>
          <CardTitle>Employees</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>
            <Dialog open={openModal} onOpenChange={() => setOpenModal(true)}>
              <DialogTrigger className="border-2 border-blue-500 rounded-2xl p-2 bg-blue-300">
                Add Employee
              </DialogTrigger>
            </Dialog>
            <Dialog open={openModal}>
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empDept"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex justify-end gap-3 mt-5">
                      <button
                        className="px-5 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
                        onClick={() => {
                          setOpenModal(false);
                        }}
                      >
                        Close
                      </button>
                      <button className="px-5 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors" onClick={handleSubmit}>
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
          {/* Table JSX */}
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
                  <th class="border border-gray-300 ...">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border border-gray-300 ...">{empFormData.empID}</td>
                  <td class="border border-gray-300 ...">{empFormData.empName}</td>
                  <td class="border border-gray-300 ...">{empFormData.empEmail}</td>
                  <td class="border border-gray-300 ...">{empFormData.empPhone}</td>
                  <td class="border border-gray-300 ...">{empFormData.empDob}</td>
                  <td class="border border-gray-300 ...">{empFormData.empDesig}</td>
                  <td class="border border-gray-300 ...">
                    {empFormData.empSalary}
                  </td>
                  <td class="border border-gray-300 ...">
                    {empFormData.empJoiningDate}
                  </td>
                  <td class="border border-gray-300 ...">{empFormData.empDept}</td>
                  <td class="border border-gray-300 ...">
                    <button>
                      <Dialog
                        open={openEditModal}
                        onOpenChange={() => setOpenEditModal(true)}
                      >
                        <DialogTrigger className="border-2 border-blue-500 rounded-2xl p-2 bg-blue-300">
                          Edit
                        </DialogTrigger>
                      </Dialog>
                    </button>
                    <button>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      
      {/* Edit Employee Record Modal */}
      <Dialog open={openEditModal}>
              <DialogContent className="p-6 h-150 scroll-smooth overflow-auto scrollbar-gutter-auto scrollbar-thumb-sky-200 scrollbar-track-sky-100" >
                <DialogHeader>
                  <DialogTitle className="mb-4">
                    Want to change details ? Do it here☕
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empID"
                        defaultValue={empFormData.empID}
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empName"
                        defaultValue={empFormData.empName}
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empEmail"
                        defaultValue={empFormData.empEmail}
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empPhone"
                        defaultValue={empFormData.empPhone}
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empDob"
                        defaultValue={empFormData.empDob}
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empDesig"
                        defaultValue={empFormData.empDesig}
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empSalary"
                        defaultValue={empFormData.empSalary}
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empJoiningDate"
                        defaultValue={empFormData.empJoiningDate}
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
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="empDept"
                        defaultValue={empFormData.empDept}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex justify-end gap-3 mt-5">
                      <button
                        className="px-5 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
                        onClick={() => {
                          setOpenEditModal(false);
                        }}
                      >
                        Close
                      </button>
                      <button className="px-5 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors" onClick={handleEditSubmit}>
                        Update
                      </button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
    </>
  );
}
export default Employees;
