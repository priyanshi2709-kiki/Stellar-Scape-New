import React, {useState, useEffect} from 'react'

const ProjectListing = () => {
    const [project, setProject] = useState([])

    const fetchProject = async () => {
        const res = await fetch('http://localhost:3000/project/getall')
        console.log(res.status)
        if (res.status === 200){
            const data = await res.json();
            console.log(data)
            setProject(data)
        }
    }
    useEffect(() => {
        fetchProject()
    }, []);

    const displayProject = () =>{
        return project.map((item) => (
            <div className="container ">
                <div className="col-md-4">
                    <div className="card p-3 mb-5 bg-dark">
                        <h3 className='mt-3 text-light'>{item.pname}</h3>
                        <h5 className='mt-3 text-light'>{item.pprice}</h5>
                        <p className='mt-3 text-light'>{item.pdescription}</p>
                        <p className='mt-3 text-light'>{item.pcategory}</p>
                        <p className='mt-3 text-light'>{item.image}</p>
                    </div>
                </div>
            </div>
        ))
    }
  return (
    <div>
        <header className='bg-body-tertiary'>
            <div className="container py-5">
                <p className='text-center fw-bold'>All Projects</p>
                <input type='text' placeholder='Search Project' className='form-control w-75 m-auto' />
            </div>
        </header>

        <div className="container mt-5">
            <div className="row mt-5 p-5">
                {displayProject()}
            </div>
        </div>
    </div>
  )
}

export default ProjectListing