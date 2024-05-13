import React from 'react'
import AddToDo from './component/AddToDo'
import TodoListView from './component/TodoListView';

function App() {
  return (
    <>
   <div style={{ backgroundImage: 'url(assets/bg1.jpg)'}} className='bg-cover bg-no-repeat min-h-screen '>
   <div className="flex justify-center flex-col container mx-auto max-w-[1200px]" >
  <h1 className="text-3xl font-bold text-center my-10 ">Todo List</h1>
     <AddToDo />      
     <TodoListView /> 
     </div>
   </div>
    </>
  )
}

export default App;
