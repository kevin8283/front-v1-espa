import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div>
      <ul className="nav-links">

        <li className="nav-link">
          <span className="logo">Logo goes here</span>
        </li>

        <li className="nav-link">
          <Link to="/dashboard" className="link">Dashboard</Link>
        </li>

        <li className="nav-link">
          <Link to="/deliberation" className="link">Déliberation</Link>
        </li>

      </ul>
    </div>
  )
}
