import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useState } from 'react'

function App() {

  const [loading, setLoading] = useState(false);
  const [dark, setDark] = useState(0);

  return (
    <div className={`${dark ? 'dark' : 'light'} overflow-x-hidden overflow-y-auto`}>
      <div className='w-full h-full min-h-screen dark:bg-zinc-900' style={{fontFamily:'ubuntu'}}>
        <Navbar dark={dark} setDark={setDark} />
        <Home loading={loading} setLoading={setLoading} />
        {!loading && <Footer />}
      </div>
    </div>
  )
}

export default App