import React, { useEffect } from 'react'
import "./Deliberation.css"
import { useHref, useNavigate } from "react-router"
import { NavLink, Outlet } from "react-router-dom"

export default function Deliberation() {
  const navigate = useNavigate()
  const href = useHref()

  useEffect(() => {
    if (href === "/deliberation" || href === "/deliberation/") {
      navigate("/deliberation/analytics")
    }
  }, [])

  return (
    <div className="deliberation">
        <header className="deliberation-header">
            <div className="header-title">Délibérations</div>
            <div className="header-sub-title">
                <NavLink to="/deliberation/analytics" className="deliberation-link">
                    Analysez les délibérations passées
                </NavLink>| 
                <NavLink to="/deliberation/predict" className="deliberation-link">
                    Calculez la note de passage adéquate
                </NavLink>
            </div>
        </header>
        <section className="deliberation-body">
            <Outlet/>
        </section>
    </div>
  )
}
