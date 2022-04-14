import Image from 'next/image'
import { useState } from 'react'
import { validateRegister } from '../../lib/validate'
import { useRouter } from 'next/router'
import { countryList, genders } from '../../lib/data'
import next from 'next'

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [country, setCountry] = useState('')
    const [gender, setGender] = useState('')
    const router = useRouter()

    const register = async (event) => {
        event.preventDefault()
        const data = {
            userName: firstName + ' ' + lastName,
            email: email,
            password: password,
            dateOfBirth: birthDate,
            country: country,
            gender: gender
        }
        console.log(data)
        const userName = firstName + ' ' + lastName

        if(validateRegister(data)) {
            try {
                const body = { 
                    userName: userName, 
                    email: email, 
                    password: password, 
                    dateOfBirth: birthDate, 
                    place: country,
                    gender: gender
                }
                
                await fetch('/api/auth/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)
                })
                await localStorage.setItem('signedIn', true)
                await localStorage.setItem('user', data)
                await router.push('/')
                await window.location.reload()
            } catch(err) {
                console.log(err)
            }
        } else {
            alert('Please enter valid information!')
        }
    }

    return (
        <div className='mx-5 my-5 px-3 py-3'>
          <p className='mx-10 font-bold border-gray-900 text-4xl space-x-5' style={{marginBottom: '40px', marginLeft: '80px'}}>Register</p>
          <form className='grid grid-cols-2 gap-3' onSubmit={register}>
              <input type="text"  
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='First Name' className='max-w-md rounded-3xl py-2 px-4 my-2 outline-none border-3 placeholder-gray-600 border-slate-800 bg-gray-100'/>
              <input type="text" 
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Last Name' className='max-w-md rounded-3xl py-2 px-4 my-2 outline-none border-1 placeholder-gray-600 border-slate-800 bg-gray-100'/>
              <input type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email' className='max-w-md rounded-3xl py-2 px-4 my-3 outline-none border-1 placeholder-gray-600 border-slate-800 bg-gray-100'/>
              <input type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password' className='max-w-md rounded-3xl py-2 my-3 px-4 outline-none border-1 placeholder-gray-600 border-slate-800 bg-gray-100'/>
              <input type="date" 
              onChange={(e) => setBirthDate(e.target.value)}
              placeholder='Birthdate' className='max-w-md rounded-3xl py-2 px-4 outline-none border-1 placeholder-gray-600 border-slate-800 bg-gray-100'/>
              <input type="text" className='max-w-md rounded-3xl py-2 my-3 px-4 outline-none border-1 placeholder-gray-600 border-slate-800 bg-gray-100'
              list="countries" placeholder='Country where you live' onChange={(e) => setCountry(e.target.value)}/>
              <datalist id="countries">
                {countryList.map((country) => (
                    <option value={country} key={country}>{country}</option>
                ))}
              </datalist>
              <input type="text" className='max-w-md rounded-3xl py-2 my-3 px-4 outline-none border-1 placeholder-gray-600 border-slate-800 bg-gray-100'
              list="genders" placeholder='Gender' onChange={(e) => setGender(e.target.value)}/>
              <datalist id="genders">
                    {genders.map((gender) => (
                        <option value={gender.name} key={country}>{gender.name}</option>
                    ))}
              </datalist>
              <div className='grid grid-cols-2 gap-2 max-w-sm'>
              <button type="submit" 
              className="px-4 py-1 rounded-md shadow-lg max-w-sm w-24 bg-sky-500 text-white tracking-wide font-semibold">Submit</button>
              
              </div>
          </form>

        </div>
    )
}

export default SignUp