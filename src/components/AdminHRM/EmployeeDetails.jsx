

import React, { useEffect } from "react";
import { FaPenToSquare } from "react-icons/fa6";
import * as echarts from "echarts";
import { useParams, Link } from "react-router-dom";

const EmployeeDetails = () => {
  const { id } = useParams(); // URL se ID fetch kar rahe hai
  const numericId = Number(id.replace("EMP", "")); // "EMP001" -> 1
  // console.log("Converted Numeric ID:", numericId);
  // console.log(id);
  // console.log("Type of ID:", typeof id);

  // Dummy Employees Data
  const employees = {
    1: {
      name: "John Doe",
      role: "Senior Developer",
      email: "john.doe@company.com",
      phone: "+1 (555) 123-4567",
      dob: "15 March 1985",
      gender: "Male",
      nationality: "American",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    2: {
      name: "Jane Smith",
      role: "HR Manager",
      email: "jane.smith@company.com",
      phone: "+1 (555) 987-6543",
      dob: "22 July 1990",
      gender: "Female",
      nationality: "Canadian",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    3: {
      name: "Robert Johnson",
      role: "Finance Analyst",
      email: "robert.johnson@company.com",
      phone: "+1 (555) 246-8135",
      dob: "5 September 1983",
      gender: "Male",
      nationality: "British",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  };
  // console.log("Employees Data:", employees);
  // console.log("Type of Employees:", typeof employees);
  const employee = employees[numericId]; // ID ke basis pe correct data fetch
  // console.log("employee found", employee);

  useEffect(() => {
    if (!employee) return;

    // Initialize Department Chart
    const departmentChart = echarts.init(
      document.getElementById("departmentChart")
    );
    departmentChart.setOption({
      animation: false,
      tooltip: { trigger: "item" },
      legend: { bottom: "0", left: "center" },
      series: [
        {
          type: "pie",
          radius: ["40%", "70%"],
          center: ["50%", "40%"],
          avoidLabelOverlap: false,
          itemStyle: { borderRadius: 10, borderColor: "#fff", borderWidth: 2 },
          label: { show: false },
          labelLine: { show: false },
          data: [
            { value: 72, name: "IT" },
            { value: 48, name: "HR" },
            { value: 36, name: "Finance" },
            { value: 52, name: "Marketing" },
            { value: 40, name: "Operations" },
          ],
        },
      ],
    });

    // Initialize Attendance Chart
    const attendanceChart = echarts.init(
      document.getElementById("attendanceChart")
    );
    attendanceChart.setOption({
      animation: false,
      tooltip: { trigger: "axis" },
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      },
      yAxis: { type: "value" },
      series: [
        {
          name: "Attendance Rate",
          type: "line",
          smooth: true,
          data: [88, 92, 85, 89, 90, 87],
          areaStyle: {},
        },
      ],
    });

    return () => {
      departmentChart.dispose();
      attendanceChart.dispose();
    };
  }, [employee]);

  if (!employee) {
    return <p className="text-center text-red-500">Employee Not Found</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-7xl">
        {/* Employee Profile Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-start">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              className="w-32 h-32 rounded-lg object-cover mr-8 shadow-lg ring-4 ring-gray-100"
              alt="Employee"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-1">
                    john Doe
                  </h1>
                  <p className="text-gray-600 text-lg mb-2">Senior Developer</p>
                  <div className="flex items-center mt-2">
                    <span className="px-4 py-1.5 text-sm font-medium text-green-800 bg-green-100 rounded-full shadow-sm">
                      Active
                    </span>
                    <span className="ml-4 text-sm text-gray-500">#EMP001</span>
                  </div>
                </div>
                <button className="px-4 py-2.5 text-white bg-gray-800 border border-black rounded-lg hover:bg-black transition-colors duration-200 font-medium">
                  <FaPenToSquare className="mr-2 inline" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <a
                href="#"
                className="px-6 py-4 border-b-2 border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200"
              >
                Personal Details
              </a>
              <Link
                to={"/workdetails"}
                className="px-6 py-4 text-gray-500 hover:text-gray-700"
              >
                Work Details
              </Link>
              <Link
                to={"/document"}
                className="px-6 py-4 text-gray-500 hover:text-gray-700"
              >
                Documents
              </Link>
              <Link
                to={"/attendance"}
                className="px-6 py-4 text-gray-500 hover:text-gray-700"
              >
                Attendance & Leave
              </Link>
            </nav>
          </div>

          {/* Personal Details */}
          <div className="p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <DetailItem label="Full Name" value="John Doe" />
                  <DetailItem label="Email" value="john.doe@company.com" />
                  <DetailItem label="Phone" value="+1 (555) 123-4567" />
                  <DetailItem label="Date of Birth" value="15 March 1985" />
                </div>
                <div className="space-y-4">
                  <DetailItem label="Gender" value="Male" />
                  <DetailItem label="Nationality" value="American" />
                  <DetailItem label="Marital Status" value="Married" />
                  <DetailItem label="Blood Group" value="O+" />
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <DetailItem
                      label="Address"
                      value="123 Main Street, Apt 4B, New York, NY 10001"
                    />
                    <DetailItem
                      label="Emergency Contact"
                      value="Jane Doe (Spouse) - +1 (555) 987-6543"
                    />
                  </div>
                  <div className="space-y-4">
                    <DetailItem
                      label="Permanent Address"
                      value="456 Oak Avenue, Cleveland, OH 44113"
                    />
                    <DetailItem
                      label="Secondary Emergency Contact"
                      value="Robert Doe (Father) - +1 (555) 246-8135"
                    />
                  </div>
                </div>
              </div>

              {/* Charts */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Department Overview
                  </h3>
                  <div id="departmentChart" className="w-full h-64"></div>
                </div>
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Attendance Overview
                  </h3>
                  <div id="attendanceChart" className="w-full h-64"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <p className="text-gray-900 font-medium">{value}</p>
  </div>
);

export default EmployeeDetails;
