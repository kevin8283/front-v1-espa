import React from 'react'
import './Navbar.css'
import { useNavigate } from "react-router"
import { NavLink, Link } from "react-router-dom"
import { LineAxis, Settings, Book, QuestionAnswer, Info, Logout } from "@mui/icons-material"
import Logo from "../../assets/smart-analytics-logo2.png"

export default function Navbar() {
  const navigate = useNavigate()

  const logout = (event) => {
    event.preventDefault()

    navigate("/")
  }

  return (
    <div className="navbar">
      <ul className="nav-links">

        <li className="nav-link logo-container">
          <span><img src={Logo} className="logo"/></span>
        </li>

        <li className="nav-link">
          <NavLink to="dashboard" className="link">
            <span className="link-logo"><LineAxis /></span>
            <span className="link-text">Dashboard</span>
          </NavLink>
        </li>

        <li className="nav-link">
          <NavLink to="deliberation" className="link">
            <span className="link-logo"><QuestionAnswer /></span>
            <span className="link-text">Deliberation</span>
          </NavLink>
        </li>

        <li className="nav-link">
          <NavLink to="thesis" className="link">
            <span className="link-logo"><Book /></span>
            <span className="link-text">Mémoire</span>
          </NavLink>
        </li>

        <li className="nav-link">
          <NavLink to="setting" className="link">
            <span className="link-logo"><Settings /></span>
            <span className="link-text">Paramètres</span>
          </NavLink>
        </li>

        <li className="nav-link">
          <NavLink to="about" className="link">
            <span className="link-logo"><Info /></span>
            <span className="link-text">A propos</span>
          </NavLink>
        </li>

        <li className="nav-link logout">
          <Link onClick={logout} className="link">
            <span className="link-logo"><Logout /></span>
            <span className="link-text">Déconnexion</span>
          </Link>
        </li>

      </ul>
    </div>
  )
}
