import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleComplete } from "../redux/slice/TodoSlice";
import { RiCheckLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const ToDoItems = ({
  id,
  title,
  description,
  completed,
  priority,
  createdAt,
}) => {
  const dispatch = useDispatch();
  const [popup,setPopup]= useState(false);
  const formattedCreatedAt = new Date(createdAt).toLocaleString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }); 

  const handleCheckboxClick = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id }));
  };

  const handleOpen = ()=>{
    setPopup(true);
  }

  const handleClose = ()=>{
    setPopup(false);
  }

  return (
   <>
     <li
      className={`mt-6 border rounded-md p-4 my-4 transition-all duration-500 shadow-lg ${
        completed ? "bg-[#3B2B83] text-white" : "bg-[#F4F2FF]"
      } `}
    >
      <div className="ps-11" >
        <button
          className={`text-xs px-3 mb-3 py-1 rounded-md font-semibold ${
            priority === "High"
              ? "text-[#fff1e3] bg-[#ECB800]"
              : priority === "Urgent"
              ? "text-white bg-[#E42C5F]"
              : priority === "Normal"
              ? "text-white bg-[#2D41A7]"
              : priority === "Low"
              ? "bg-[#28c76f] text-white"
              : "text-white bg-gray-600"
          }`}
        >
          {priority}
        </button>
        <div className="flex items-center justify-between mb-2 ">
          <div className="flex items-start">
            <div className="relative cursor-pointer">
              <span className={` absolute top-1 -left-10 w-5 h-5 border border-solid border-gray-500 rounded-md flex items-center justify-center mr-3 ${completed ? "bg-[#5D5FEF]" : ""}`} onClick={handleCheckboxClick}>
                {completed && <RiCheckLine className=" text-xl " />}
              </span>
              <input
                type="checkbox"
                className="hidden"
                checked={completed}
                onChange={handleCheckboxClick}
              />
            </div>
            <h3 onClick={handleOpen}
              className={`text-lg capitalize font-bold ${completed && "line-through"} flex gap-3 cursor-pointer`}
            >
              {title}
            </h3>
          </div>
          <button
            className={` rounded-full duration-500 transition-all hover:bg-[#681A7F] hover:text-white ${
              completed ? "text-white" : "text-[#681A7F]"
            }`}
            onClick={handleDeleteClick}
          >
            <IoMdClose className="text-xl" />
          </button>
        </div>
        <div>
        <p  className=" mb-3">{description.length > 100 ? `${description.slice(0, 100)}...` : description}</p>

          <p className={` ${completed ? "text-white" : "text-gray-500"}`}> {formattedCreatedAt}</p>
        </div>
      </div>
    </li>
  {popup && (
<div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 z-50 ">
<div className="w-[90%] sm:w-[80%] xl:w-[60%]">
    <div className="bg-white rounded-md w-full p-5 h-[600px] overflow-y-scroll" >
    <div className="flex justify-end ">  
      <button
        onClick={handleClose}
        className="text-gray-400 hover:text-gray-600 focus:outline-none z-[99999]"
      >
        <IoMdClose className="text-3xl" />
      </button>
    </div>
    <div className="">
      <h2 className="text-lg sm:text-3xl font-semibold ">{title}</h2>
      <div className="flex  gap-10 py-7 border-b border-gray-300">
      <ul className="">
        <li className="text-base flex gap-10 font-medium mb-2"> <span  className="text-gray-600" >Status</span></li>
        <li className="text-base flex gap-10 font-medium mb-2"> <span  className="text-gray-600" >Date</span></li>
      </ul>
      <ul className="">
        <li className="text-base flex gap-10 font-medium mb-2"> <span className="text-black ">{priority}</span></li>
        <li className="text-base flex gap-10 font-medium mb-2"> <span className="text-black">    {formattedCreatedAt ? formattedCreatedAt : createdAt}</span></li>
      </ul>
      </div>
      <div className="py-7">
      <h4 className="text-base font-semibold mb-3">To Do</h4>
        <p className="text-base font-normal">{description}</p>
      </div>
    </div>
  </div>
</div>
</div>
)}

   </>
  );
};

export default ToDoItems;
