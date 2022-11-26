import React, { useState } from 'react'
import { Navbar, Header } from "../../components"
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
          <Header/>
          <Outlet/>
        </div>
    </div>
  )
}
