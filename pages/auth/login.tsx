import React from 'react'
import 'tailwindcss/tailwind.css'
import GoogleIcon from '@mui/icons-material/Google';
import { Facebook, GitHub } from '@mui/icons-material';
import { Divider } from '@mui/material';

const Login = () => {
    return (
        <div className=" mt-44 text-center mx-auto bg-gray-100 max-w-lg p-20 rounded-lg">
            <div className='flex justify-center'>Sign in To The Tech Blog</div>
            <div className='flex flex-col mx-auto max-w-lg'>
                <input className="mt-4 py-3 px-3 border-2 rounded-md" type="text" placeholder='your email' />
                <input className="mt-4 py-3 px-3 border-2 rounded-md" type="password" placeholder='your password' />
                <div className=' my-5 py-3 rounded-md bg-blue-500 text-white active:bg-blue-700'><p className='text-center cursor-pointer select-none'>Sign in</p></div>
            </div>

            <Divider className=' my-20' style={{backgroundColor:'black'}}/>

            <div className=' my-10'>
            Or Sign in with your socials
            <div className=' my-5 py-3 rounded-md bg-gray-200 cursor-pointer select-none flex flex-col mx-auto max-w-lg'>
                <p className='text-center'>
                <GoogleIcon/> Sign in with Google
                </p>
            </div>

            <div className=' my-5 py-3 rounded-md bg-gray-200 cursor-pointer select-none flex flex-col mx-auto max-w-lg'>
                <p className='text-center'>
                <GitHub/> Sign in with Github
                </p>
            </div>

            <div className=' my-5 py-3 rounded-md bg-gray-200 cursor-pointer select-none flex flex-col mx-auto max-w-lg'>
                <p className='text-center'>
                <Facebook style={{color:'#4267B2'}}/> Sign in with Facebook
                </p>
            </div>
            </div>

        </div>
    )
}

export default Login
