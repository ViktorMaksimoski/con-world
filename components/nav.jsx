import { faHome, faUser, faBell } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"


const Nav = ({ title }) => {
    const [signedIn, setSignedIn] = useState(false)
    const router = useRouter()
    useEffect(() => {
        setSignedIn((JSON.parse(localStorage.getItem('signedIn')) === true))
    }, [])
    const auth = () => {
        if(signedIn) {
            localStorage.setItem('signedIn', false)
            setSignedIn(false)
            localStorage.removeItem('user')
            router.push('/auth/signin')
        } else {
            router.push('/auth/signin')
        }
    }
    return (
        <div className="bg-white shadow-lg w-full h-16 ">
            <div className="mx-auto px-4 py-4">
                <div className="flex justify-between flex-row">
                    <div>
                    <Link href="/"><p>ConWorld</p></Link>
                    </div>
                    {(signedIn === true) ? (
                        <div>
                            <div className="flex justify-between flex-row">
                            <div className="mx-5 cursor-pointer
                         rounded-full px-2 py-2 w-10 h-10 text-center hover:bg-lime-300 hover:text-white"><Link href="/"><FontAwesomeIcon icon={faHome} className="hover:text-white" style={{fontSize: 20, color: 'black'}}
                            /></Link></div>
 <div className="mx-5 cursor-pointer
                             rounded-full px-2 py-2 w-10 h-10 text-center hover:bg-lime-300"><Link href="/"><FontAwesomeIcon icon={faUser} style={{fontSize: 20, color: 'black'}}
                            /></Link></div>
                             <div className="mx-5 cursor-pointer
                             rounded-full px-2 py-2 w-10 h-10 text-center hover:bg-lime-300"><Link href="/"><FontAwesomeIcon icon={faBell} style={{fontSize: 20, color: 'black'}}
                            /></Link></div>
                        </div>
                        </div>
                    ) : <></>}
                    {(signedIn === true) ? (
                        
                        <div>
                        <button className="bg-lime-200 cursor-pointer rounded-lg shadow-sm px-3 py-2"
                        onClick={auth}>Log Out</button>
                        </div>
                        
                    ) : (
                        
                        <div>
                        <button className="bg-emerald-400 text-white cursor-pointer rounded-md shadow-sm px-3 py-2"
                        onClick={auth}>Log In</button>
                        </div>
                        
                    )}
                </div>
            </div>
        </div>
    )
}

export default Nav
