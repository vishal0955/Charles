import React, { useState } from 'react';

const CreateDealModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    dealName: '',
    pipeline: '',
    dealStage: '',
    amount: '',
    closeDate: '',
    dealOwner: '',
    dealType: '',
    priority: '',
    contact: '',
    company: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[500px] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Create Deal</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="text-2xl">×</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Deal name*</label>
            <input
              type="text"
              name="dealName"
              value={formData.dealName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Pipeline*</label>
            <select
              name="pipeline"
              value={formData.pipeline}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            >
              <option value="">Select pipeline</option>
              <option value="deals">Deals pipeline</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Deal stage*</label>
            <select
              name="dealStage"
              value={formData.dealStage}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              required
            >
              <option value="">Select stage</option>
              <option value="appointment">Appointment Scheduled</option>
              <option value="qualified">Qualified</option>
              <option value="presentation">Presentation Scheduled</option>
              <option value="decision">Decision Maker</option>
              <option value="closed">Closed Won</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Close date</label>
            <input
              type="date"
              name="closeDate"
              value={formData.closeDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Deal owner</label>
            <select
              name="dealOwner"
              value={formData.dealOwner}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select owner</option>
              <option value="viktor">Viktor Suzuki</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Deal type</label>
            <select
              name="dealType"
              value={formData.dealType}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select type</option>
              <option value="new">New Business</option>
              <option value="existing">Existing Business</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            >
              <option value="">Select priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Search"
            />
            <div className="mt-1 text-sm text-gray-500 flex items-center">
              <input type="checkbox" className="mr-2" /> Add missing activity from this contact
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Search"
            />
            <div className="mt-1 text-sm text-gray-500 flex items-center">
              <input type="checkbox" className="mr-2" /> Add missing activity from this company
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="inv-filter-button"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inv-new-button"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDealModal;
