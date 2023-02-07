import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [isPending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController(); 
    setTimeout(() => {
      fetch(url,{signal:abortCont.signal})
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for the resourses");
          }
          return res.json();
        })

        .then((data) => {
          setdata(data);
          setPending(false);
          setError(null);
        })
        .catch((error) => {
          if(error.name === 'AbortError')
          {
            console.log('fetch aborted');
          }
          else
          {

            setPending(false);
            setError(error.message);
          }
        });
    }, 1000);
    return ()=> abortCont.abort()
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
