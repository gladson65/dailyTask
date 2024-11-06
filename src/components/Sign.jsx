import { useState } from "react"

function Sign() {


    // state variables for store input fields
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");


    // signIn function
    function signIn() {
        localStorage.setItem('username', `${username}`);
        localStorage.setItem('email', `${email}`);
        localStorage.setItem('password', `${password}`);
        props.setShowLogOut(true);
    }

    return (
        <>
            
            <div className="w-screen h-screen flex justify-center items-center">
                <h1 className="absolute top-10 md:top-20 text-red-500 w-screen py-2 px-20 text-center"></h1>
                <div className="bg-yellow-200 pb-7 w-9/12 lg:w-2/5 h-9/12 lg:h-3/5 rounded-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] overflow-hidden">
                    <h1 className="text-center mt-4 py-2 text-3xl">Log in</h1>
                    <form className="h-80 mt-7 flex flex-col justify-center gap-2 px-7 pb-4">
                        
                        <label htmlFor="username">Username</label>
                        <input onChange={(e)=> setUsername(e.target.value)} id="username" type="text" required placeholder="Username"
                            className={`h-10 rounded-lg outline-none border-2 px-3`}/>

                        <label htmlFor="email">Email</label>
                        <input onChange={(e)=> setEmail(e.target.value)} id="email" type="email" required placeholder="Email"
                            className={`h-10 rounded-lg outline-none border-2 px-3`}/>

                        <label htmlFor="password">Password</label>
                        <input onChange={(e)=> setPassword(e.target.value)} id="password" type="password" required placeholder="Password"
                            className={`h-10 rounded-lg outline-none border-2 px-3`}/>
                        
                        <div className="flex justify-center items-center py-2">
                            <button onClick={signIn} className="bg-black text-white py-2 px-4 rounded-xl 
                                hover:bg-sky-200 hover:text-black drop-shadow-[0px_2px_3px_black]">
                                log In
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}


export default Sign;