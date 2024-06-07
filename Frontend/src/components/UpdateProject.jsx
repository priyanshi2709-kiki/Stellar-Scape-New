import React, { useState, useEffect } from 'react';
import { Formik } from "formik";
import { useParams, useNavigate } from 'react-router-dom';
import AddTask from './AddTask';
import { enqueueSnackbar } from 'notistack';


const UpdateProject = () => {

  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);


  const navigate = useNavigate();

  const fetchProjectData = async () => {
    const res = await fetch("http://localhost:3000/project/getbyid/" + id);
    const data = await res.json();

    console.log(data);
    setProjectData(data);


  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  const submitForm = async (values) => {
    console.log(values);

    const res = await fetch('http://localhost:3000/project/update/' + id, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);

    if (res.status === 200) {
      enqueueSnackbar("Project Updated Successfully")
      navigate('/Project');
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProjectData(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:3000/util/uploadfile", {
        method: "POST",
        body: fd,
    }).then((res) => {
        if (res.status === 200) {
            console.log("file uploaded");
        }
    });
};

  return (
    <div>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center my-2">Update Project</h3>
            {projectData !== null ? (

              <Formik initialValues={projectData} onSubmit={submitForm}>

                {(addProjectForm) => (

                  <form onSubmit={addProjectForm.handleSubmit}>
                    <label>Project Name</label>

                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addProjectForm.errors.name}
                    </span>
                    <input
                      id="name"
                      onChange={addProjectForm.handleChange}
                      value={addProjectForm.values.name}
                      type="text"
                      className="form-control mb-4"
                    />

                    <label>Short Description</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addProjectForm.errors.description}
                    </span>
                    <input
                      id="description"
                      onChange={addProjectForm.handleChange}
                      value={addProjectForm.values.description}
                      type="text"
                      className="form-control mb-4"
                    />
                    <label>Project Description</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addProjectForm.errors.longDesc}
                    </span>
                    <textarea
                      id="longDesc"
                      onChange={addProjectForm.handleChange}
                      value={addProjectForm.values.longDesc}
                      type="text"
                      className="form-control mb-4"
                    />

                    <label>Project Status</label>
                    <input
                      id="status"
                      onChange={addProjectForm.handleChange}
                      value={addProjectForm.values.status}
                      type="text"
                      className="form-control mb-4"
                    />

                    <div className="form-outline">
                      <label className="form-label" htmlFor="form3Example1m1">
                        Upload Image
                      </label>
                      <input
                        type="file" 
                        className="form-control shadow"
                        onChange={uploadFile}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-3">
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            ) : (
              <h1 className="text-center my-5">Loading ... </h1>
            )}
          </div>
          <div className=''>
            <AddTask projectId={id}></AddTask>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProject;