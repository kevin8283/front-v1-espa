import React from 'react'
import { Chart as ChartJS } from "chart.js/auto"
import { Bar } from "react-chartjs-2"
import "./BarChart.css"

export default function BarChart({ data, offset=0 }) {

    const barChartDatas = {
            labels: data.students.labels.slice(-8 - offset),
            datasets: [
                {
                    label: "Grève des étudiants en jour",
                    data: data.students.data.slice(-8 - offset),
                    backgroundColor: "#b88596"
                },
                {
                    label: "Grève du SECES en jour",
                    data: data.professors.data.slice(-8 - offset),
                    backgroundColor: "#9b95f0"
                },
                {
                    label: "Grève du personnel en jour",
                    data: data.staff.data.slice(-8 - offset),
                    backgroundColor: "#eca898"
                },
            ]}
       

    const barChartOptions = {
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 0,
                max: 40
            }
        }
    }

    return (
        <div className="bar-chart-container">
            <Bar 
                data={barChartDatas} 
                options={barChartOptions}
            />
        </div>
    )
}
