import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import LoginFront from './LoginFront'
import location from '../assets/img/placeholder.png'
import flecha from '../assets/img/flecha.png'
import cocteles from '../assets/img/granizado.png'
import licores from '../assets/img/whiskey.png'
import mecato from '../assets/img/chips.png'
import coctelGranizado from '../assets/img/coctel-granizado.png'

export default function Home() {
    const { auth } = useAuth();

    console.log(auth);

    if (!auth) return <LoginFront />
  return (
    <div className='z-0 mb-[80px]'>
        <div className='w-full flex justify-center items-center'>
            <img className='h-full' src={location} alt="location" />
            <p>Santa Rosa de Cabal, <span>CO</span></p>
        </div>
        <div className='mx-3 my-2'>
            <h1 className='text-3xl font-bold text-black' >Mor!</h1>
            <h5 className='text-lg text-gray-600' >Granizadito o que ?</h5>
        </div>
        {/* <div className='w-full flex justify-center'>
            <input className='border-indigo-900 border w-4/5 mx-3 p-2 shadow-xl rounded-lg' placeholder='Busca granizados chimbitas'/>
        </div> */}
        <div className='w-full flex justify-around my-5'>
            <div className='w-1/4 flex flex-col justify-evenly items-center shadow-xl px-2 py-3 rounded-xl'>
                <img className='p-3' src={cocteles} alt="cocteles" />
                <p className='my-3 text-sm' >Granizados</p>
                <img className='mt-1' src={flecha} alt="flecha" />
            </div>
            <div className='w-1/4 flex flex-col justify-evenly items-center shadow-xl px-2 py-3 rounded-xl'>
                <img className='p-3' src={licores} alt="cocteles" />
                <p className='my-3 text-sm' >Licores</p>
                <img className='mt-1' src={flecha} alt="flecha" />
            </div>
            <div className='w-1/4 flex flex-col justify-evenly items-center shadow-xl px-2 py-3 rounded-xl'>
                <img className='p-3' src={mecato} alt="cocteles" />
                <p className='my-3 text-sm' >Mecato</p>
                <img className='mt-1' src={flecha} alt="flecha" />
            </div>
        </div>
        <div className='w-full flex justify-center mb-[20px]'>
            <div className='w-11/12 h-[170px] pt-2.5 rounded-md bg-slate-100 flex flex-col items-center shadow-xl shadow-gray-400 z-0'>
                <div className='relative w-10/12 h-[120px] rounded-lg bg-purple-500 z-10 flex justify-center'>
                    <img className='absolute bottom-[5px]' src={coctelGranizado} alt="granizado"/>
                </div>
                <div className='flex flex-row justify-around mt-1 w-full'>
                    <h3 className='font-bold'>Picha-coctel</h3>
                    <p>$10.000</p>
                </div>
            </div>
        </div>
        <div className='w-full flex justify-center mb-[20px]'>
            <div className='w-11/12 h-[170px] pt-2.5 rounded-md bg-slate-100 flex flex-col items-center shadow-xl shadow-gray-400 z-0'>
                <div className='relative w-10/12 h-[120px] rounded-lg bg-purple-500 z-10 flex justify-center'>
                    <img className='absolute bottom-[5px]' src={coctelGranizado} alt="granizado"/>
                </div>
                <div className='flex flex-row justify-around mt-1 w-full'>
                    <h3 className='font-bold'>Picha-coctel</h3>
                    <p>$10.000</p>
                </div>
            </div>
        </div>
        <div className='w-full flex justify-center mb-[20px]'>
            <div className='w-11/12 h-[170px] pt-2.5 rounded-md bg-slate-100 flex flex-col items-center shadow-xl shadow-gray-400 z-0'>
                <div className='relative w-10/12 h-[120px] rounded-lg bg-purple-500 z-10 flex justify-center'>
                    <img className='absolute bottom-[5px]' src={coctelGranizado} alt="granizado"/>
                </div>
                <div className='flex flex-row justify-around mt-1 w-full'>
                    <h3 className='font-bold'>Picha-coctel</h3>
                    <p>$10.000</p>
                </div>
            </div>
        </div>
    </div>
  )
}
