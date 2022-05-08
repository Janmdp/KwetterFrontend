import React from 'react'
import {  useState } from 'react'

function Input() {

  const [input, setInput] = useState("");
  return (
    <div className={'border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll'}>
      <img src="https://www.nicepng.com/png/detail/79-795242_nicolas-cage-face-png-nicolas-cage.png" alt="" className="h-10 w-10 rounded-full xl:mr-2.5"/>

      {/*  */}
      <div className="w-full divide-y divide-gray-700">
        {/* Textarea container */}
        <div className={''}>
          <textarea value={input} rows="2" placeholder="What's happening?" className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]" ></textarea>
        </div>
        {/* Tweet button */}
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex items-center">
            <button className="bg-[#1d9bf0] text-white rounded-full px-4 py-1.5 font-bold shadow md hover:bg-[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default">Tweet</button>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Input