import React,{useState, useEffect} from 'react'

const ManageProject = () => {
    const [Data, setData] = useState([])

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/product/getall')
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
        const res = await fetch("http://localhost:3000/product/delete/" + id, {
            method: "DELETE",
        });
        if (res.status === 200) {
            fetchUserData();
        }
    }

    const displayProject = () =>{
        return Data.map((obj) => (
            <tr>
                <td>{obj.pname}</td>
                <td>{obj.pprice}</td>
                <td>{obj.pcategory}</td>
                <td>{obj.pdescription}</td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>
                <td>
                    <button className="btn btn-danger">Update</button>
                </td>
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
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
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