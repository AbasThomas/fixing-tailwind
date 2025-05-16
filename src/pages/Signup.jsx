import React from 'react'

const Signup = () => {
  return (
    <div>
        <div className='bg-gray-800 p-8 flex '>
            <div className='container mx-auto flex justify-between  items-center'>
                <div className='text-white text-3xl font-bold'>Learn Talwind</div>
                <ul className='flex space-x-4'>
                    <li><a href="#" className='text-white  hover:text-gray-400'>Home</a></li>
                    <li><a href="#" className='text-white hover:text-gray-400'>About</a></li>
                    <li><a href="#" className='text-white hover:text-gray-400'>Services</a></li>
                    <li><a href="#" className='text-white hover:text-gray-400'>Contact</a></li>
                </ul>
                <div className='flex items-center'>
                <input type="text" placeholder="Search..." className='p-2 rounded-md bg-white' />
                <button className='bg-blue-500 text-white p-2 rounded-md ml-2'>Search</button>
            </div>
            <div className='flex items-center itmes-center'>
                <button className='bg-blue-500 text-white p-2 rounded-md'>Login</button>
                <button className='bg-blue-500 text-white p-2 rounded-md ml-2'>Sign Up</button>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Signup