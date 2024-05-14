import React from 'react';
import AddToDo from './component/AddToDo';
import TodoListView from './component/TodoListView';

function App() {
  return (
    <>
   <div className=' min-h-screen py-20'>
   <div className="flex justify-center flex-col container mx-auto max-w-[1200px]" >
     <AddToDo />      
     <TodoListView /> 
     </div>
   </div>
    </>
  )
}

export default App;
