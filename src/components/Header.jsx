import { useState } from "react";
import {BiSearchAlt} from 'react-icons/bi'

export default function Header({ setTopic , fecthLatest }) {

    const [clciked, setClicked] = useState('');

    const clickHandler = (event) => {
        setTopic(event.target.innerHTML);
        setClicked(event.target.innerHTML);
    }

    const [inp , setInp] = useState({search:""})
    const changeHandler = (event) => {
        setInp(prev => {
            return {...prev , [event.target.name]: event.target.value}
        });
    }

    return (
        <div className="flex items-center justify-center w-[99%] mx-auto lg:justify-between mb-5">
            <div className="flex-wrap items-center justify-center hidden gap-5 lg:flex lg:justify-start">
                <button onClick={clickHandler} className={`px-4 py-2 border rounded-md bg-slate-200 hover:scale-110 duration-200 ${clciked == 'InterNational' ? 'bg-slate-900 text-white' : ''}`}>InterNational</button>
                {/* <button onClick={clickHandler} className={`px-4 py-2 border rounded-md bg-slate-200 ${clciked == 'Buissness' ? 'bg-slate-900 text-white' : ''}`}>Buissness</button> */}
                <button onClick={clickHandler} className={`px-4 py-2 border rounded-md bg-slate-200 hover:bg-slate-300 hover:scale-110 duration-200 ${clciked == 'Sports' ? 'bg-slate-900 text-white' : ''}`}>Sports</button>
                <button onClick={clickHandler} className={`px-4 py-2 border rounded-md bg-slate-200 hover:bg-slate-300 hover:scale-110 duration-200 ${clciked == 'EnterTainment' ? 'bg-slate-900 text-white' : ''}`}>EnterTainment</button>
                <button onClick={clickHandler} className={`px-4 py-2 border rounded-md bg-slate-200 hover:bg-slate-300 hover:scale-110 duration-200 ${clciked == 'Lifestyle' ? 'bg-slate-900 text-white' : ''}`}>Lifestyle</button>
                <button onClick={clickHandler} className={`px-4 py-2 border rounded-md bg-slate-200 hover:bg-slate-300 hover:scale-110 duration-200 ${clciked == 'Science and Tech' ? 'bg-slate-900 text-white' : ''}`}>Science and Tech</button>
                <button onClick={clickHandler} className={`px-4 py-2 border rounded-md bg-slate-200 hover:bg-slate-300 hover:scale-110 duration-200 ${clciked == 'Travel' ? 'bg-slate-900 text-white' : ''}`}>Travel</button>
                <button onClick={clickHandler} className={`px-4 py-2 border rounded-md bg-slate-200 hover:bg-slate-300 hover:scale-110 duration-200 ${clciked == 'Religion' ? 'bg-slate-900 text-white' : ''}`}>Religion</button>
                <button onClick={clickHandler} className={`px-4 py-2 border rounded-md bg-slate-200 hover:bg-slate-300 hover:scale-110 duration-200 ${clciked == 'Health' ? 'bg-slate-900 text-white' : ''}`}>Health</button>
                <button onClick={clickHandler} className={`px-4 py-2 border rounded-md bg-slate-200 hover:bg-slate-300 hover:scale-110 duration-200 ${clciked == 'Weather' ? 'bg-slate-900 text-white' : ''}`}>Weather</button>
                <button onClick={() => {fecthLatest(); setClicked('Latest')}}  className={`px-4 py-2 border rounded-md bg-slate-200 hover:scale-110 duration-200 ${clciked == 'Latest' ? 'bg-slate-900 text-white' : ''}`}>Latest</button>
            </div>
            <div className="flex items-center justify-center gap-2">
                <input type="text" name="search" onChange={changeHandler} value={inp.search} className="w-40 px-4 py-2 rounded-md bg-slate-200" placeholder="Enter to Search" />
                <label htmlFor="search" className="dark:text-white" onClick={() => {setTopic(inp.search);setClicked('')}}><BiSearchAlt/></label>
            </div>
        </div>
    )
}