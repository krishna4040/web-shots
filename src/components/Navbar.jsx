import { BsFillMoonStarsFill , BsFillSunFill } from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'

export default function NavBar({ dark , setDark }) {
    return (
        <div className='mb-4 dark:bg-slate-900 dark:text-white'>

            <div className='flex items-center justify-between px-5 py-3'>

                <div className='flex items-center gap-4'>

                    <img src="https://www.hindustantimes.com/favicon.ico" alt="#" />

                    <h1>Hindustan Times</h1>

                </div>

                <div>

                    <ul className='hidden gap-5 lg:flex'>

                        <li>Home</li>

                        <li>About</li>

                        <li>Contact</li>

                    </ul>

                    <button className='lg:hidden'>
                        <AiOutlineMenu />
                    </button>

                </div>

                <div>

                    <button className='px-4 py-2 border rounded-md bg-slate-100 dark:bg-slate-900' onClick={() => {setDark(prev => !prev)}}>
                        {dark ? <BsFillSunFill className='text-white'/> : <BsFillMoonStarsFill/>}
                    </button>

                </div>

            </div>

        </div>
    )
}