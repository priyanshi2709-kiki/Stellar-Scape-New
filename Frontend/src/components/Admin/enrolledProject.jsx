import React, { useState, useEffect } from "react";
import { Pie } from 'react-chartjs-2';
import { Chart, LinearScale, ArcElement } from 'chart.js';

Chart.register(LinearScale, ArcElement);

const EnrolledProject = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState("");
  const [chartData, setChartData] = useState(null);
  const [enrollList, setEnrollList] = useState([]);

  useEffect(() => {
    // Fetch projects from backend
    const fetchProjects = async () => {
      const response = await fetch("http://localhost:3000/project/getall");
      const projects = await response.json();
      setProjects(projects);
      if (projects.length > 0) {
        setSelectedProject(projects[0]._id);
    }
  };

    fetchProjects();
  }, []);

  useEffect(() => {
    fetchEnrollData();
  }, [])

  const getUniqueProjectName = (enrollList) => {
    const projectlist = enrollList.map(enroll => enroll.project);
    return projectlist.map((project) => { return project.name })
  }
  

  const fetchEnrollData = async () => {
    const response = await fetch(`http://localhost:3000/enroll/getall`);
    const data = await response.json();
    console.log(data);
    setEnrollList(data);
    // const names = new Set(getUniqueProjectName(data));
    // console.log(names);
  }

  const fetchData = async () => {
    if (!selectedProject) return;
    console.log(selectedProject);
    const response = await fetch(`http://localhost:3000/enroll/getbyproject/${selectedProject}`);
    const data = await response.json();
    console.log(data);
    setChartData({
      labels: [data.name],
      datasets: [
        {
          label: 'Enrolled Users',
          data: [data.enrolledUsersCount],
          backgroundColor: ['#8884d8'],
          
        },
      ],
    });
  };

  useEffect(() => {
    // Fetch data for selected project
    

    fetchData();
  }, [selectedProject]);

  const handleSelectProject = (e) => {
    setSelectedProject(e.target.value);
  };

  const getEnrolledProjectNumber = (enrollList) => {
    const projectlist = enrollList.map(enroll => enroll.project);
    return projectlist.map((project) => { return project.enrolledUsersCount })
  }

  return (
    <div>
      <select value={selectedProject} onChange={handleSelectProject}>
        {projects.map(project => (
          <option key={project._id} value={project._id}>{project.name}</option>
        ))}
      </select>
      {enrollList && <Pie data={{
      labels: new Set(getUniqueProjectName(enrollList)),
      datasets: [
        {
          label: 'Enrolled Users',
          data: [2, 3, 4],
          backgroundColor: ['#8884d8'],
        },
      ],
    }} />}
    </div>
  );
}

export default EnrolledProject;