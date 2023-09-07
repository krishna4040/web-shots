import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Liked from './components/Liked'
import About from './components/About'
import Contact from './components/Contact'
import { useSelector } from 'react-redux'

function App() {

  const {liked} = useSelector(state => state);

  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(0);

  return (
    <div className={`${dark ? 'dark' : 'light'} overflow-x-hidden overflow-y-auto`}>
      <div className='w-full h-full min-h-screen dark:bg-zinc-900' style={{fontFamily:'ubuntu'}}>
        <Navbar dark={dark} setDark={setDark} />
        <Routes>
          <Route path='/' element={<Home loading={loading} setLoading={setLoading} />} />
          <Route path='/liked' element={<Liked liked={liked} />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        {!loading && <Footer />}
      </div>
    </div>
  )
}

export default App