import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white font-bold text-center h-16 px-1 items-center bottom-0 fixed w-full'>
        <div className="font-bold text-xl">
          <span className="text-green-600">&lt;</span>
          Pass
          <span className="text-green-600">OP/&gt;</span>
        </div>
      <div className="flex items-center justify-center">
        
        Created with
        <img className='w-7 mx-2' src="/icons/heart.png" alt="" />
        by Priyanshu Singh
      </div>
    </div>
  )
}

export default Footer
