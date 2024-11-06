import { useState, useEffect } from "react";
import { time } from "../utils/time.js";
import useFetch from "../utils/useFetch.js";

function Header() {

    const [ showTime, setShowTime ] = useState("")

    // getting API data from custom useFetch hook
    const { fetchdata, loading, error } = useFetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=bfc3d2331cbfea5b3fffe45863963901')

    // counting the time every second
    setInterval(()=> {
        setShowTime(time());
    }, 1000)

    const [ showLogOut, setShowLogOut ] = useState(false);
    const [ temp, setTemp ] = useState("");
    const [ weather, setWeather ] = useState("");
    const [ waiting, setWaiting ] = useState(false);


    // logout function
    function logOut() {
        setWaiting(true);
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        setTimeout(()=> {
            setWaiting(false);
            location.reload();
        }, 2000)
    }



    useEffect(() => {

       
        if (fetchdata !== null) {
            let celsius = Math.floor(fetchdata.main.temp - 273);
            setTemp(celsius);
            setWeather(fetchdata.weather[0].description)
        }
        
     
        if (localStorage.getItem('username')) {
            setShowLogOut(true)
        }
       
    }, [fetchdata])


    return (
        <>
            <div className="header w-screen py-4 flex justify-center items-center
                gap-20 bg-teal-300 relative">
                
                <h1 className="text-3xl hidden sm:block drop-shadow-[0px_10px_10px_black]">Daily Activity</h1>
                <h1 className="text-yellow-300 text-2xl drop-shadow-[0px_10px_10px_black]">{showTime}</h1>
                <button onClick={logOut} className={`absolute right-5 px-2 py-1 bg-black text-white rounded-xl hover:bg-slate-500 hover:text-red-500 transition-all duration-200
                    ${waiting ? 'cursor-wait':''}`}>
                    {showLogOut ? "LogOut": ""}
                </button>
                {/* weather update */}
                <div className='absolute left-5 py-2 px-1 bg-black text-white rounded-xl'>
                    <h2>{temp}<sup>∘</sup>  {weather}</h2>
                </div>
            </div>
        </>
    )
}

export default Header;