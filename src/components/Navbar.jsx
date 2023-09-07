import { BsFillMoonStarsFill , BsFillSunFill , BsFillPostcardHeartFill } from 'react-icons/bs'
import {NavLink} from 'react-router-dom'

export default function NavBar({ dark , setDark }) {
    return (
        <div className='mb-4 dark:bg-slate-900 dark:text-white'>

            <div className='flex items-center justify-between px-5 py-3'>

                <div className='flex items-center gap-4'>

                    <img src="https://www.hindustantimes.com/favicon.ico" alt="#" />

                    <h1 className='hidden lg:block'>Hindustan Times</h1>

                </div>

                <div className='ml-2'>

                    <ul className='flex gap-3 lg:gap-5'>

                        <li><NavLink to='/'>Home</NavLink></li>

                        <li><NavLink to='/about'>About</NavLink></li>

                        <li><NavLink to='/contact'>Contact</NavLink></li>

                    </ul>

                </div>

                <div className='flex items-center justify-center gap-2 lg:gap-3'>

                    <NavLink to='/liked'><button className='px-4 py-2'><BsFillPostcardHeartFill className='text-4xl dark:text-white'/></button></NavLink>

                    <button className='px-4 py-2 border rounded-md bg-slate-100 dark:bg-slate-900' onClick={() => {setDark(prev => !prev)}}>
                        {dark ? <BsFillSunFill className='text-white'/> : <BsFillMoonStarsFill/>}
                    </button>

                </div>

            </div>

        </div>
    )
}