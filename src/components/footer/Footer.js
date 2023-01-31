import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
     <footer  className="footer-distributed">
                    <div className="footer-left">
                        <img src="./assets/logo.svg" className="logo" alt="logo" />
                    </div>
                    <div className="footer-right">
                        <img src="../../assets/instagram.svg" alt="instalogo" />
                        <img src="../../assets/facebook.svg" alt="fblogo" />
                        <img src="../../assets/twitter.svg" alt="twitlogo" />
                    </div>
        </footer>
    </>
  )
}

export default Footer