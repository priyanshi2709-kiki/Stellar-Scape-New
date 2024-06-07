import React from 'react'
// import '../../Styles/ViewProject.css;
import MDEditor from "@uiw/react-md-editor";
import sea from '../assets/video.mp4'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const View= () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const isLoggedIn = sessionStorage.getItem('isloggedin');

    const [projects, setProjects] = useState(null);
    const [task, setTask] = useState([])
    const [isEnrolled, setIsEnrolled] = useState(false); // Set this based on whether the student is enrolled

    const [currentGithubUser, setCurrentGithubUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    );

    const [dbUser, setDbUser] = useState(null);

    console.log(currentGithubUser.username);

    const getUserDataFromDB = async () => {
        const res = await fetch('http://localhost:3000/user/getbygithubuser/' + currentGithubUser.username);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setDbUser(data);
        await checkUserEnrollment(data._id);
    }

    const fetchProject = async () => {
        const res = await fetch("http://localhost:3000/project/getbyid/" + id);

        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setProjects(data);
    };


    const fetchTask = async () => {
        const res = await fetch("http://localhost:3000/task/getbyproject/" + id);
        console.log(res.status);
        const task = await res.json();
        console.log(task)
        setTask(task)
    }
    useEffect(() => {
        fetchProject();
        fetchTask();
        getUserDataFromDB();
    }, []);

    const checkUserEnrollment = async (userid) => {
        console.log(userid);
        const res = await fetch('http://localhost:3000/enroll/check/' + userid + '/' + id);
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        if (data)
            setIsEnrolled(true);
        return data
    }

    const enrollFunc = async () => {
        // if(checkUserEnrollment()) return;
        try {
            const response = await fetch('http://localhost:3000/enroll/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    intern: dbUser._id,
                    project: projects._id,
                }),
            });

            if (!response.ok) {
                throw new Error('Enrollment failed');
            }

            setIsEnrolled(true);
        } catch (error) {
            console.error('Failed to enroll:', error);
            // Optionally update state or UI to indicate that the enrollment failed
        }
    };


    const displayData = () => {
        if (projects !== null) {
            return <div>
                <section className=' ' style={{ zIndex: 2 }}>
                    <div className="row ">
                        <div className="col-md-5 px-5">
                            <img
                                className="img-fluid p-card-img2 shadow"
                                src={"http://localhost:3000/" + projects.image}
                                alt=""
                            />
                        </div>

                        <div className='col-md-7 px-5' >
                            <h1 className='p-name d-flex justify-content-center' >{projects.name}</h1>
                            <div className=' p-desc d-flex justify-content-center'>
                                {isEnrolled ? ( 
                                    // <button className='enroll-btn btn btn-success-disabled'>You are already enrolled in this project</button>
                                    <h3 className=''>You are already enrolled in this project</h3>
                                ) : (
                                    <button type='submit' className='btn btn-dark enroll-btn' onClick={enrollFunc}>Click to Enroll</button>
                                )}
                            </div>
                        </div>

                    </div>
                    <div className="row d-flex justify-content-center ">
                        <div className="col-md-8">
                            <h3 className='' style={{marginTop:'150px', fontSize:'50px', color:'#02084b', fontFamily:'sans-serif', fontWeight:'bold'}}>Project Description</h3>
                            <p className='text-justify' style={{marginTop:'30px',fontSize:'20px', fontFamily:'sans-serif'}}>{projects.longDesc}</p>
                        </div>
                    </div>
                </section>

            </div>
        }
        else {
            return <div>
                <h1>Not Found</h1>
            </div>
        }
    }
    const displayTask = () => {
        return task.map((t) => (
            <div className='col-md-8 text-justify'>
                <h5 style={{fontSize:'30px',color:'#02084b'}}>1. {t.head1}</h5>
                <p>{t.desc1}</p>
                <h5 style={{fontSize:'30px',color:'#02084b'}}>2. {t.head2}</h5>
                <p>{t.desc2}</p>
                <h5 style={{fontSize:'30px',color:'#02084b'}}>3. {t.head3}</h5>
                <p>{t.desc3}</p>
                <h5 style={{fontSize:'30px',color:'#02084b'}}>4. {t.head4}</h5>
                <p>{t.desc4}</p>
                <h5 style={{fontSize:'30px',color:'#02084b'}}>5. {t.head5}</h5>
                <p>{t.desc5}</p>
            {isLoggedIn ? (
                <Link to={'/UpdateTask/' +t._id} className="btn btn-primary m-5 w-50">Update Task</Link>
            ) : null} 
            </div>
        ));
    }


    return (
        <div>
            <section>
                <div className='vid' >
                    <video className='Video' src={sea} alt="" autoPlay loop muted />
                </div>
            </section>

            <section className=''>
                {displayData()}
            </section>
            <h2 className='task-head d-flex mx-auto py-4' style={{color:'#02084b'}}>Task Section : Project Implementation Steps</h2>
            <section className='view-t' style={{ zIndex: 2 }}>
                {/* <h2 className='mb-5'>Task 1</h2> */}
                {displayTask()}
            </section>

        </div>
    )
}

export default View