import React, { useEffect, useState } from 'react'
import {useParams, Link} from 'react-router-dom'

const View = () => {
    const {id} = useParams();
    const [pro, setProduct] = useState({});

    const fetchProject = async () => {
        const res = await fetch("http://localhost:3000/project/getbyid/" + id);
        console.log(res.status);
        if (res.status === 200) {
            const data = await res.json();
            console.log(data);
            setProduct(data);
        };
      }
        useEffect(() => {
            fetchProject();
        }, [id]);
    

  return (
    <>
  <link
    href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
    rel="stylesheet"
    id="bootstrap-css"
  />
  {/*---- Include the above in your HEAD tag --------*/}
  <div className="container emp-profile">
    <form method="post">
      <div className="row">
        <div className="col-md-4">
          <div className="profile-img">
            <img
              src={"http://localhost:3000/"+ pro.image}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>{pro.pname}</h5>
            <h6>{pro.pinfo}</h6>
            <p className="proile-rating">
              RANKINGS : <span>8/10</span>
            </p>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Timeline
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <input
            type="submit"
            className="profile-edit-btn"
            name="btnAddMore"
            defaultValue="Edit Profile"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
        </div>
        <div className="col-md-8">
          <div className="tab-content profile-tab" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="row">
                <div className="col-md-6">
                  <label>Project Info</label>
                </div>
                <div className="col-md-6">
                  <p>{pro.pinfo}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Name</label>
                </div>
                <div className="col-md-6">
                  <p>{pro.pname}</p>
                </div>
              </div>
          </div>
        </div>
      </div>
      </div>
    </form>
  </div>
</>

    
  )
}

export default View