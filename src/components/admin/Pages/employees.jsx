import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import axios from "axios";

let baseURL = import.meta.env.VITE_BASE_URL;

function Employees() {
  let [empData, setEmpData] = useState({});
  let [error, setError] = useState({});
  let [openModal, setOpenModal] = useState(false);
  let [openEditModal, setOpenEditModal] = useState(false);
  let [empFormData, setEmpFormData] = useState([{}]);

  let [filterData, setFilterData] = useState([{}]);

  let [editData, setEditData] = useState({});

  //let [isDelete, setIsDelete]

  let handleChange = (e) => {
    let { name, value } = e.target;
    setEmpData({ ...empData, [name]: value });
  };

  let handleValidate = (empData) => {
    let empErrors = {};

    if (!empData.email) {
      empErrors.email = "Email is required.";
    }
    if (!empData.ID) {
      empErrors.ID = "Employee ID is required.";
    }
    if (!empData.name) {
      empErrors.name = "Employee Name is required.";
    }
    if (!empData.phone) {
      empErrors.phone = "Employee Phone Number is required.";
    } else if (empData.phone.length != 10) {
      empErrors.phone = "Employee Phone Number must be of 10 numbers.";
    }
    if (!empData.DOB) {
      empErrors.DOB = "Employee Date of Birth is mandatory.";
    }
    // if (!empData.empDesig) {
    //   empErrors.empDesig = "Employee Designation is required.";
    // }
    if (!empData.salary) {
      empErrors.salary = "Please fill your current salary.";
    } else if (empData.salary < 5000) {
      empErrors.salary = "Invalid Salary";
    }
    // if (!empData.empJoiningDate) {
    //   empErrors.empJoiningDate = "Employee Joining date is required.";
    // }
    if (!empData.address) {
      empErrors.address = "Employee Address is required.";
    }

    setError(empErrors);
    return Object.keys(empErrors).length;
  };

  let handleSubmit = () => {
    let validate = handleValidate(empData);

    if (validate === 0) {
      axios
        .post(`${baseURL}/post/employee`, empData)
        .then((res) => {
          let { success, message } = res.data;

          if (success) {
            alert(message);
            setOpenModal(false);

            setEmpData({});
            setError({});
          }
        })
        .catch((err) => {
          let { message } = err.response.data;
          alert(message);
        });
    }
  };

  // let handleEditSubmit = () => {
  //   setEmpFormData(empData);
  //   setOpenEditModal(false);
  // };

  let handleEditClick = (_id) => {
    let id = editData._id;
    axios
      .put(`${baseURL}/update/byID/${id}`, editData)
      .then((res) => {
        let { success, message } = res.data;
        if (success) {
          alert(message);
          setOpenEditModal(false);
          loadEmployee();
        }
      })
      .catch((err) => {
        let { success, message } = err.response.data;
        if (success === false) {
          alert(message);
        }
      });
  };

  const loadEmployee = () => {
    axios
      .get(`${baseURL}/get/employee`)
      .then((res) => {
        //backend response data -> res
        let { success, message, data } = res.data;
        setEmpFormData(data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  console.log("Filter data", filterData);

  useEffect(() => {
    loadEmployee();
  }, [empData]);

  let handleEditChange = (e) => {
    let { name, value } = e.target;
    setEditData({ ...filterData[0], [name]: value });
  };

  let handleDelete = (_id) => {
    axios
      .delete(`${baseURL}/delete/byID/${_id}`)
      .then((res) => {
        let { success, message } = res.data;
        if (success) {
          alert(message);
          loadEmployee();
        }
      })
      .catch((err) => {
        alert(message);
        console.log(err.response.data);
      });
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
                        name="ID"
                        onChange={handleChange}
                      />
                      {error && <p className="text-red-500 mt-1">{error.ID}</p>}
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
                        name="name"
                        onChange={handleChange}
                      />
                      {error && (
                        <p className="text-red-500 mt-1">{error.name}</p>
                      )}
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
                        name="email"
                        onChange={handleChange}
                      />
                      {error && (
                        <p className="text-red-500 mt-1">{error.email}</p>
                      )}
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
                        name="phone"
                        onChange={handleChange}
                      />
                      {error && (
                        <p className="text-red-500 mt-1">{error.phone}</p>
                      )}
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
                        name="DOB"
                        onChange={handleChange}
                      />
                      {error && (
                        <p className="text-red-500 mt-1">{error.DOB}</p>
                      )}
                    </div>
                    <div>
                      <label className="font-semibold text-black ">
                        Employee Address
                      </label>
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        placeholder=" Enter Employee address"
                        className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
                        name="address"
                        onChange={handleChange}
                      />
                      {error && (
                        <p className="text-red-500 mt-1">{error.address}</p>
                      )}
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
                        name="salary"
                        onChange={handleChange}
                      />
                      {error && (
                        <p className="text-red-500 mt-1">{error.salary}</p>
                      )}
                    </div>
                    {/* <div>
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
                    </div> */}
                    {/* <div>
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
                    </div> */}
                    <div className="flex justify-end gap-3 mt-5">
                      <button
                        className="px-5 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
                        onClick={() => {
                          setOpenModal(false);
                          setError({});
                        }}
                      >
                        Close
                      </button>
                      <button
                        className="px-5 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
                        onClick={handleSubmit}
                      >
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
                  <th class="border border-gray-300 ...">Emp Address</th>
                  <th class="border border-gray-300 ...">Emp Salary</th>
                  {/* <th class="border border-gray-300 ...">Emp Joining Date</th> */}
                  {/* <th class="border border-gray-300 ...">Emp Department</th> */}
                  <th class="border border-gray-300 ...">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* //map function used to generate a row every time data is inserted. */}
                {empFormData.map((item) => {
                  return (
                    <>
                      <tr>
                        <td class="border border-gray-300 ...">{item.ID}</td>
                        <td class="border border-gray-300 ...">{item.name}</td>
                        <td class="border border-gray-300 ...">{item.email}</td>
                        <td class="border border-gray-300 ...">{item.phone}</td>
                        <td class="border border-gray-300 ...">{item.DOB}</td>
                        <td class="border border-gray-300 ...">
                          {item.address}
                        </td>
                        <td class="border border-gray-300 ...">
                          {item.salary}
                        </td>
                        {/* <td class="border border-gray-300 ...">
                    {empFormData.empJoiningDate}
                  </td> */}
                        {/* <td class="border border-gray-300 ...">{empFormData.empDept}</td> */}
                        <td class="border border-gray-300 ...">
                          <button>
                            <Dialog
                              open={openEditModal}
                              onOpenChange={() => {
                                setOpenEditModal(true);
                                setFilterData(
                                  empFormData.filter(
                                    (data) => data._id === item._id,
                                  ),
                                );
                              }}
                            >
                              <DialogTrigger className="border-1 border-blue-600 rounded-md p-2 bg-blue-200">
                                Edit
                              </DialogTrigger>
                            </Dialog>
                          </button>
                          <button
                            className="border-1 border-red-600 rounded-md p-2 bg-red-200"
                            onClick={() => handleDelete(item._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
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
        <DialogContent className="p-6 h-150 scroll-smooth overflow-auto scrollbar-gutter-auto scrollbar-thumb-sky-200 scrollbar-track-sky-100">
          <DialogHeader>
            <DialogTitle className="mb-4">
              Want to change details ? Do it here☕
            </DialogTitle>
            <DialogDescription>
              <div>
                <label className="font-semibold text-black ">Employee ID</label>
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder=" Enter your Employee ID"
                  className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
                  name="ID"
                  defaultValue={filterData[0].ID}
                  onChange={handleEditChange}
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
                  name="name"
                  defaultValue={filterData[0].name}
                  onChange={handleEditChange}
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
                  name="email"
                  defaultValue={filterData[0].email}
                  onChange={handleEditChange}
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
                  name="phone"
                  defaultValue={filterData[0].phone}
                  onChange={handleEditChange}
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
                  name="DOB"
                  defaultValue={filterData[0].DOB}
                  onChange={handleEditChange}
                />
              </div>
              <div>
                <label className="font-semibold text-black ">
                  Employee Address
                </label>
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder=" Enter Employee designation"
                  className="pl-2 w-full h-8 border-2 border-black rounded-md mt-2 "
                  name="address"
                  defaultValue={filterData[0].address}
                  onChange={handleEditChange}
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
                  name="salary"
                  defaultValue={filterData[0].salary}
                  onChange={handleEditChange}
                />
              </div>
              {/* <div>
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
              </div> */}
              {/* <div>
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
              </div> */}
              <div className="flex justify-end gap-3 mt-5">
                <button
                  className="px-5 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors"
                  onClick={() => {
                    setOpenEditModal(false);
                  }}
                >
                  Close
                </button>
                <button
                  className="px-5 py-2 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
                  onClick={handleEditClick}
                >
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
