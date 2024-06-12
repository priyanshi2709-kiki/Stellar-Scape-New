import React,{useState, useEffect} from 'react'
import {useNavigate } from "react-router-dom";

const ManageUser= () => {
    const navigate = useNavigate(); 
    const [Data, setData] = useState([])

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/user/getall')
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
        const res = await fetch("http://localhost:3000/user/delete/" + id, {
            method: "DELETE",
        });
        if (res.status === 200) {
            fetchUserData();
        }
    }

    const displayProject = () =>{
        return Data.map((obj) => (
            <tr>
                <td>{obj.username}</td>
                <td>{obj.displayName}</td>
               
                <td>
                    <button className="btn btn-danger" onClick={() => { deleteProject(obj._id) }}>Delete</button>
                </td>
                {/* <td>
                    <button className="btn btn-danger" onClick={ () => { navigate('/UpdateProject/'+obj._id) }}>Update</button>
                </td> */}
            </tr>
        ))
    }
  return (
    <div>
        <header className='bg-danger text-white'>
            <div className="container py-5">
                <h1>Manage Project</h1>
            </div>
        </header>

        <div className="container mt-5">
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Display Name</th>
                       
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

export default ManageUser