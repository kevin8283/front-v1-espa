import React, { useState, useEffect } from 'react'
import "./ThesisAnalytics.css"
import { VerticalBarChart } from "../../components"
import { api } from "../../services"

export default function ThesisAnalytics() {

  const [jobSamples, setJobSamples] = useState({
    elec: 0,
    emb: 0,
    auto: 0,
    dev: 0,
    devops: 0,
    ia: 0,
    meca: 0,
    robo: 0
  })

  const [thesisSamples, setThesisSamples] = useState({
    elec: 0,
    emb: 0,
    auto: 0,
    dev: 0,
    devops: 0,
    ia: 0,
    meca: 0,
    robo: 0
  })

  const [radarChartJobData, setRadarChartJobData] = useState([0, 0, 0, 0, 0, 0, 0, 0])
  const [radarChartThesisData, setRadarChartThesisData] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  useEffect(() => {
    
    api.getSamplesPerJobDomains()
      .then(response => {
        console.log(response)
        setJobSamples({
          elec: response.data.elec,
          emb: response.data.emb,
          auto: response.data.auto,
          dev: response.data.dev,
          devops: response.data.devops,
          ia: response.data.ia,
          meca: response.data.meca,
          robo: response.data.robo
        })
      })
      .catch(e => {
        throw e
      })

      api.getSamplesPerThesisDomains()
      .then(response => {
        console.log(response)
        setThesisSamples({
          elec: response.data.elec,
          emb: response.data.emb,
          auto: response.data.auto,
          dev: response.data.dev,
          devops: response.data.devops,
          ia: response.data.ia,
          meca: response.data.meca,
          robo: response.data.robo
        })
      })
      .catch(e => {
        throw e
      })
  }, [])

  useEffect(() => {
      setRadarChartJobData([
            jobSamples.elec,
            jobSamples.emb,
            jobSamples.auto,
            jobSamples.dev,
            jobSamples.devops,
            jobSamples.ia,
            jobSamples.meca,
            jobSamples.robo
      ])
  }, [jobSamples])

  useEffect(() => {
    setRadarChartThesisData([
          thesisSamples.elec,
          thesisSamples.emb,
          thesisSamples.auto,
          thesisSamples.dev,
          thesisSamples.devops,
          thesisSamples.ia,
          thesisSamples.meca,
          thesisSamples.robo
    ])
}, [thesisSamples])

  const radarChartLabels = [
    "Electronique", "Electronique Embarquée", "Automatique", "Développement",
    "DevOps & Réseaux", "Data Science", "Mécatronique", "Robotique"
  ]

  return (
    <div className="thesis-analytics">
          <VerticalBarChart
            labels={radarChartLabels}
            data={[radarChartThesisData, radarChartJobData]}
            
          />
          <div className="thesis-analytics-legend">
            Comparaison des domaines choisis par les étudiants <br /> après leurs études avec les domaines de leur mémoire
          </div>
    </div>
  )
}
