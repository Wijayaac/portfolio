import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "project",
    url: "/project",
  },
  {
    id: 3,
    text: "case study",
    url: "/case-study",
  },
  {
    id: 4,
    text: "about",
    url: "/about",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact",
  },
]

const tempLinks = data.map((link) => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : " "}`}>
      {tempLinks}
    </ul>
  )
}
