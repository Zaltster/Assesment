// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement, LineElement, PointElement, ArcElement } from 'chart.js';
import 'chart.js/auto';

ChartJS.register(
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement,
    LineElement,
    PointElement,
    ArcElement
);

const Dashboard = () => {
    const [lineChartData, setLineChartData] = useState<any>(null);
    const [barChartData, setBarChartData] = useState<any>(null);
    const [pieChartData, setPieChartData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resLine = await fetch('http://localhost:8000/api/line-chart-data/');
                const line = await resLine.json();
                setLineChartData(line);

                const resBar = await fetch('http://localhost:8000/api/bar-chart-data/');
                const bar = await resBar.json();
                setBarChartData(bar);

                const resPie = await fetch('http://localhost:8000/api/pie-chart-data/');
                const pie = await resPie.json();
                setPieChartData(pie);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <div>
                <h2>Line Chart</h2>
                {lineChartData && <Line data={lineChartData} />}
            </div>
            <div>
                <h2>Bar Chart</h2>
                {barChartData && <Bar data={barChartData} />}
            </div>
            <div>
                <h2>Pie Chart</h2>
                {pieChartData && <Pie data={pieChartData} />}
            </div>
        </div>
    );
};

export default Dashboard;
