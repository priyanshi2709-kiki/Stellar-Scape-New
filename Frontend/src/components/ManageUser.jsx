import React from 'react'

const ManageUser = () => { // logic for backend
    const [Data, setData] = useState([])

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:3000/user/getall',)
        console.log(res.status)
        if (res.status === 200) {
            const data = await res.json()
            console.log(data)
        }
    }
    useEffect(() => {
        fetchUserData()
    }, [])
    const displayUsers = () => {
        return Data.map((user) => {
            <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                    <button className='btn btn-danger'>Delete</button>
                </td>
            </tr>
        })
    }
    return (
        <div className='d-flex justify-content-center'>
            <header className='bg-success d-flex justify-content-center text-white tecxt-center w-75'>
                <div className="contianer py-5">
                    <h1>Manage Users</h1>
                </div>
            </header >
            <div className="container">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayUsers()}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ManageUser