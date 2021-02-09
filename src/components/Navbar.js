import React from "react"
import logo from "../assets/logo.svg"
import { MdFormatAlignRight } from "react-icons/md"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className='nvabar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='toggle-btn' onClick={toggleSidebar}>
            <MdFormatAlignRight />
          </button>
        </div>
        <PageLinks styleClass='nav-links'></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
