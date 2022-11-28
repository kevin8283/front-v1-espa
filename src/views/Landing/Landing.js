import React from 'react'
import "./Landing.css"
import { Link } from "react-router-dom"
import svg from "../../assets/select.svg"

export default function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        Powered by <a href="nodejs.org">Node</a>, <a href="reactjs.org">React</a> & <a href="tensorflow.org">Tensorflow</a>
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
            <Link to="/home">
                <button className="landing-links-button right-button">
                  Espace enseignant
                </button>
            </Link>
          </section>
        </section>
        <section className="landing-right-section">
          <img className="landing-svg" src={svg} />
        </section>
      </section>
    </div>
  )
}
