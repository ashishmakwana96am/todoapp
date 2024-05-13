import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slice/TodoSlice";
import { IoMdCloseCircle } from "react-icons/io";
import { MdDataset } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddToDo = ({setOpen ,open}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
 
  const [priority, setPriority] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    if (title) {
      const createdAt = new Date().getTime();
      dispatch(
        addTodo({
          title: title,
          description: description,
          status: status,
          priority: priority,
          createdAt: createdAt
        })
      );
      setTitle("");
      setDescription("");
      setStatus("");
      setPriority("");
      setOpen(false);
    } else {
      toast.error("Title is required");
    }
  };
  
  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setDescription("");
    setStatus("");
    setPriority("");
  };

  return (
    <div className="relative ">
      {open && (
        <>
          <div className="fixed inset-0 bg-[#3B2B83] opacity-50 z-50 "></div>
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[999] overflow-x-hidden overflow-y-scroll lg:overflow-y-auto max-h-[90%] lg:max-h-auto w-[90%] sm:w-auto">
            <div className="bg-white rounded-lg shadow-lg grid grid-cols-12">
              <div className="col-span-12 lg:col-span-6">
                <img
                  src="assets/vector (7).png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <div className="p-5">
                  <div className="flex justify-center flex-col items-center ">
                    <MdDataset className="text-[#3B2B83] text-5xl" />
                    <h1 className="text-[#3B2B83] text-2xl font-medium">
                      Add To Do
                    </h1>
                  </div>
                  <button
                    onClick={handleClose}
                    className="z-[99999] absolute top-[0] right-[0] mt-1 mr-1 text-[#000] hover:text-gray-600 focus:outline-none"
                  >
                    <IoMdCloseCircle className="text-4xl " />
                  </button>
                  <form onSubmit={onSubmit} className="mt-3 mb-3 ">
                    <div className="flex flex-col">
                      <label className="text-lg mb-2 font-semibold">
                        Title 
                      </label>
                      <input
                        type="text"
                        className="border border-gray-400 px-4 py-2 mb-3 rounded-md focus:outline-none focus:border-[#3B2B83]"
                        placeholder="Title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                      />
                      <label className="text-lg mb-2 font-semibold">
                        Description 
                      </label>
                      <textarea
                        rows="3"
                        className="border border-gray-400 px-4 py-2 mb-3 rounded-md focus:outline-none focus:border-[#3B2B83]"
                        placeholder="Description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                      ></textarea>
                      <label className="text-lg mb-2 font-semibold">
                        Priority
                      </label>
                      <select
                        className="border border-gray-400 px-4 py-2 mb-5 rounded-md focus:outline-none focus:border-[#3B2B83]"
                        value={priority}
                        onChange={(event) => setPriority(event.target.value)}
                      >
                        <option value="">Select Priority</option>
                        <option value="Low">Low</option>
                        <option value="Normal">Normal</option>
                        <option value="High">High</option>
                        <option value="Urgent">Urgent</option>
                      </select>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-[#3B2B83] text-white px-4 py-2 rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600"
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default AddToDo;
