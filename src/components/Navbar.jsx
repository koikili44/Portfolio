// import Button from "./Button"
// import {Menu} from 'lucide-react'
// const Navbar = () =>{
//   return (
//     <nav className='bg-red-500 flex md:bg-yellow-500 lg:bg-blue-500 justify-between items center px-8 py-4 text-white border-b border-gray-700'>
//       <a href=""className='font bold'>Inyorkwe .T. Gabriel</a>
//       <ul className='md:flex gap-4 font medium hidden'>
//         <li>Home</li>
//         <li>Services</li>
//         <li>Experiences</li>
//         <li>Projects</li>
//         <li>About</li>
//         <li>FAQs</li>
//       </ul>
//       <Button name= "Contact" style=' hidden md:flex "bg-gray-100 px-4 py-1'/>
//       <Menu className="text-3xl flex md:hidden"/>
      
//     </nav>
//   )
// }

// export default Navbar 



import React, { useState } from "react";
import { MenuSquareIcon } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    // <nav className="w-full flex justify-between items-center py-4 px-6 bg-black text-white">
         <nav className='bg-red-500 flex md:bg-yellow-500 lg:bg-blue-500 justify-between items center px-8 py-4 text-white border-b border-gray-700'>

      <h1 className="text-xl font-bold">I .T Gabriel</h1>

     
      <ul className="md:flex gap-6 font-medium text-sm cursor-pointer hidden">
        <li>Home</li>
        <details><summary>Services</summary>
        <p>web store</p>
        
        </details>
        <li>About</li>
        <li>Project</li>
        <li>FAQS</li>
      </ul>

      <button className="bg-gray-300 px-3 py-1 text-sm md:flex hidden text-black rounded">
        Contact
      </button>

      <MenuSquareIcon
        className="text-white sm:flex md:hidden cursor-pointer size-8"
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="absolute top-16 right-0 w-30 bg-black text-white flex flex-col items-end gap-6 py-6 px-4 md:hidden">
          <ul className="flex flex-col gap-4 text-lg cursor-pointer">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Project</li>
            <li>FAQS</li>
          </ul>

          <button className="bg-gray-300 px-4 py-2 text-black rounded">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;