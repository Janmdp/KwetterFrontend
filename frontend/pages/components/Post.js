import React from 'react'

function Post({id, authorname, content}) {
    console.log(id);
    console.log(authorname);
  return (
    <div className='flex p-3 border-b border-gray-700'>
        <img src="https://www.nicepng.com/png/detail/79-795242_nicolas-cage-face-png-nicolas-cage.png" alt="" className='mr-4 rounded-full h-11 w-11' />
        <div className='flex flex-col w-full space-y-2'>
            <div className='flex justify-between'>
                <div className='text-[#6e767d]'>
<div className='inline-block group'>
 <h4 className='text-white'>{authorname}</h4>
 <span>{content}</span>
</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post