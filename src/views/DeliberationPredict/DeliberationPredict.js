import React, { useState, useEffect } from 'react'
import "./DeliberationPredict.css"
import { TextField, FormControl, MenuItem, InputLabel, Dialog, DialogTitle, Select } from "@mui/material"
import { ColoredButton } from "../../components"
import { api } from "../../services"

export default function DeliberationPredict() {

  const sx = {
    width: "30vw"
  }

  const [studentStrike, setStudentStrike] = useState("")
  const [profStrike, setProfStrike] = useState("")
  const [staffStrike, setStaffStrike] = useState("")
  const [sanCrisis, setSanCrisis] = useState(0)
  const [polCrisis, setPolCrisis] = useState(0)
  const [mtoCrisis, setMtoCrisis] = useState(0)
  const [weeklyStudy, setWeeklyStudy] = useState("")
  const [mentions, setMentions] = useState([])
  const [error, setError] = useState(false)
  const [openResultModal, setOpenResultModal] = useState(false)
  const [deliberationResult, setDeliberationResult] = useState(0)

  const handleStudentStrike = (event) => {
    setStudentStrike(event.target.value)
  }

  const handleProfStrike = (event) => {
    setProfStrike(event.target.value)
  }

  const handleStaffStrike = (event) => {
    setStaffStrike(event.target.value)
  }

  const handleSanCrisis = (event) => {
    setSanCrisis(event.target.value)
  }

  const handlePolCrisis = (event) => {
    setPolCrisis(event.target.value)
  }

  const handleMtoCrisis = (event) => {
    setMtoCrisis(event.target.value)
  }

  const handleWeeklyStudy = (event) => {
    setWeeklyStudy(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (studentStrike==="" || profStrike==="" || staffStrike==="" || weeklyStudy==="") {
        setError(true)
    }
    else {
      const body = {
        data: {
          gr_etu: parseInt(studentStrike),
          gr_ens: parseInt(profStrike),
          gr_pat: parseInt(staffStrike),
          cr_pol: polCrisis,
          cr_san: sanCrisis,
          cr_mto: mtoCrisis,
          heure_etude_hebd: parseInt(weeklyStudy)
        }
      }
      api.predictDeliberation(body)
      .then(response => {
        setDeliberationResult(response.data.result)
        setOpenResultModal(true)
      })
      .catch(e => {
        throw e
      })
    }
  }

  const closeModal = () => {
    setError(false)
  }

  const closeResultModal = () =>  {
    setOpenResultModal(false)
  }

  useEffect(() => {
    api.fetchMentions()
      .then(response => {
        setMentions(response.data)
      })
      .catch(e => {
        throw e
      })
  }, [])

  return (
    <div className="deliberation-predict">
      <header className="deliberation-predict-header">
        <h3 className="deliberation-predict-title">
          Saisissez les informations concernant cette année universitaire
        </h3>
      </header>
      <section className="deliberation-predict-body">
        <div className="deliberation-predict-form-group">
          <section className="deliberation-form-group-left">
            <div className="deliberation-input-container">
              <TextField
                type="number"
                label="Jours de grève des étudiants"
                required
                value={studentStrike}
                onChange={handleStudentStrike}
                sx={sx}
              />
            </div>
            <div className="deliberation-input-container">
              <TextField
                type="number"
                label="Jours de grève du SECES"
                required
                value={profStrike}
                onChange={handleProfStrike}
                sx={sx}
              />
            </div>
            <div className="deliberation-input-container">
              <TextField
                type="number"
                label="Jours de grève PAT"
                required
                value={staffStrike}
                onChange={handleStaffStrike}
                sx={sx}
              />
            </div>
          </section>
          <section className="deliberation-form-group-right">
            <div className="deliberation-input-container">
              <FormControl>
                <InputLabel id="cr_pol">Crise politique</InputLabel>
                <Select
                  labelId="cr_pol"
                  label="Crise politique"
                  onChange={handlePolCrisis}
                  value={polCrisis}
                  sx={sx}
                >
                  <MenuItem value={1}>Oui</MenuItem>
                  <MenuItem value={0}>Non</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="deliberation-input-container">
              <FormControl>
                <InputLabel id="cr_san">Crise sanitaire</InputLabel>
                <Select
                  labelId="cr_san"
                  label="Crise sanitaire"
                  onChange={handleSanCrisis}
                  value={sanCrisis}
                  sx={sx}
                >
                  <MenuItem value={1}>Oui</MenuItem>
                  <MenuItem value={0}>Non</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="deliberation-input-container">
              <FormControl>
                <InputLabel id="cr_san">Crise météorologique</InputLabel>
                <Select
                  labelId="cr_san"
                  label="Crise sanitaire"
                  onChange={handleMtoCrisis}
                  value={sanCrisis}
                  sx={sx}
                >
                  <MenuItem value={1}>Oui</MenuItem>
                  <MenuItem value={0}>Non</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="deliberation-input-container">
              <TextField
                type="number"
                label="Heures d'étude hebdomadaire moyenne"
                required
                value={weeklyStudy}
                onChange={handleWeeklyStudy}
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
              Lancer le calcul
            </ColoredButton>
        </div>
        <Dialog onClose={closeModal} open={error}>
          <DialogTitle>Veuillez remplir tous le champs</DialogTitle>
        </Dialog>
        <Dialog onClose={closeResultModal} open={openResultModal}>
          <div className="result-container">
            <DialogTitle>Délibération recommandée :</DialogTitle>
            <div className="deliberation-result">
                {deliberationResult.toFixed(2)}
            </div>
          </div>
        </Dialog>
      </section>
    </div>
  )
}
