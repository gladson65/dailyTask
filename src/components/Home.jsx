import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import Sign from "./Sign";
import { useState, useEffect } from "react";


function Home() {

    const [ showSign, setShowSign ] = useState(false)
    

    // getting user information from localstorage
    useEffect(() => {
        if(localStorage.getItem("username") === null) {
            setShowSign(true);
         }

    }, [])
    

    return (
        <>
            {
                showSign ?
                <Sign />

                :
                <>
                    <section className="main-content h-screen w-screen bg-slate-200
                            flex flex-col gap-7 items-center pt-10 pb-10">
                        
                        
                        <TaskInput />
                        <TaskList />
                    </section>
                </>
            }
            
        </>
    )
}

export default Home;