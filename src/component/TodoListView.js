import React, { useState } from "react";
import { useSelector } from "react-redux";
import ToDoItems from "./ToDoItems";
import AddToDo from "./AddToDo";

const ToDoList = () => {
  const todos = useSelector((state) => state.todos);
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(false);

  const uncheckedTodos = todos.filter((todo) => !todo.completed);
  const checkedTodos = todos.filter((todo) => todo.completed);

  uncheckedTodos.reverse();
  checkedTodos.reverse();

  const sortedTodos = [...uncheckedTodos, ...checkedTodos];

  const filterByPriority = (priority) => {
    return todos.filter((todo) => todo.priority === priority);
  };

  let filteredList;
  if (filter === "all") {
    filteredList = sortedTodos;
  } else {
    filteredList = filterByPriority(filter);
  }

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="mx-4">
      <div className="flex justify-between items-center">
        <button>
          <form>
            <select
              name="priorityFilter"
              id="priorityFilter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="text-[#3B2B83] text-xl bg-[#D5CCFF] border border-gray-400 px-3 sm:px-8 py-1 rounded-md focus:outline-none focus:border-[#3B2B83]  transition-all duration-500 hover:scale-[1.03] font-semibold"
            >
              <option value="all">All</option>
              <option value="Low">Low</option>
              <option value="Normal">Normal</option>
              <option value="High">High</option>
              <option value="Urgent">Urgent</option>
            </select>
          </form>
        </button>
        <button
          onClick={handleOpen}
          className="text-[#3B2B83] text-xl bg-[#D5CCFF] px-4 py-1 rounded-md  focus:outline-none focus:[#3B2B83] transition-all duration-500 hover:scale-[1.03] font-semibold border border-gray-400"
        >
          Add To Do
        </button>
      </div>
      <div>
        <AddToDo setOpen={setOpen} open={open} />
      </div>
      <ul className="bg-[#D5CCFF] p-5 rounded-lg mt-5">
      {filteredList.length === 0 ? (
        <p className={`mt-6 border rounded-md p-4 my-5 transition-all duration-500 bg-white
      hover:scale-[1.03] text-center text-xl font-semibold flex justify-center items-center flex-col gap-3`}><img src="assets/download-_1_.png" className="py-4" alt=""/> <span className="text-[#3B2B83]">No records found!</span>
    </p>
      ) : (
        <>
          {filteredList.map((todo) => (
            <ToDoItems
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              completed={todo.completed}
              priority={todo.priority}
              createdAt={todo.createdAt}
            />
          ))}
        </>
      )}
      </ul>
    </div>
  );
};

export default ToDoList;
