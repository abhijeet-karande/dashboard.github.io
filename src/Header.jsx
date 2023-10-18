import React from 'react'
import 
 { BsSearch, BsJustify}
 from 'react-icons/bs'
 import { PiHandWavingBold } from "react-icons/pi";

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            Hello Abhijeet,
                <PiHandWavingBold className='icon'/>
            
        </div>
        <div className='header-right'>
            <div>
                <BsSearch  className='icon'/>Search
            </div>
        </div>
    </header>
  )
}

export default Header