import React from 'react'
import {Pencil} from "lucide-react"

const Header = () => {
  return (
   <header className="bg-purple-600 text-white shadow-md p-4 flex items-center justify-center">
     <div className='flex items-center gap-2'>
      <Pencil size={24}/>
      <h1 className="text-xl font-bold" >Note maker</h1>
     </div>
     <nav>
       <ul className="flex gap-4" >
          <li className="hover:underline cursor-pointer"  >Home</li>
          <li className="hover:underline cursor-pointer"   >My Notes</li>
          <li className="hover:underline cursor-pointer"    >About</li>
       </ul>
     </nav>
   </header>
  )
}

export default Header