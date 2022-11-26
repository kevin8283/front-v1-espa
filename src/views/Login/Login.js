import React from 'react'
import { redirect, useNavigate } from "react-router"
import "./Login.css"

export default function Login() {
  const navigate = useNavigate()

  const redirect = () => {
    navigate("/orientation")
  }

  return (
    <div>
      <div className="login-header">
        <h1 className="login-title">Login</h1>
      </div>
      <div className="login">
        <button className="without-account-button" onClick={redirect}>
            Continuer sans compte
        </button>
      </div>
    </div>
  )
}
