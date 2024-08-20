import React from "react";

export default function LabelModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Create New Label</h3>
        <input type="text" placeholder="Name" className="input input-bordered w-full mb-3" />
        <input type="text" placeholder="Description" className="input input-bordered w-full mb-3" />
        <select className="select select-bordered w-full mb-3">
          <option disabled selected>
            Select Category
          </option>
          <option>Category 1</option>
          <option>Category 2</option>
          <option>Category 3</option>
        </select>
        <div className="flex justify-center gap-3">
          <button onClick={onClose} className="btn">
            Cancel
          </button>
          <button className="btn btn-warning">Create</button>
        </div>
      </div>
    </div>
  );
}
