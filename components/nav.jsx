import React, {useState} from 'react'
// import icons from 'react-icons'
import {  FaUser, FaProjectDiagram } from 'react-icons/fa'
import { AiOutlineHome, AiOutlineContacts } from 'react-icons/ai'
export default function NavBar(props) {
    const [darkMode, setDarkMode] = useState(false)
    function toggleDarkMode() {
        setDarkMode(!darkMode)
      }
  return (
    <nav>
        <ul className='navbar bg-white bg-opacity-10'>
            <div className='h-10'>
            {props.svg}

            </div>
            <li className=' p-4'>
                <a href='#home'>
                    <AiOutlineHome />

                </a>
            </li>
            <li className=' p-4 mx-1 '>
                <a href='#about'>
                    <FaProjectDiagram />
                </a>
            </li>
            <li className='p-4'>
                <a href='#contact'>
                    <AiOutlineContacts />
                </a>
            </li>
        </ul>
    </nav>
  )
}
