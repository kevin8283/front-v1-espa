import React, { useState, useEffect } from 'react'
import { api } from "../../services"
import "./DeliberationAnalytics.css"
import { DataTable, ColoredButton } from "../../components"

export default function DeliberationAnalytics() {
  const [deliberations, setDeliberations] = useState([])

  const dataColumns = [
    {field: "annee", headerName: "Année", width: 100},
    {field: "gr_etu", headerName: "Grèves étudiants", width: 140},
    {field: "gr_ens", headerName: "Grèves SECES", width: 140},
    {field: "gr_pat", headerName: "Grèves PAT", width: 120},
    {field: "cr_pol", headerName: "Crise politique", width: 120},
    {field: "cr_san", headerName: "Crise sanitaire", width: 120},
    {field: "cr_mto", headerName: "Crise météorologique", width: 160},
    {field: "moyenne", headerName: "Moyenne", width: 100}
  ]

  useEffect(() => {
    api.fetchDeliberations()
        .then(response => {
            setDeliberations(response.data)
        })
        .catch(e => {
            throw e
        })
  })

  return (
    <div className="deliberation-analytics">
        <header className="deliberation-analytics-header">
            <div className="analytics-header-title">
              <div className="analytics-button">
                <ColoredButton
                  color="#eeeeee"
                  backgroundColor="#856e75"
                >
                  Ajouter une nouvelle entrée
                </ColoredButton>
              </div>
               <div className="analytics-button">
                <ColoredButton
                    color="#eeeeee"
                    backgroundColor="#856e75"
                  >
                      Exporter en CSV
                  </ColoredButton>
               </div>
            </div>
        </header>
        <section className="deliberation-analytics-body">
            <DataTable rows={deliberations} columns={dataColumns}/>
        </section>
    </div>
  )
}
