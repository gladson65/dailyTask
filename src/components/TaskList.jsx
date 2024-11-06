import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";
import TodoCard from "./TodoCard";
import "../App.css";


function TaskList() {

    const [ taskData, setTaskData ] = useState([]);
    const [ todoData, setTodoData ] = useState([]);
    const [ toggleList, setToggleList ] = useState(false);
    const [ showToDoList, setShowToDoList ] = useState(false);
    const [ msg, setMsg ] = useState(false);
    

    // subscribing to the store
    const tasks = useSelector((store) => store.task.tasks);

    useEffect(() => {
        setTaskData(tasks);
    }, [tasks])


    function toggleView() {
        setToggleList(!toggleList)
    }

    function toDoList() {
        // getting data from the localStorage
        const data = `${localStorage.getItem("tasks")}`
        const dataArr = data.split(",")
        setTodoData(dataArr);
        setShowToDoList(!showToDoList)
    }

    return (
        <>
            <div className="taskList bg-black w-screen h-auto pb-10 overflow-y-scroll scroll-smooth no-scrollbar relative">

                {
                    msg &&
                    <h1 className='w-screen text-2xl rounded-xl absolute bg-white text-green-600 py-2 text-center z-50'>Task successfully deleted. Refresh the page!</h1>
                }

                <h1 className="text-white text-center
                    sm:text-3xl mt-2 py-7">
                    {showToDoList ? "Your Tasks" : "Recently Added Tasks"}
                </h1>

                <div className="absolute top-5 left-5">
                    <button onClick={toDoList} className="hover:bg-slate-500 transition-all duration-200 bg-teal-200 px-2 py-2 rounded-xl">
                        {showToDoList ? "↩" : "To-Do"}
                    </button>
                </div>

                <div className="text-white absolute right-10 top-2 hidden sm:block">
                    <span onClick={toggleView} className="cursor-pointer">
                        List {toggleList ? "☑️" : "☐"} 
                    </span>
                    <span className="cursor-not-allowed"> Grid {toggleList ? "☐" : "☑️"}</span>
                </div>

                {
                  showToDoList ?
                  
                  <>
                  
                    <div className={`bg-black w-screen h-auto grid sm:grid-cols-2 grid-rows-3
                            lg:grid-cols-4 gap-7 px-4 mt-4 
                            ${toggleList ? 'sm:grid-cols-1 lg:grid-cols-1 px-20 lg:px-64':''}`}>
                            
                            {
                                todoData.length > 0 ?
                                
                                todoData.map((task, i) => {
                                    return <TodoCard key={i} task={task} id={i} setMsg={setMsg}/> 
                                })
                                :
                                <>
                                    <h1>Loading...</h1>
                                </>
                            }
                    </div>
                  
                  </>
                  

                  :
                  <>

                    <div className={`bg-black w-screen h-auto grid sm:grid-cols-2 grid-rows-3
                            lg:grid-cols-4 gap-7 px-4 mt-4 
                            ${toggleList ? 'sm:grid-cols-1 lg:grid-cols-1 px-20 lg:px-64':''}`}>
                            
                            {
                                taskData.length > 0 ?
                                
                                taskData.map((task, i) => {
                                    return <TaskCard key={i} task={task} id={i}/> 
                                })
                                :
                                <>
                                    <h1>Loading...</h1>
                                </>
                            }
                    </div>
                  
                  
                  </> 
                }
                
            </div>
        </>
    )
}

export default TaskList;