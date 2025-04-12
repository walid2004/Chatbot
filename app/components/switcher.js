"use client"
import { useState } from 'react'
import * as motion from 'motion/react-client'
const Switcher = () => {
    const [isOn, setIsOn]= useState(false)
    const toggler = ()=>setIsOn(!isOn)

  return (
    <button className='modeswtich' style={{
        position:'relative',        display:'flex',
        justifyContent: "flex-" + ( isOn ? "start" : "end"),
            marginLeft:'43%',
            width: 100,
            height: 50,
            borderRadius: 50,
            cursor: "pointer",
            display: "flex",
            padding: 10,
            marginTop: 50
    }} onClick={toggler}>{
        <motion.div
        style={{
            height:'30px',
            width:'30px',
            borderRadius:'50%',
            backgroundColor:'#1edefe',
            borderWidth:'0px',
            borderColor:'white'
            , marginBottom:'20px'
        }}
        layout
        transition={{
            type:'spring',
            duration:'0.3',
            bounce: '0.3'
        }}/>
    }</button>
  )
}

export default Switcher