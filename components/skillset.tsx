import { DoughnutChart, DoughnutChartProps } from './charts/doughnut'

export interface SkillSetProps {
    className?: string
}

export default function SkillSet(props: SkillSetProps) {
    const webddevData: DoughnutChartProps = {
        labels: ['REACT', 'TailwindCSS', 'NextJS', 'Typescript'],
        datasets: [
            {
                label: 'Webdev',
                data: [25, 25, 25, 25],
                backgroundColor: [
                    'teal',
                    'lightblue',
                    'lightgreen',
                    'darkblue',
                ],
                hoverOffset: 4,
            },
        ],
    }

    const backdevData: DoughnutChartProps = {
        labels: ['C#', 'C++', 'Java', '.NET'],
        datasets: [
            {
                label: 'Backdev',
                data: [25, 25, 25, 25],
                backgroundColor: ['lightgreen', 'lightblue', 'red', 'teal'],
                hoverOffset: 4,
            },
        ],
    }

    const toolsData: DoughnutChartProps = {
        labels: ['Photoshop', 'Premiere', 'Blender', 'Unity'],
        datasets: [
            {
                label: 'Tools',
                data: [25, 25, 25, 25],
                backgroundColor: ['lightblue', 'purple', 'orange', 'gray'],
                hoverOffset: 4,
            },
        ],
    }

    return (
        <div className={`flex justify-around h-full ${props.className}`}>
            <DoughnutChart
                labels={webddevData.labels}
                datasets={webddevData.datasets}
            />
            <DoughnutChart
                labels={backdevData.labels}
                datasets={backdevData.datasets}
            />
            <DoughnutChart
                labels={toolsData.labels}
                datasets={toolsData.datasets}
            />
        </div>
    )
}
