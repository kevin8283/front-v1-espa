import React, { useState, useEffect } from 'react'
import { api } from "../../services"
import "./Dashboard.css"

import { LineChart, BarChart } from "../../components"

export default function Dashboard() {

  const [chartDatas, setChartDatas] = useState({
    strikes: {
      students: {
        labels: [],
        data: []
      },

      professors: {
        labels: [],
        data: []
      },

      staff: {
        labels: [],
        data: []
      }
    },
    scores: {
      labels: [],
      data: []
    },
    hours: {
      labels: [],
      data: []
    }
  })

  const constantStates = {
    pointRadius: 2.5,
    tension: 0.3
  }

  useEffect(() => {
    api.getFormattedDeliberations()
      .then(data => {
        setChartDatas(data)
      })
      .catch(e => {
        throw e
      })
  }, [])

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-title">Insights & Analytics</div>
        <div className="header-sub-title">Retrouvez dans cette section un résumé graphique des données</div>
      </header>
      <main className="dashboard-body">
        <section className="dashboard-upper-section">
          <section className="dashboard-left-section">
            <LineChart
              data={{ ...constantStates, ...chartDatas.scores }}
              label={"Moyenne de passage"}
              colors={{ fillColor: "#f199702d", lineColor: "#f19970" }}
              max={10.1}
              min={8}
            />
          </section>
          <section className="dashboard-right-section">
            <BarChart
              data={{ ...constantStates, ...chartDatas.strikes }}
            />
          </section>
        </section>
        <section className="dashboard-lower-section">
          <section className="dashboard-left-section">
          <LineChart
              data={{ ...constantStates, ...chartDatas.hours }}
              label={"Heures d'étude hebdomadaire"}
              colors={{ fillColor: "#b885963f", lineColor: "#b88596" }}
              max={40}
              min={15}
          />
          </section>
          <section className="dashboard-right-section">
              Lower right
          </section>
        </section>
      </main>
    </div>
  )
}
