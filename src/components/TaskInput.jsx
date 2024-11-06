import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../utils/tasksSlice.js';
import "../App.css";

function TaskInput() {

    const [ inputText, setInputText ] = useState("");

    // for dispatch an action from redux
    const dispatch = useDispatch();

    

    // adding task 
    function createTask() {
        // storing task in redux store
        dispatch(addTask(inputText));
        
        //storing task in localstorage
        if (localStorage.getItem("tasks") === null) {
            localStorage.setItem('tasks', `${inputText}`)
            document.querySelector(".input").value = "";
            setInputText("");
            
        }
        else {
            const storedTasks = [localStorage.getItem('tasks')];
            storedTasks.push(inputText);
            localStorage.setItem('tasks', `${storedTasks}`);
            document.querySelector(".input").value = ""
            setInputText("");
        }
        

    }




    return (
        <>
            <div className="w-screen flex justify-center items-center py-4 h-28 gap-7">
                <input type="text" placeholder="Write Your Task"
                    className="input w-2/4 lg:w-1/3 py-2 px-3 rounded-full caret-pink-500 outline-0 ring-4 ring-purple-500 ring-offset-2 ring-offset-purple-300
                    focus:ring-offset-4 focus:ring-offset-green-400 focus:ring-green-200"
                    onChange={(e)=> setInputText(e.target.value)}
                />

                <button onClick={createTask} className={`px-2 bg-black text-white py-2 rounded-lg
                        hover:bg-gray-600 hover:text-green-200 ${inputText.length > 0 ? 'cursor-pointer' : 'cursor-not-allowed text-red-400 bg-gray-600'}
                        transition-all duration-200`}>
                    Add Task
                </button>

            </div>
        </>
    )
}

export default TaskInput;