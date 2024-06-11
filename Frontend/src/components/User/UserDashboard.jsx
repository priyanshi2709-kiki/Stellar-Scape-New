  import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDashboard = () => {

  const [projects, setProjects] = useState([]);
  const [dbUser, setDbUser] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [currentGithubUser, setCurrentGithubUser] = useState(
    JSON.parse(sessionStorage.getItem('user'))
  );
  console.log(currentGithubUser.username);

  const getUserDataFromDB = async () => {
    const res = await fetch('http://localhost:3000/user/getbygithubuser/' + currentGithubUser.username);
    console.log(res.status);

    const data = await res.json();
    console.log(data);
    await fetchProject(data._id)
    setDbUser(data);
  }

  const fetchProject = async (userid) => {
    const res = await fetch("http://localhost:3000/enroll/getbyintern/" + userid);

    console.log(res.status);

    const data = await res.json();
    console.log(data);
    setProjects(data);
  };

  useEffect(() => {
    getUserDataFromDB();
  }, []);

  return (
    <div>
      <h2 className='mt-5 mx-5' style={{ fontFamily: 'sans-serif', fontWeight: 'bolder', color: '#02084b' }}>Total Enrolled Projects</h2>
      <hr style={{}} />
      <ul>
        {projects.map(({ project }) => (
          <div className='container'>
            {/* <li key={project._id}>{project.name}</li>
            <li key={project._id}>{project.status}</li> */}
            <div className="row">
              <div className="col-md-6">
                <div className="card" style={{marginTop:'20px',marginBottom:'15px', width:'700px', padding:'20px',backgroundColor: 'ButtonShadow',border:'3px solid #02084b'}}>
                  <h2 style={{fontFamily:'serif', fontWeight:'bold',color:'#02084b'}}>{project.name}</h2>
                  <h5 style={{marginTop:'10px'}}>Status : {project.status}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserDashboard;