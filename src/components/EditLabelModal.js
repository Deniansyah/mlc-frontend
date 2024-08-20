// src/components/EditLabelModal.js
"use client";
import React, { useState } from "react";

export default function EditLabelModal({ onClose, labelData }) {
  const [name, setName] = useState(labelData.name || "");
  const [description, setDescription] = useState(labelData.description || "");

  const handleSave = () => {
    // Implement the logic to save the changes here
    console.log("Label updated:", { name, description });
    onClose(); // Close the modal after saving
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Edit Label</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" className="input input-bordered w-full" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea className="textarea textarea-bordered w-full" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="flex justify-end gap-2">
          <button className="btn" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-warning" onClick={handleSave}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
