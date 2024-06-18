import React,{useState, useEffect} from 'react'
import {useNavigate } from "react-router-dom";

const ManageProject = () => {
    const navigate = useNavigate(); 
    const [Data, setData] = useState([])

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/project/getall')
        console.log(res.status)
        if (res.status === 200){
            const data = await res.json();
            console.log(data)
            setData(data)
        }
    }
    useEffect(() => {
        fetchUserData()
    }, [])

    const deleteProject = async (id) => {
        console.log(id);
        const res = await fetch("http://localhost:3000/project/delete/" + id, {
            method: "DELETE",
        });
        if (res.status === 200) {
            fetchUserData();
        }
    }
    // const updateProject = async (status) => {
    //     const res = await fetch("http://localhost:3000/project/update/" + id, {
    //         method: "PUT",
    //         header: { "Content-type": "application/json" },
    //         body : JSON.stringify({ status: "Completed"})
    //     });
    // } 

    const displayProject = () =>{
        return Data.map((obj) => (
            <tr>
                <td>{obj.name}</td>
                <td>{obj.description}</td>
                <td>
                    <button className="btn btn-primary" onClick={() => { deleteProject(obj._id) }}>Delete</button>
                </td>
                <td>
                    <button className="btn btn-primary" onClick={ () => { navigate('/UpdateProject/'+obj._id) }}>Update</button>
                </td>
            </tr>
        ))
    }
  return (
    <div>
        <header className='bg-primary text-white'>
            <div className="container py-5">
                <h1>Manage Project</h1>
            </div>
        </header>

        <div className="container mt-5">
            <table className="table table-info">
                <thead>
                    <tr>
                        <th>Name</th>
                     
                        <th>Description</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {displayProject()}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManageProject