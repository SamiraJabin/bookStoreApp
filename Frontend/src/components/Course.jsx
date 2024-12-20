import React, { useEffect, useState } from 'react'
import Cards from "../components/Cards"
import axios from "axios"
import {Link} from "react-router-dom"
function Course() {

  const [book, setBook] = useState([])
  useEffect(()=>{
    const getBook = async()=>{
      try {
        const res = await axios.get("https://bookstoreapp-backend-q345.onrender.com");
        console.log(res.data);
        setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[]);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 grid'>
     <div className='mt-28 items-center justify-center text-center '>
      <h1 className='text-center text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
      <p className='mt-12'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ratione quam 
      quaerat odit autem modi sequi. Aliquid harum nesciunt
       ad praesentium! Odio inventore eum quae nihil facere ipsa provident nulla!
      </p>
      <Link to="/">
      <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
        Back
        </button>
      </Link>
    </div>

    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
      { 
          book.map((item) => (
            <Cards key={item.id} item={item}/>))
          
      }
    </div>

    </div>
    
    </>
    
  );
}

export default Course
