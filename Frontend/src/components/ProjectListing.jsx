import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../components/ProjectListing.css'
const ProjectListing = () => {
    const [project, setProject] = useState([])

    const fetchProject = async () => {
        const res = await fetch('http://localhost:3000/project/getall')
        console.log(res.status)
        if (res.status === 200) {
            const data = await res.json();
            console.log(data)
            setProject(data)
        }
    }
    useEffect(() => {
        fetchProject()
    }, []);

    const displayProjects = () => {
        return project.map((pro) => (
            <div className="ag-format-container-fluid bbody">
                <div className="col md-4 ag-courses_box">
                    <div className="ag-courses_item">
                        <a href="#" className="ag-courses-item_link">
                            <div className="ag-courses-item_bg" />
                            <div className="ag-courses-item_title">
                            <h3 className='mt-3 text-light'>{pro.pname}</h3>
                            <p className='mt-3 text-light'>{pro.pinfo}</p>
                        <img
                            src={"http://localhost:3000/" + pro.image}
                            alt=""
                        />

                             </div> 
                        </a>
                        <Link to={'/View/' + pro._id} className='btn pro-btn mt-4 bg-white'>View More</Link>

                    </div>                    
                </div>
            </div>
        ))
    }
    return (
        <div className='row mt-5 p-5'>
            <div className='col md-4 '>

                {displayProjects()}
            </div>
        </div>
    )
}
export default ProjectListing