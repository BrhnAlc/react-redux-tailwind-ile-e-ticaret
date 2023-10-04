import {BsLightbulb} from  "react-icons/bs";
import { BsBasketFill, BsFillMoonStarsFill } from "react-icons/bs";
import React, { useState ,useEffect} from 'react'

const Navbar = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const root=document.getElementById('root')
  if(color){

    root.style.backgroundColor="black";
    root.style.color="gray";
  }else{
    root.style.backgroundColor="white";
    root.style.color="black";
  }
  
}, [color])
  

  return (
    <div className="flex items-center justify-between px-3 h-28">
  <div>LOGO</div>
  <div className="flex items-center space-x-5 ">
    <input className="border p-3 outline-none rounded-lg" type="text" placeholder='search' />
   <div onClick={()=>setColor(!color)}>
    {
      color ? <BsFillMoonStarsFill size={25} className="cursor-pointer"/> :  <BsLightbulb size={25} className="cursor-pointer"/>
    }
   
   </div>
    <div className="relative">
    <BsBasketFill size={25} className="cursor-pointer"/>
    <span className="absolute -top-2 right-0   px-1 bg-red-600 text-white rounded-full text-sm">3</span>
    </div>
  </div>

    </div>
  )
}

export default Navbar