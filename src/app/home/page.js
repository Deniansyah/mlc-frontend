"use client";
import { useState } from "react";
import { MdAdd, MdOutlineInfo } from "react-icons/md";
import LabelModal from "@/components/LabelModal";
import CategoryModal from "@/components/CategoryModal";
import EditLabelModal from "@/components/EditLabelModal";
import DeleteModal from "@/components/DeleteModal";
import CategoryDetailModal from "@/components/CategoryDetailModal";

export default function Home() {
  const [showLabelModal, setShowLabelModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showEditLabelModal, setShowEditLabelModal] = useState(false);
  const [currentLabel, setCurrentLabel] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const [showCategoryDetailModal, setShowCategoryDetailModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleLabelModal = () => setShowLabelModal(!showLabelModal);
  const handleCategoryModal = () => setShowCategoryModal(!showCategoryModal);
  const handleEditLabelModal = (label) => {
    setCurrentLabel(label);
    setShowEditLabelModal(true);
  };

  const handleDeleteModal = (label) => {
    setSelectedLabel(label);
    setShowDeleteModal(true);
  };
  const handleDelete = () => {
    // Logika untuk menghapus label
    console.log("Menghapus label:", selectedLabel);
    setShowDeleteModal(false);
  };

  const handleCategoryDetailModal = (category) => {
    setCurrentCategory(category);
    setShowCategoryDetailModal(true);
  };

  return (
    <div className="mx-5 my-10">
      <h1 className="text-3xl text-warning font-bold">Halo, [username]</h1>
      <p className="mb-10">Manage Labels and Categories.</p>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Labels</h2>
        <button className="flex justify-center items-center btn btn-warning bg-warning p-3 rounded-xl text-white" onClick={handleLabelModal}>
          <MdAdd className="text-white mr-1" size={20} /> New Label
        </button>
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <div className="bg-gray-100 p-4 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-xl">Customer Type</h3>
            <button className="bg-white btn btn-circle rounded-full" onClick={() => handleCategoryDetailModal({ name: "Customer Type", description: "Deskripsi untuk Customer Type" })}>
              <MdOutlineInfo size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="flex justify-between items-center p-2 rounded-xl bg-white px-4">
              <p>Acqustion</p>
              <div className="flex gap-3">
                <button className="text-warning btn btn-ghost" onClick={() => handleEditLabelModal({ name: "Acqustion", description: "Some description" })}>
                  Edit
                </button>
                <button className="text-red-500 btn btn-ghost" onClick={() => handleDeleteModal("Acqustion")}>
                  Delete
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center p-2 rounded-xl bg-white px-4">
              <p>Retention</p>
              <div className="flex gap-3">
                <button className="text-warning btn btn-ghost" onClick={() => handleEditLabelModal({ name: "Acqustion", description: "Some description" })}>
                  Edit
                </button>
                <button className="text-red-500 btn btn-ghost" onClick={() => handleDeleteModal("Retention")}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-xl">Customer Type</h3>
            <div className="bg-white btn btn-circle rounded-full" onClick={() => handleCategoryDetailModal({ name: "Customer Type", description: "Deskripsi untuk Customer Type" })}>
              <MdOutlineInfo size={20} />
            </div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="flex justify-between p-2 rounded-xl bg-white px-4">
              <p>Acqustion</p>
              <div className="flex gap-3">
                <button className="text-warning btn btn-ghost" onClick={() => handleEditLabelModal({ name: "Acqustion", description: "Some description" })}>
                  Edit
                </button>
                <button className="text-red-500 btn btn-ghost" onClick={() => handleDeleteModal("Acqustion")}>
                  Delete
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center p-2 rounded-xl bg-white px-4">
              <p>Retention</p>
              <div className="flex gap-3">
                <button className="text-warning btn btn-ghost" onClick={() => handleEditLabelModal({ name: "Acqustion", description: "Some description" })}>
                  Edit
                </button>
                <button className="text-red-500 btn btn-ghost" onClick={() => handleDeleteModal("Retention")}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="flex justify-center btn btn-warning w-full items-center bg-warning p-3 rounded-xl text-white" onClick={handleCategoryModal}>
        <MdAdd className="text-white mr-1" size={20} /> New Category
      </button>
      {showLabelModal && <LabelModal onClose={handleLabelModal} />}
      {showCategoryModal && <CategoryModal onClose={handleCategoryModal} />}
      {showEditLabelModal && <EditLabelModal onClose={() => setShowEditLabelModal(false)} labelData={currentLabel} />}
      {showDeleteModal && <DeleteModal onClose={() => setShowDeleteModal(false)} onDelete={handleDelete} />}
      {showCategoryDetailModal && <CategoryDetailModal onClose={() => setShowCategoryDetailModal(false)} category={currentCategory} />}
    </div>
  );
}