import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";
export default function App() {
  const [loading, setLoding] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id)=>
  {
    const newTour = tours.filter((tour)=> tour.id !== id)
    setTours(newTour)
  }

  const fetchTours = async () => {
    setLoding(true);

    try {
        const response = await fetch(url);
        const tours = await response.json();
        setLoding(false)
        setTours(tours)
    }
    catch(error)
    {
        setLoding(false)
        console.log(error);
    }
    console.log(tours);
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
         <Loading />
      </main>
    );
  }




  return (
    <>
      <main>
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
    </>
  );
}
