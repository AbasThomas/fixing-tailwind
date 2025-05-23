import React from 'react'

const Signup = () => {
  return (
    <div>
        <form
          autoComplete="off"
          className="w-full max-w-[600px] p-10 bg-white rounded-lg shadow-lg justify-self-center mt-12" 
          aria-label="signup-form
          dark:bg-gray-800 dark:bg-gray-900 dark:border-gray-700"
        >
          <h2 className="mb-10 text-3xl font-bold text-center">Sign Up Form</h2>
          <div className="flex flex-col items-start mb-5 gap-y-3">
            <label htmlFor="email" className="text-sm font-medium cursor-pointer">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="Enter your email address..."
            />
          </div>
          <div className="flex flex-col items-start mb-5 gap-y-3">
            <label
              htmlFor="password"
              className="text-sm font-medium cursor-pointer"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-4 bg-transparent border border-gray-200 rounded-lg outline-none"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-center mb-5 text-slate-400">
            <p>Already have an account?</p>
            <a href="#" className="text-blue-500 underline">
              Sign In
            </a>
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px]
            hover:bg-blue-600 ease-in-out duration-400 focus:outline-none focus:ring-2-500 focus:ring-offset-2 focus:ring-offset-blue-200"
          >
            Create an account
          </button>
        </form>
    </div>
  )
}

export default Signup