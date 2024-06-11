import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, BarController, CategoryScale, LinearScale, BarElement } from 'chart.js';

Chart.register(BarController, CategoryScale, LinearScale, BarElement);

const AdminDashboard = () => {
  const [graph, setGraph] = useState({
    labels: [],
    datasets: [
      {
        label: 'Project Creation Dates',
        data: [],
        backgroundColor: '', // Set this as needed
        borderColor: 'rgba(75,192,192,1)', // Set this as needed
        borderWidth: 1, // Set this as needed
      },
    ],
  });

  const [pieData, setPieData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [], // Colors for the pie slices
      },
    ],
  });

  const [chartLoading, setChartLoading] = useState(false);

  useEffect(() => {
    setChartLoading(true);
    axios.get('http://localhost:3000/project/getall')
      .then(res => {
        const countryData = res.data;
        let projectName = [];
        let createdAt = [];

        if (Array.isArray(countryData)) {
          countryData.forEach(element => {
            projectName.push(element.name);
            createdAt.push(new Date(element.createdAt).toLocaleDateString()); // Convert date to a string
          });
        }

        setGraph({
          labels: projectName,
          datasets: [
            {
              ...graph.datasets[0],
              data: createdAt.map(date => new Date(date).getTime()), // Convert date strings to timestamps for the chart
            },
          ],
        });

        axios.get('http://localhost:3000/project/getInternCount')

          .then(res => {
            const projectData = res.data;
            let projectNames = [];
            let internCounts = [];
            let colors = []; // Colors for the pie slices
            console.log(res.data)

            if (Array.isArray(projectData)) {
              projectData.forEach(element => {
                projectNames.push(element.name);
                internCounts.push(element.internCount);
                colors.push('#' + Math.floor(Math.random()*16777215).toString(16)); // Generate a random color
                console.log(colors)
              });
            }
            console.log(internCounts);

            setPieData({
              labels: projectNames,
              datasets: [
                {
                  data: internCounts,
                  backgroundColor: colors,
                },
              ],
            });

            setChartLoading(false);
          });
      });
  }, []);

  return (
    <div>
      {chartLoading ? (
        <p>Loading charts...</p> // Display a loading message while the charts are loading
      ) : (
        <div >
          <h2 className='text-center mt-5'>Project Creation Date</h2>
          <div style={{ width: '70%', marginTop:'60px', marginLeft:"180px" }}>
            <Bar
              data={graph}
              options={{
                title: {
                  display: true,
                  text: 'Project Creation Dates',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
          <div style={{ width: '60%', height: '60%' }}>
            <Pie
              data={pieData}
              options={{
                title: {
                  display: true,
                  text: 'Intern Counts by Project',
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: 'right',
                },
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;