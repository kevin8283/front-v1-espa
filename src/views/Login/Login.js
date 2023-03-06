import React, { useState } from 'react'
import { useNavigate } from "react-router"
import axios from "axios"
import "./Login.css"
import { Alert, TextField } from "@mui/material"
import { ColoredButton } from '../../components'


export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [passwordVisibility, setPasswordVisibility] = useState("password")
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const sx = {
    width: "25vw"
  }

  const handleUsernameChange = (event) => {
      setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
      setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
      event.preventDefault()

      if (username === "" || password === "") {
        setError(true)
        setErrorMessage("Veuillez remplir tous les champs")
      }

      else {
        axios.post("http://localhost:8000/api/v1/auth/login", {username, password}, {
          withCredentials: true
        })
        .then(response => {
          setError(false)
          navigate("/home/dashboard")
        })
        .catch(error => {
          setError(true)
          setErrorMessage(error.response.data)
        })
      }
  }

  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="login-title">Veuillez vous connecter pour accéder à l'espace enseignant</h1>
      </div>
      <div className="form-container">
        <div className="input-container">
          <TextField
                    type="text"
                    label="Nom d'utilisateur"
                    required
                    value={username}
                    onChange={handleUsernameChange}
                    sx={sx}
            />
        </div>
        <div className="input-container">
          <TextField
                    type="password"
                    label="Mot de passe"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    sx={sx}
            />
        </div>
        <div className="button-container">
          <ColoredButton
                color="#eeeeee"
                backgroundColor="#2455da"
                onClick={handleSubmit}
              >
                Connexion
            </ColoredButton>
        </div>
      </div>
      <div className="alert-container">
          {error && (
            <Alert severity="error">{errorMessage}</Alert>
          )}
        </div>
    </div>
  )
}
