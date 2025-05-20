import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const name = 'josé'

  return (
    <>

      <div className='w-full min-h-screen mx-auto flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-semibold text-white mb-4'>¡Hola Mundo En <span className='text-[#61DAFB]'>React </span> 
        Con  <span className='text-[#38BDF8]'>TailwindCSS!</span> integrado.🐱</h2>
        <p className='font-normal text-base text-white opacity-90'>Bienvenido {name}</p>
      </div>

    </>
  )
}

export default App
