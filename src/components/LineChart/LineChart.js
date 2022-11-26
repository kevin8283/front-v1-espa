import React from 'react'
import "./LineChart.css"
import { Chart as ChartJS } from "chart.js/auto"
import { Line } from "react-chartjs-2"

export default function LineChart({ data, label, colors, max, min }) {

    const lineChartDatas = {
        labels: data.labels,
        datasets: [
          {
            label: label,
            data: data.data,
            fill: true,
            backgroundColor: colors.fillColor,
            borderColor: colors.lineColor,
            tension: data?.tension || 0.25
          }
        ]
    }

    const lineChartOptions = {
        maintainAspectRatio: false,
        pointRadius: data?.pointRadius || 0.25,
        scales: {
            y: {
                min: min,
                max: max
            }
        }
    }

  return (
    <div className="line-chart-container">
        <Line 
            datasetIdKey='id'
            data={lineChartDatas}
            options={lineChartOptions}
        />
    </div>
  )
}
