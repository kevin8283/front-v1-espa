import React from 'react'
import { Chart as ChartJS } from "chart.js/auto"
import { Bar } from "react-chartjs-2"
import "./VerticalBarChart.css"

export default function BarChart({ data, labels }) {

    const [thesisData, jobData] = data

    const barChartDatas = {
            labels: labels,
            datasets: [
                {
                    label: "Etudiants (domaine universitaire)",
                    data: thesisData,
                    backgroundColor: "#b88596"
                },
                {
                    label: "Sortants (domaine professionnel)",
                    data: jobData,
                    backgroundColor: "#eca898"
                },
            ]}
       

    const barChartOptions = {
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 0,
                max: 15
            }
        }
    }

    return (
        <div className="vertical-bar-chart">
            <Bar 
                data={barChartDatas} 
                options={barChartOptions}
            />
        </div>
    )
}
