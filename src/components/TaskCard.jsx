import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../utils/tasksSlice";

function TaskCard(props) {

    const dispatch = useDispatch();

    function deleteOne() {
        dispatch(deleteTask(props.id));
    }

    return (
        <>
            <div className="bg-white h-44 rounded-xl">
                <div className="w-full flex justify-between items-center py-1 px-1">
                    <h2 className="text-2xl">Task: {props.id+1}</h2>
                    <button className="hover:bg-black rounded-xl" onClick={deleteOne}>❌</button>
                </div>

                <div className="pt-1 px-2 overflow-hidden">
                    <p>{props.task}</p>
                </div>
                

            </div>
        </>
    )
}

export default TaskCard;