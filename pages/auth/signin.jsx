import Link from 'next/link'
import { useState } from 'react'

const SignIn = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    return (
        <div>
            <div style={{
                width: '30%',
                height:  '100%',
                position: 'fixed',
                paddingLeft: '50px',
                paddingTop: '40px',
                paddingRight: '40px'
            }} className="bg-slate-200">
                <p className="mx-7 font-bold from-neutral-800 text-2xl">Log In</p><br />
                <div>
                    <input type="text" placeholder="email " className="bg-white rounded-3xl focus:border-blue-400 focus:border-3  px-2 py-2 outline-none w-full"/>
                    <br />
                    <br />
                    <input type="password" placeholder="password" className="bg-white rounded-3xl focus:border-blue-400 focus:border-3  px-2 py-2 outline-none w-full"/>
                    <br /><br />
                </div>
                <div className='w-full flex flex-row justify-between'>
                <button className="px-3 py-2 shadow-md bg-white rounded-md">Sign In</button>
                <Link href="/auth/signup"><p className='cursor-pointer font-bold'>Haven't account yet?</p></Link>
                </div>
            </div>
           
            </div>
    )
}

export default SignIn