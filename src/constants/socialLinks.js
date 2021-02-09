import React from "react"
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTelegramPlane,
  FaDribbbleSquare,
  FaGithubSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className='social-icon'></FaFacebookSquare>,
    url: "https://facebook.com",
  },
  {
    id: 2,
    icon: <FaLinkedinIn className='social-icon'></FaLinkedinIn>,
    url: "https://linkedin.com",
  },
  {
    id: 3,
    icon: <FaTelegramPlane className='social-icon'></FaTelegramPlane>,
    url: "https://telegram.org",
  },
  {
    id: 4,
    icon: <FaDribbbleSquare className='social-icon'></FaDribbbleSquare>,
    url: "https://dribbble.com",
  },
  {
    id: 5,
    icon: <FaGithubSquare className='social-icon'></FaGithubSquare>,
    url: "https://github.com/Wijayaac",
  },
]

const icons = data.map((icon) => {
  return (
    <li key={icon.id}>
      <a href={icon.url} className='social-link'>
        {icon.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return <ul className={`social-links ${styleClass ? styleClass : ""}`}></ul>
}
