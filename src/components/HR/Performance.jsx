import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const PerformanceOverview = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png"
                  alt="Logo"
                />
              </div>
              <div className="ml-4 text-xl font-semibold text-gray-900">
                My Performance
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white">
                <i className="fas fa-search"></i>
              </button>
              <button className="text-gray-300 hover:text-white">
                <i className="fas fa-bell"></i>
              </button>
              <button className="text-gray-300 hover:text-white">
                <i className="fas fa-ellipsis-v"></i>
              </button>
              <div className="flex items-center">
                <span className="text-gray-300 mr-2">Your Company Name</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://creatie.ai/ai/api/search-image?query=professional headshot"
                  alt="Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-full"
                src="https://creatie.ai/ai/api/search-image?query=professional headshot"
                alt="Wade Wilson"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">Wade Wilson</h1>
                <div className="flex items-center mt-1">
                  <span className="px-2 py-1 text-xs font-medium bg-green-500 text-white rounded-full">
                    Active
                  </span>
                  <span className="ml-2 text-gray-400">
                    Designer (Product) • Product • People Product • HR • UK – Remote
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="!rounded-button bg-gray-100 text-gray-700 px-4 py-2 flex items-center hover:bg-gray-200">
                <i className="fas fa-comment-alt mr-2"></i>
                Add feedback
              </button>
              <button className="!rounded-button bg-gray-100 text-gray-700 px-3 py-2 hover:bg-gray-200">
                <i className="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8 border-t border-gray-200 pt-4">
            {["Profile", "Performance", "Goals • 78%", "Roadmap", "Compensation", "Talent • 4 • 52%", "Documents", "Time off • 1"].map((item, index) => (
              <a key={index} href="#" className="text-gray-500 hover:text-gray-900">
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-gray-900">Q4 2023</div>
                <div className="text-green-500 font-medium">Exceeding</div>
              </div>
              <div className="text-gray-400">Overall grade</div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-9">
            <div className="bg-white rounded-lg p-6 mb-8 border border-gray-200">
              <div className="grid grid-cols-4 gap-8">
                {[
                  { icon: "fa-chart-line", title: "Performance Score", value: "85/100", bg: "bg-green-500" },
                  { icon: "fa-tasks", title: "Tenure", value: "2.5 years", bg: "bg-blue-500" },
                  { icon: "fa-trophy", title: "Reviews Completed", value: "10 total", bg: "bg-purple-500" },
                  { icon: "fa-star", title: "Rating", value: "Exceeding", bg: "bg-yellow-500" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center text-white`}>
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div className="ml-4">
                      <div className="text-gray-900 font-medium">{item.title}</div>
                      <div className="text-gray-400 text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Analytics */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Performance Analytics</h2>
                  <div className="text-gray-400">Current Quarter</div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="!rounded-button bg-custom text-white px-4 py-2">
                    <i className="fas fa-download mr-2"></i>Export Report
                  </button>
                  <button className="!rounded-button bg-gray-100 text-gray-700 px-3 py-2">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>
              </div>

              {/* KPIs */}
              <div className="bg-gray-100 rounded-lg p-4">
                {[
                  { icon: "fa-bullseye", title: "Leadership Skills", value: "90%", color: "text-green-500" },
                  { icon: "fa-users", title: "Project Delivery", value: "85%", color: "text-blue-500" },
                  { icon: "fa-lightbulb", title: "Technical Skills", value: "88%", color: "text-yellow-500" },
                  { icon: "fa-chart-pie", title: "Communication", value: "87%", color: "text-purple-500" },
                ].map((kpi, index) => (
                  <div key={index} className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <i className={`fas ${kpi.icon} ${kpi.color} mr-2`}></i>
                      <span className="text-gray-900 font-medium">{kpi.title}</span>
                    </div>
                    <span className="text-gray-900">{kpi.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOverview;
