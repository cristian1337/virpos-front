import React from 'react'
import { Link } from 'react-router-dom'
import carrito from '../assets/img/carrito.png'
import home from '../assets/img/home.png'
import user from '../assets/img/user.png'

export default function Menu() {
  return (
        <nav className='fixed bottom-0 mx-auto flex justify-evenly w-full h-16 shadow-xl z-10 bg-slate-100'>
            <div className='flex flex-col items-center justify-center visited:bg-violet-500'>
                <img src={home} alt="home" />
                <Link className='visited:bg-violet-500' to='/' >Inicio</Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src={carrito} alt="cart" />
                <Link to='/cart' >Carrito</Link>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <img src={user} alt="user" />
                <Link to='/perfil' >Perfil</Link>
            </div>
        </nav>
  )
}
