import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!url) return;

        setLoading(true);
        setError(null);

        fetch(url)
          .then((response) => {
            if(!response.ok) throw new Error("Network response was not ok");
            return response.json();
          })
          .then((json) => setData(json))
          .catch((error) => setError(error))
          .finally(() => setLoading(false));

    }, [url]);

    console.log(data)
    return { data, loading, error };
}