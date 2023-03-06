import React, { useState, useEffect } from 'react'
import "./Landing.css"
import { Link, useNavigate } from "react-router-dom"
import svg from "../../assets/select.svg"
import axios from "axios"

export default function Landing() {

  const navigate = useNavigate()

  const accessRestricted = () => {
    axios.get("http://localhost:8000/api/v1/verify-token", {withCredentials: true})
    .then(() => {
      navigate("/home/dashboard")
    })
    .catch(e => {
      navigate("/login")
    })
  }

  return (
    <div className="landing">
      <header className="landing-header">
        Powered by <a href="https://nodejs.org">Node</a>, <a href="https://reactjs.org">React</a> & <a href="https://tensorflow.org">Tensorflow</a>
      </header>
      <section className="landing-body">
        <section className="landing-left-section">
          <section className="landing-title">
            <div className="landing-title-big">Smart Analytics</div>
            <div className="landing-title-small">
              Système d'aide à la décision développé par et pour l'ESPA
            </div>
          </section>
          <section className="landing-links">
            <Link to="/orientation">
                <button className="landing-links-button left-button">
                  Espace étudiant
                </button>
            </Link>
            <button className="landing-links-button right-button" onClick={accessRestricted}>
                Espace enseignant
            </button>
          </section>
        </section>
        <section className="landing-right-section">
          <img className="landing-svg" src={svg} />
        </section>
      </section>
    </div>
  )
}
