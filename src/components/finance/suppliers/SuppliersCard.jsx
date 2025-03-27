import React from 'react'

const SuppliersCard = () => {
  return ( <div className="min-h-screen">
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-arrow-left" />
              <span className="ml-2">Suppliers</span>
            </a>
            <h1 className="text-lg font-semibold">supplier-name.com</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="!rounded-button px-4 py-2 text-gray-700 hover:bg-gray-100">
              Actions <i className="fas fa-chevron-down ml-2" />
            </button>
            <button className="!rounded-button px-4 py-2 text-gray-700 hover:bg-gray-100">
              <i className="fas fa-cog" />
              <span className="ml-2">Customize record</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    <div className="max-w-8xl mx-auto px-4 py-6">
      <div className="flex gap-6">
        <main className="flex-1">
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="border-b border-gray-200">
              <div className="flex space-x-4 p-4">
                <button className="!rounded-button px-4 py-2 hover:bg-gray-100">
                  <i className="far fa-note-sticky" />
                  <span className="ml-2">Note</span>
                </button>
                <button className="!rounded-button px-4 py-2 hover:bg-gray-100">
                  <i className="far fa-envelope" />
                  <span className="ml-2">Email</span>
                </button>
                <button className="!rounded-button px-4 py-2 hover:bg-gray-100">
                  <i className="fas fa-phone" />
                  <span className="ml-2">Call</span>
                </button>
                <button className="!rounded-button px-4 py-2 hover:bg-gray-100">
                  <i className="far fa-calendar" />
                  <span className="ml-2">Task</span>
                </button>
                <button className="!rounded-button px-4 py-2 hover:bg-gray-100">
                  <i className="fas fa-users" />
                  <span className="ml-2">Meeting</span>
                </button>
                <button className="!rounded-button px-4 py-2 hover:bg-gray-100">
                  <i className="fas fa-ellipsis-h" />
                  <span className="ml-2">More</span>
                </button>
              </div>
            </div>
            <div className="p-6">
              <nav className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium rounded-md bg-custom text-gray-900"
                >
                  Overview
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Activities
                </a>
                {/* <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Intelligence
                </a> */}
              </nav>
              <div className="space-y-6">
                <section>
                  <h3 className="text-lg font-medium mb-4">Supplier Summary</h3>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md"
                    rows={4}
                    placeholder="Add supplier notes here..."
                    defaultValue={""}
                  />
                </section>
                <section>
                  <h3 className="text-lg font-medium mb-4">Supplier Profile</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Supplier Status</p>
                      <p className="mt-1">Active Supplier</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Categories</p>
                      <p className="mt-1">No products yet</p>
                    </div>
                  </div>
                </section>
                <section>
                  <h3 className="text-lg font-medium mb-4">
                    Supplier Research Insights
                  </h3>
                  <div className="flex space-x-4">
                    <button className="!rounded-button flex items-center px-4 py-2 border border-gray-300 hover:bg-gray-50">
                      <i className="fas fa-search mr-2" />
                      Retrieve supplier info
                    </button>
                    <button className="!rounded-button flex items-center px-4 py-2 border border-gray-300 hover:bg-gray-50">
                      <i className="fas fa-industry mr-2" />
                      Find similar suppliers
                    </button>
                    <button className="!rounded-button flex items-center px-4 py-2 border border-gray-300 hover:bg-gray-50">
                      <i className="fas fa-boxes mr-2" />
                      View product catalog
                    </button>
                  </div>
                </section>
                <section>
                  <h3 className="text-lg font-medium mb-4">
                    Supply Chain Metrics
                  </h3>
                  <div className="flex space-x-4 mb-4">
                    <select className="!rounded-button border border-gray-300 px-4 py-2">
                      <option>Delivery Performance</option>
                      <option>Monthly Orders</option>
                      <option>Quality Metrics</option>
                    </select>
                    <select className="!rounded-button border border-gray-300 px-4 py-2">
                      <option>All data</option>
                      <option>Last 30 days</option>
                      <option>Last 90 days</option>
                    </select>
                  </div>
                  <div className="h-64 bg-gray-50 rounded-lg border border-gray-200" />
                </section>
              </div>
            </div>
          </div>
        </main>
        <aside className="w-80">
          <div className="bg-white rounded-lg shadow">
            <div className="p-4 border-b border-gray-200">
              <h2 className="font-medium">Supplier Overview</h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex justify-between items-center">
                <span>Suppliers (0)</span>
                <button className="text-custom hover:text-custom-dark">
                  + Add
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span>Contacts (1)</span>
                <button className="text-custom hover:text-custom-dark">
                  + Add
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span>Leads (0)</span>
                <button className="text-custom hover:text-custom-dark">
                  + Add
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span>Deals (0)</span>
                <button className="text-custom hover:text-custom-dark">
                  + Add
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span>Tickets (2)</span>
                <button className="text-custom hover:text-custom-dark">
                  + Add
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span>Invoices (0)</span>
                <button className="text-custom hover:text-custom-dark">
                  + Add
                </button>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span>Health Score</span>
                  <span className="text-green-500">Good</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Lead Score</span>
                  <span className="text-yellow-500">Medium</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
  )
}

export default SuppliersCard


