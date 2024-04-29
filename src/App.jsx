import { useEffect, useState } from 'react'
import './App.css'
import { FaCopyright } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
function App() {
  const[data,setData]=useState("");
  
  useEffect(()=>{
    fetchUrl();
  },[])

  const fetchUrl=async()=>{
    const res=await fetch("https://type.fit/api/quotes");
    const data=await res.json();
    const randInd=Math.floor(Math.random() * data.length);
    console.log(data[randInd].text);
    setData(data[randInd].text);
  }


  return (
    <>
      <div className='container'>
        {/* <div className='card'> */}
          <h1 className='quote'>{data}</h1>
          <button className='btn material-symbols-outlined' onClick={fetchUrl}>arrow_forward_ios</button>
        {/* </div> */}
          <div className='footer'>
            <p className='ftname'> <span className="copy"><FaCopyright /> &nbsp; </span>
            Aditya O' Saurabh 
            </p>
            <a href="https://www.instagram.com/orion_adi/" target='_blank'><p className='ftsocial'> <span><AiFillInstagram /></span>&nbsp;orion_adi</p></a>
          </div>
      </div>
    </>
  )
}

export default App
