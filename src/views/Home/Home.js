import React, { useState, useEffect } from 'react'
import { Navbar, Header, Insights } from "../../components"
import "./Home.css"

import { api } from "../../services"

export default function Home() {

  return (
    <div className="home-container">
        <aside className="sidebar-container">
          <Navbar/>
        </aside>
        <div className="body-container">
          <Header/>
          <Insights/>
        </div>
    </div>
  )
}
