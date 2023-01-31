import React from 'react'
import NavBar from './navbar/NavBar'
import './TopMenu.css'

const TopMenu = () => {
    const menudata=[
        {
            type:"link",
            title:"THIS MONTH",
        },
        {
            type:"link",
            title:"SKIN",
        },
        {
            type:"link",
            title:"HAIR",
        },
        {
            type:"link",
            title:"BATH",
        },
        {
            type:"button",
            title:"LOGIN",
        },
    ]
  return (<>
  <div className='banner'>
    <div className='navbar'>
    <img src="./assets/logo.svg" className="logo desktop-menu"  alt="logo" />
    <ul className='desktop-menu'>
        {
          menudata.map((item,index)=> <NavBar key={index} item={item} index={index}/> )
        }
    </ul>
    </div>
  </div>
  </>
    
  )
}

export default TopMenu