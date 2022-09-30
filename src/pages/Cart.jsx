import React from 'react'
import { Link } from 'react-router-dom'
import flechaIzquierda from '../assets/img/flecha-izquierda.png'
import coctel from '../assets/img/granizado.png'
import eliminar from '../assets/img/eliminar.png'

export default function Cart() {
  return (
    <div>
        <div className='w-full flex justify-around items-center mt-4'>
          <img className='p-3 rounded-lg shadow-lg shadow-gray-300' src={flechaIzquierda} alt="flecha izquierda" />
          <h3 className='font-bold'>Carrito</h3>
        </div>
        <div>
          <img src={coctel} alt="imagen producto" />
          <div>
            <h3></h3>
            <div>
              <button>-</button>
              <p>1</p>
              <button>+</button>
            </div>
          </div>
          <div>
            <img src={eliminar} alt="eliminar" />
            <p>$10.000</p>
          </div>
        </div>
    </div>
  )
}

