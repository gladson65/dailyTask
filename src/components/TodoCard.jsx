import { useState } from "react";



function TodoCard (props) {

    const [ low, setLow ] = useState(false);
    const [ mid, setMid ] = useState(false);
    const [ high, setHigh ] = useState(false);


    function deleteOne() {
        // getting data from the localStorage and delete
        const data = localStorage.getItem("tasks")
        const dataArr = data.split(",")
        if (dataArr.length <= 1) {
            alert("At least One Activity")
        }
        else{
            dataArr.splice(props.id, 1);
            localStorage.setItem('tasks', `${dataArr}`)
            props.setMsg(true);
            setTimeout(() => {
                props.setMsg(false);
            }, 2000);
        }
        
        
    }

    // priority function to show task priority
    function priorityLow() {
        setLow(true); setMid(false); setHigh(false)
    }

    function priorityMid() {
        setLow(false); setMid(true); setHigh(false);
    }

    function priorityHigh() {
        setLow(false); setMid(false); setHigh(true)
    }

    return (
        <>
            {
                props.task == 'null' ?
                ""
                :
                <>
                    <div className="bg-slate-800 h-44 rounded-xl">
                        <div className="w-full flex justify-between items-center py-1 px-1">
                            <h2 className="text-2xl text-green-400">Task: {props.id+1}</h2>
                            <div className="bg-slate-700 text-white w-32 flex justify-between px-2 rounded-xl">
                                <span onClick={priorityLow} className={`hover:text-blue-400 cursor-pointer ${low ? 'text-green-400': ''}`}>
                                    Low
                                </span>
                                <span onClick={priorityMid} className={`hover:text-blue-400 cursor-pointer ${mid ? 'text-yellow-400': ''}`}>
                                    Mid
                                </span>
                                <span onClick={priorityHigh} className={`hover:text-blue-400 cursor-pointer ${high ? 'text-red-500': ''}`}>
                                    High
                                </span>
                            </div>
                            <button className="hover:bg-black rounded-xl" onClick={deleteOne}>❌</button>
                        </div>

                        <div className="pt-1 px-2 overflow-hidden text-white">
                            <p>{props.task}</p>
                        </div>
                        

                    </div>    
                
                </>
            }
            
        </>
    )
}

export default TodoCard;