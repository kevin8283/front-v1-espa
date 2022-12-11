import React, { useEffect } from 'react'
import { useHref, useNavigate } from 'react-router-dom'
import "./Thesis.css"
import { NavLink, Outlet } from 'react-router-dom'

export default function Thesis() {
    const navigate = useNavigate()
    const href = useHref()

    useEffect(() => {
        if (href === "/home/thesis" || href === "/home/thesis/") {
            navigate("/home/thesis/analytics")
        }
    }, [])

    return (
        <div className="thesis">
            <header className="thesis-header">
                <div className="thesis-header-title-container">
                    <div className="thesis-title">Espace mémoires - Orientations post-universitaires</div>
                    <div className="thesis-links">
                        <NavLink className="thesis-link" to="analytics">Résumés graphiques</NavLink> | 
                        <NavLink className="thesis-link" to="recommend">Recommandations de thèmes</NavLink>
                    </div>
                </div>
            </header>
            <main className="thesis-body">
                <Outlet/>
            </main>
        </div>
    )
}
