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
            <div className="col-md-4">
            <div class="ag-format-container">
                <div class="ag-courses_box">
                    <div class="ag-courses_item">
                        <Link to={'/View/' + pro._id} class="ag-courses-item_link">
                            <div class="ag-courses-item_bg"></div>

                            <div class="ag-courses-item_title">
                                {pro.pname}
                            </div>

                            <div class="ag-courses-item_date-box">
                                Start:
                                <span class="ag-courses-item_date">
                                    04.11.2022
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        ))
    }
    return (
        <div className='row mt-5 p-5'>
            {/* <div className='col md-4 '> */}

                {displayProjects()}
            {/* </div> */}
        </div>
    )
}
export default ProjectListing