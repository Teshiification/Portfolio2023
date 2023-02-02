'use client'
import React, { FC } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const exampleData = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
        },
    ],
}

export interface DoughnutChartProps {
    labels: string[]
    datasets: {
        label: string
        data: number[]
        backgroundColor: string[]
        hoverOffset: number
    }[]
}

export function DoughnutChart(data: DoughnutChartProps) {
    const config = {
        type: 'doughnut',
        data: data,
    }

    return <Doughnut data={data} />
}
