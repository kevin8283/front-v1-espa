import React, { useState, useEffect } from 'react'
import "./Deliberation.css"
import { useHref, useNavigate } from "react-router"
import { NavLink, Outlet } from "react-router-dom"

export default function Deliberation() {
  const navigate = useNavigate()
  const href = useHref()

  useEffect(() => {
    if (href === "/home/deliberation" || href === "/home/deliberation/") {
      navigate("/home/deliberation/analytics")
    }
  }, [])

  return (
    <div className="deliberation">
        <header className="deliberation-header">
            <div className="header-title">Délibérations</div>
            <div className="header-sub-title">
                <NavLink to="/home/deliberation/analytics" className="deliberation-link">
                    Analysez les délibérations passées
                </NavLink>| 
                <NavLink to="/home/deliberation/predict" className="deliberation-link">
                    Calculez la moyenne de passage adéquate
                </NavLink>
            </div>
        </header>
        <section className="deliberation-body">
            <Outlet/>
        </section>
    </div>
  )
}
