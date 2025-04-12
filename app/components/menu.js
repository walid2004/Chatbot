'use client'
import { useState } from "react"
import * as motion from 'motion/react-client'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Navbar from './navbar'
import React from 'react'
import Link from 'next/link'
const Side = () => {
  return (
    <div>
        
    </div>
  )
}

const Menu = () => {
    const [isOpen, setIsOpen]= useState(false)
    const togglerr = ()=>setIsOpen(!isOpen)

  return (
    <div
    className="menubutton"
    style={{
      position: 'relative',
      zIndex: '30',
      cursor: 'pointer',
      color: 'white',
    }}
    onClick={togglerr}
  >
    <motion.div
      key={isOpen ? 'close' : 'menu'}
      initial={{ scale: 0.8, rotate: 0, opacity: 0 }}
      animate={{ scale: 1, rotate: isOpen ? 45 : 0, opacity: 1 }}
      exit={{ scale: 0.8, rotate: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{ display: 'inline-block' }}
    >
      {isOpen ? <IoClose size={50} /> : <IoMenu size={50} />}
    </motion.div>
    {isOpen && <Navbar />}
  </div>
  )
}

export default Menu