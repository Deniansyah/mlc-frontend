import React from "react";

export default function DeleteModal({ onClose, onDelete }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-bold mb-4">Delete Label</h2>
        <p>Are you sure you want to remove this label?</p>
        <div className="flex justify-end mt-4">
          <button className="btn btn-ghost mr-2" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-error" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
