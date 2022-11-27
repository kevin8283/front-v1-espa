import React, { useState } from 'react'
import { Navigate } from "react-router-dom"
import { TextField, Dialog, DialogTitle } from "@mui/material"
import { ColoredButton } from "../../components"
import { api } from '../../services'
import "./Orientation.css"

export default function Orientation() {

  const sx = {
    width: "30vw"
  }

  const [math, setMath] = useState("")
  const [mech, setMech] = useState("")
  const [opt, setOpt] = useState("")
  const [sc_terre, setScTerre] = useState("")
  const [alg_bool, setAlgBool] = useState("")
  const [chem, setChem] = useState("")
  const [env, setEnv] = useState("")
  const [dess_tech, setDessTech] = useState("")
  const [elec, setElec] = useState("")
  const [trigo, setTrigo] = useState("")
  const [shouldNavigate, setShouldNavigate] = useState(false)
  const [results, setResults] = useState([])

  const [error, setError] = useState(false)

  const changeMath = (event) => {
    setMath(event.target.value)
  }

  const changeMech = (event) => {
    setMech(event.target.value)
  }

  const changeOpt = (event) => {
    setOpt(event.target.value)
  }

  const changeScTerre = (event) => {
    setScTerre(event.target.value)
  }

  const changeAlgBool = (event) => {
    setAlgBool(event.target.value)
  }

  const changeChem = (event) => {
    setChem(event.target.value)
  }

  const changeEnv = (event) => {
    setEnv(event.target.value)
  }

  const changeDessTech = (event) => {
    setDessTech(event.target.value)
  }

  const changeElec = (event) => {
    setElec(event.target.value)
  }

  const changeTrigo = (event) => {
    setTrigo(event.target.value)
  }

  const closeModal = () => {
    setError(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (math==="" || mech==="" || chem==="" || opt==="" || sc_terre==="" ||
        dess_tech==="" || alg_bool==="" || env==="" || elec==="" || trigo===""
    ) {
        setError(true)
    }
    else {
      const body = {
        data: { 
          mech: parseInt(mech),
          math: parseInt(math),
          chem: parseInt(chem),
          alg_bool: parseInt(alg_bool),
          elec: parseInt(elec),
          sc_terre: parseInt(sc_terre),
          env: parseInt(env),
          dess_tech: parseInt(dess_tech),
          opt: parseInt(opt),
          trigo: parseInt(trigo),
        }
      }

      api.recommendOrientation(body)
          .then(response => {
            setResults(response.data)
            setShouldNavigate(true)
          })
          .catch(e => {
            throw e
          })
    }
  }

  return (
    <div className="orientation">
      <header className="orientation-header">
        <div className="orientation-header-title">
          Pas d'idée sur quelle mention au sein de l'ESPA intégrer ?
        </div>
        <div className="orientation-header-sub-title">
          Entrez vos estimations à propos de vos connaissances dans chaque domaine (notes sur 20)
        </div>
      </header>
      <section className="orientation-body">
        <section className="deliberation-predict-body">
          <div className="deliberation-predict-form-group">
            <section className="deliberation-form-group-left">
              <div className="deliberation-input-container">
                <TextField
                  type="number"
                  label="Mathématiques générales"
                  required
                  value={math}
                  onChange={changeMath}
                  sx={sx}
                />
              </div>
              <div className="deliberation-input-container">
                <TextField
                  type="number"
                  label="Mécanique générale"
                  required
                  value={mech}
                  onChange={changeMech}
                  sx={sx}
                />
              </div>
              <div className="deliberation-input-container">
                <TextField
                  type="number"
                  label="Optique géométrique"
                  required
                  value={opt}
                  onChange={changeOpt}
                  sx={sx}
                />
              </div>
              <div className="deliberation-input-container">
                <TextField
                  type="number"
                  label="Sciences de la terre"
                  required
                  value={sc_terre}
                  onChange={changeScTerre}
                  sx={sx}
                />
              </div>
              <div className="deliberation-input-container">
                <TextField
                  type="number"
                  label="Algèbre de Boole"
                  required
                  value={alg_bool}
                  onChange={changeAlgBool}
                  sx={sx}
                />
              </div>
            </section>
            <section className="deliberation-form-group-right">
              <div className="deliberation-input-container">
                <TextField
                  type="number"
                  label="Chimie générale"
                  required
                  value={chem}
                  onChange={changeChem}
                  sx={sx}
                />
              </div>
              <div className="deliberation-input-container">
                <TextField
                  type="number"
                  label="Environnement"
                  required
                  value={env}
                  onChange={changeEnv}
                  sx={sx}
                />
              </div>
              <div className="deliberation-input-container">
                <TextField
                  type="number"
                  label="Dessin technique"
                  required
                  value={dess_tech}
                  onChange={changeDessTech}
                  sx={sx}
                />
              </div>
              <div className="deliberation-input-container">
                <TextField
                  type="number"
                  label="Electricité & Electronique"
                  required
                  value={elec}
                  onChange={changeElec}
                  sx={sx}
                />
              </div>
              <div className="deliberation-input-container">
                <TextField
                  type="number"
                  label="Trigonométrie & Géométrie"
                  required
                  value={trigo}
                  onChange={changeTrigo}
                  sx={sx}
                />
              </div>
            </section>
          </div>
          <div className="deliberation-input-container button-container">
            <ColoredButton
              color="#eeeeee"
              backgroundColor="#856e75"
              onClick={handleSubmit}
            >
              Recommander
            </ColoredButton>
          </div>
          <Dialog onClose={closeModal} open={error}>
            <DialogTitle>Veuillez remplir tous le champs</DialogTitle>
          </Dialog>
          {shouldNavigate && (
            <Navigate 
              to="/orientation/results" 
              state={{results: results.slice(0, 5)}}
            />
          )}
        </section>
      </section>
    </div>
  )
}
