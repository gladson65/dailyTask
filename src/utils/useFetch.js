import { useState, useEffect } from "react";

function useFetch(url) {

    const [fetchdata, setFetchData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async ()=> {
            
            try {
                const response = await fetch(url);
                const result = await response.json();
                setFetchData(result)
            }
            catch (error) {
                setError(error);
            }
            finally{
                setLoading(false);
            }
            
        }

        fetchData();
    }, [url]);

    return {fetchdata, error, loading}
}

export default useFetch;