// Create a SalesOverview Component: The main container.

// Create Reusable Components:

// StatCard: For displaying statistics (Outstanding, Draft, Overdue, etc.).

// SummaryCard: For Awaiting Approval, Draft, etc.

// Chart: To render the ECharts graph.

// DropdownButton: For the "+ New" button with a dropdown.

// SearchInput: For the search bar.

import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import { Link } from "react-router-dom";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="!rounded-button bg-blue-600 text-white px-4 py-2 flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="mr-2">+ New</span>
        <i className="fas fa-chevron-down text-xs"></i>
      </button>

      {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
          <ul className="py-2">
            <li >
            
                <Link to='/crm/quotes'   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
             
                <i className="fas fa-file-invoice text-gray-400"></i> Qoutes
                
                </Link>
            </li>
            <li>
              <Link to="/crm/quotes"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
              >
                <i className="fas fa-sticky-note text-gray-400"></i> Statements
              </Link>
            </li>
            <li>
                          <Link to="/crm/Payment" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                              <i class="fas fa-receipt text-gray-400"></i> Payment Link
                          </Link>
                      </li>
                      <li>
                          <Link to="/crm/invoices" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                              <i class="fas fa-wallet text-gray-400"></i> Invoice
                          </Link>
                      </li>
                    
                      {/* <li>
                          <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-t border-gray-200">
                              Add contact group
                          </a>
                      </li> */}
          </ul>
        </div>

      )}
    </div>
  );
};

const SearchInput = () => (
  <div className="relative">
    <input
      type="text"
      placeholder="Search"
      className="!rounded-button pl-10 pr-4 py-2 border border-gray-300 focus:ring-custom focus:border-custom"
    />
    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
  </div>
);

const StatCard = ({ title, amount, change, changeType }) => {
  const changeColor = changeType === "down" ? "text-red-500" : "text-green-500";
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-semibold">{amount}</p>
        </div>
      </div>
      <p className={`text-sm ${changeColor}`}>
        <i className={`fas fa-arrow-${changeType} mr-1`}></i>
        {change} from last month
      </p>
    </div>
  );
};

const SummaryCard = ({ title, amount }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
    <p className="text-sm text-gray-500 mb-2">{title}</p>
    <p className="text-2xl font-semibold">{amount}</p>
  </div>
);

const Chart = () => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("timeline-chart"));
    const option = {
      animation: false,
      grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
      xAxis: { type: "category", data: ["Older", "Sep", "Oct", "Nov", "Dec", "Future"] },
      yAxis: { type: "value", axisLabel: { formatter: "£{value}" } },
      series: [{ data: [120, 200, 150, 80, 70, 110], type: "bar", itemStyle: { color: "#00B5D8" } }]
    };
    chart.setOption(option);
  }, []);

  return <div id="timeline-chart" className="h-64"></div>;
};

const SalesOverview = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-start items-center mb-8 gap-4">
        <h1 className="text-2xl font-semibold text-gray-900">Sales overview</h1>
        <div className="flex items-center space-x-4 ml-4">
          <DropdownButton />
          <button className="!rounded-button bg-white border border-gray-300 px-4 py-2">
            Send Statements
          </button>
          <button className="!rounded-button bg-white border border-gray-300 px-4 py-2">
            Import
          </button>
          <SearchInput />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard title="Outstanding" amount="$3,237.94" change="4.46%" changeType="down" />
        <StatCard title="Draft" amount="$3,237.94" change="12%" changeType="down" />
        <StatCard title="Total Overdue" amount="$3,237.94" change="15.46%" changeType="down" />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6 mb-8">
        <SummaryCard title="Awaiting Approval" amount="£1234" />
        <SummaryCard title="Draft" amount="£1234" />
        <SummaryCard title="Awaiting Payment (36)" amount="£1234" />
        <SummaryCard title="Overdue (19)" amount="£1234" />
      </div>

      {/* Charts & Data */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Money coming in</h3>
          <Chart />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Customers owing the most</h3>
          <div className="space-y-4">
            {["Client x", "Client y", "Client z", "Client a", "Client b"].map((client) => (
              <div key={client} className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{client}</span>
                <span className="font-medium">£123</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quotes */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium">Quotes</h3>
          <a href="#" className="text-custom hover:text-custom-dark text-sm">
            See all
          </a>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {["Draft", "Sent", "Accepted", "Expired"].map((status) => (
            <SummaryCard key={status} title={status} amount="£1234" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;

// Install dependencies: npm install echarts

// Import and render <SalesOverview /> in your React project