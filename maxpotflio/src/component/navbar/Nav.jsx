import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBookFill} from 'react-icons/bs'
import {RiCustomerService2Fill} from 'react-icons/ri'
import {BiMessageSquareMinus} from 'react-icons/bi'
import { useState } from 'react'
import './nav.css'
const Nav = () => {
  const[activeNav,setactiveNav]  = useState('# ')
  return (
    <nav>
      <a href='#' onClick={()=>setactiveNav('#')}  className={activeNav === "#" ? 'active':''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setactiveNav('#about')}  className={activeNav === "#about" ? 'active':''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setactiveNav('#experience')}  className={activeNav === "#experience" ? 'active':''}><BsBookFill/></a>
      <a href='#services'  onClick={()=>setactiveNav('#services')}  className={activeNav === "#services" ? 'active':''}><RiCustomerService2Fill/></a>
      <a href='#contact' onClick={()=>setactiveNav('#contact')}  className={activeNav === "#contact" ? 'active':''}><BiMessageSquareMinus/></a>
    </nav>


  )
}

export default Nav