import { useState, useEffect } from "react";
import { time } from "../utils/time.js";
import useFetch from "../utils/useFetch.js";

function Header() {

    const [ showTime, setShowTime ] = useState("")

    // getting API data from custom useFetch hook
    const { fetchdata, loading, error } = useFetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=bfc3d2331cbfea5b3fffe45863963901')

    // setInterval(()=> {
    //     setShowTime(time());
    // }, 1000)

    const [ showLogOut, setShowLogOut ] = useState(false);
    const [ temp, setTemp ] = useState("");
    const [ weather, setWeather ] = useState("");


    // logout function
    function logOut() {
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
    }



    useEffect(() => {

       
        if (fetchdata !== null) {
            let celsius = Math.floor(fetchdata.main.temp - 273);
            setTemp(celsius);
            setWeather(fetchdata.weather[0].description)
            console.log(fetchdata)
        }
        
     
        if (localStorage.getItem('username')) {
            setShowLogOut(true)
        }
       
    }, [fetchdata])


    return (
        <>
            <div className="header w-screen py-4 flex justify-center items-center
                gap-20 bg-teal-200 relative">
                
                <h1 className="text-3xl">Daily Activity</h1>
                <h1 className="text-2xl">{showTime}</h1>
                <button onClick={logOut} className="absolute right-5">
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