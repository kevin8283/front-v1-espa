import React from 'react'
import "./PieChart.css"
import { Chart as ChartJS } from "chart.js/auto"
import { Pie } from 'react-chartjs-2'

export default function PieChart({ labels, data, colors }) {
    const pieChartData = {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: colors,
        }],
        hoverOffset: 4
    }

    return (
        <div className="pie-chart-container">
            <Pie data={pieChartData}/>
        </div>
    )
}
