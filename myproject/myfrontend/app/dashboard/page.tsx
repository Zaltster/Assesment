"use client";
import { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

// Define types for the data you expect
interface ChartData {
    labels: string[];
    data: number[];
}

const Dashboard = () => {
    const [lineChartData, setLineChartData] = useState<any>(null);
    const [barChartData, setBarChartData] = useState<any>(null);
    const [pieChartData, setPieChartData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch Line Chart Data
                const resLine = await fetch('http://127.0.0.1:8000/api/line-chart-data/');
                if (!resLine.ok) throw new Error('Line chart data fetch failed');
                const line = await resLine.json();
                console.log('Line Chart Data:', line); // Log data
                setLineChartData({
                    labels: line.labels,
                    datasets: [{
                        label: 'Line Chart Data',
                        data: line.data,
                        borderColor: 'rgba(75,192,192,1)',
                        backgroundColor: 'rgba(75,192,192,0.2)',
                    }]
                });

                // Fetch Bar Chart Data
                const resBar = await fetch('http://127.0.0.1:8000/api/bar-chart-data/');
                if (!resBar.ok) throw new Error('Bar chart data fetch failed');
                const bar = await resBar.json();
                console.log('Bar Chart Data:', bar); // Log data
                setBarChartData({
                    labels: bar.labels,
                    datasets: [{
                        label: 'Bar Chart Data',
                        data: bar.data,
                        backgroundColor: 'rgba(54,162,235,0.2)',
                        borderColor: 'rgba(54,162,235,1)',
                        borderWidth: 1,
                    }]
                });

                // Fetch Pie Chart Data
                const resPie = await fetch('http://127.0.0.1:8000/api/pie-chart-data/');
                if (!resPie.ok) throw new Error('Pie chart data fetch failed');
                const pie = await resPie.json();
                console.log('Pie Chart Data:', pie); // Log data
                setPieChartData({
                    labels: pie.labels,
                    datasets: [{
                        label: 'Pie Chart Data',
                        data: pie.data,
                        backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,206,86,0.2)'],
                        borderColor: ['rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(255,206,86,1)'],
                        borderWidth: 1,
                    }]
                });
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
                {lineChartData ? <Line data={lineChartData} /> : <p>Loading...</p>}
            </div>
            <div>
                <h2>Bar Chart</h2>
                {barChartData ? <Bar data={barChartData} /> : <p>Loading...</p>}
            </div>
            <div>
                <h2>Pie Chart</h2>
                {pieChartData ? <Pie data={pieChartData} /> : <p>Loading...</p>}
            </div>
        </div>
    );
};

export default Dashboard;
