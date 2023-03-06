import React, { useEffect } from 'react'
import { Navbar } from "../../components"
import { useNavigate, useHref } from "react-router"
import { Outlet } from "react-router-dom"
import axios from "axios"
import "./Home.css"

export default function Home() {

  const navigate = useNavigate()
  const href = useHref()

  useEffect(() => {
      if (href==="/home" || href==="/home/") {
        navigate("/home/dashboard")
      }
  }, [])

  useEffect(() => {
      axios.get("http://localhost:8000/api/v1/verify-token", {withCredentials: true})
      .then(response => {

      })
      .catch(e => {
        console.log(e)
        navigate("/login")
      })
  }, [])

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
