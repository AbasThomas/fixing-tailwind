import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='flex justify-center items-center  '>
            <div className='w-full max-w-[600px] p-10 bg-white rounded-lg shadow-lg justify-self-center mt-12'>
                <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
                <form>
                    <div className='mb-4'>
                        <label className='block text-gray-700 mb-2' htmlFor="email">Email</label>
                        <input type="email" id="email" className='w-full p-2 border bg-transparent border-gray-300 rounded hover:border-blue-500' placeholder='Enter your email' />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 mb-2' htmlFor="password">Password</label>
                        <input type="password" id="password" className='w-full p-2 border border-gray-300 rounded' placeholder='Enter your password' />
                    </div>
                    <button type="submit" className='bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-700 duration-300 ease-in-out'>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login