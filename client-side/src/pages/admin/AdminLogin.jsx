import React from 'react'
import { useDispatch } from 'react-redux'
import { adminAuth } from '../../reduxStore/slicers/adminSlicer'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = ()=>{
        dispatch(adminAuth(true))
        navigate('/' , {replace: true})

    }
  return (
    <div className="flex justify-center items-start h-screen bg-softWhite">
        <div className="w-96 p-6 shadow-lg bg-primaryWhite rounded-md mt-[100px]">
            <h1 className="text-3xl block text-center font-semibold"><i className="fa-solid fa-user"></i> Login</h1>
            <hr className="mt-3"/>
            <div className="mt-3">
                <label for="username" className="block text-base mb-2 text-textColor">Username</label>
                <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
            </div>
            <div className="mt-3">
                <label for="password" className="block text-base mb-2 text-textColor">Password</label>
                <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
            </div>
            {/* <div className="mt-3 flex justify-between items-center">
                <div>
                    <input type="checkbox"/>
                    <label>Remember Me</label>
                </div>
                <div>
                    <a href="#" className="text-indigo-800 font-semibold">Forgot Password?</a>
                </div>
            </div> */}
            <div className="mt-5">
                <button onClick = {handleLogin} type="submit" className="border-2 bg-primary text-primaryWhite py-1 w-full rounded-md hover:bg-transparent hover:bg-secondary hover:text-primary font-semibold"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
            </div>
        </div>
    </div>
  )
}

export default AdminLogin