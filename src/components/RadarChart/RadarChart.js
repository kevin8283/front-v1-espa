import React from 'react'
import "./RadarChart.css"
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

export default function RadarChart({ labels, data }) {

    const [thesisData, jobData] = data

    const radarChartData = {
        labels: labels,
        datasets: [
            {
                label: "Etudiants (domaine universitaire)",
                data: thesisData,
                backgroundColor: "#d8061450",
                borderColor: "#d80614",
                borderWidth: 1
            },
            {
                label: "Etudiants (domaine professionnel)",
                data: jobData,
                backgroundColor: "#9b95f080",
                borderColor: "#9b95f0",
                borderWidth: 1
            }
        ]
    }

    return (
        <div className="radar-chart">
            <Radar data={radarChartData}/>
        </div>
    )
}
