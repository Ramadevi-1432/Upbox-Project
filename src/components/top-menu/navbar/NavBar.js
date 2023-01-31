import React from 'react'
import '../TopMenu.css'
const NavBar = (props) => {
    var navItem;
    if(props.item.type==="link"){
        navItem = <li><a href="./" className="nav-link"  >{props.item.title}</a></li>;

    }
    else{
        navItem=<li><a href="./" className='nav-link login-btn' >{props.item.title}</a></li>
    }
  return (
    <>
    {navItem}
    </>
  )
}

export default NavBar