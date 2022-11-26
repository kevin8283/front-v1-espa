import React, { useState } from 'react'
import { Navbar } from "../../components"
import { useNavigate } from "react-router"
import { Outlet } from "react-router-dom"
import "./Home.css"

export default function Home() {

  return (
    <div className="home-container">
        <aside className="sidebar-container">
          <Navbar/>
        </aside>
        <div className="body-container">
          <Outlet/>
        </div>
    </div>
  )
}
