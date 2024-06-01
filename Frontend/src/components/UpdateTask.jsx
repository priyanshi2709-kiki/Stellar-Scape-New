import React, { useState, useEffect } from 'react';
import { Formik } from "formik";
import { useParams, useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';


const UpdateTask = () => {

  const { id } = useParams();
  const [projectData, setProjectData] = useState(null);


  const navigate = useNavigate();

  const fetchProjectData = async () => {
    const res = await fetch("http://localhost:3000/task/getbyid/" + id);
    const data = await res.json();

    console.log(data);
    setProjectData(data);
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  const submitForm = async (values) => {
    console.log(values);

    const res = await fetch('http://localhost:3000/task/update/' + id, {
      method: 'PUT',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);

    if (res.status === 200) {
      enqueueSnackbar("Project Uploaded")
      navigate('/Project');
    }
  };

//   const uploadFile = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setProjectData(file.name);
//     const fd = new FormData();
//     fd.append("myfile", file);
//     fetch("http://localhost:3000/util/uploadfile", {
//         method: "POST",
//         body: fd,
//     }).then((res) => {
//         if (res.status === 200) {
//             console.log("file uploaded");
//         }
//     });
// };

  return (
    <div>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center my-2">Update Task</h3>
            {projectData !== null ? (

              <Formik initialValues={projectData} onSubmit={submitForm}>

                {(addTaskForm) => (

                  <form onSubmit={addTaskForm.handleSubmit}>
                    <label>Heading1</label>

                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addTaskForm.errors.head1}
                    </span>
                    <input
                      id="head1"
                      onChange={addTaskForm.handleChange}
                      value={addTaskForm.values.head1}
                      type="text"
                      className="form-control mb-4"
                    />

                    <label>Desription1</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addTaskForm.errors.desc1}
                    </span>
                    <textarea
                      id="desc1"
                      onChange={addTaskForm.handleChange}
                      value={addTaskForm.values.desc1}
                      type="text"
                      className="form-control mb-4"
                    />
                    <label>Heading2</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addTaskForm.errors.head2}
                    </span>
                    <input
                      id="head2"
                      onChange={addTaskForm.handleChange}
                      value={addTaskForm.values.head2}
                      type="text"
                      className="form-control mb-4"
                    />
                    <label>Desription2</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addTaskForm.errors.desc1}
                    </span>
                    <textarea
                      id="desc2"
                      onChange={addTaskForm.handleChange}
                      value={addTaskForm.values.desc2}
                      type="text"
                      className="form-control mb-4"
                    />
                    <label>Heading3</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addTaskForm.errors.head3}
                    </span>
                    <input
                      id="head3"
                      onChange={addTaskForm.handleChange}
                      value={addTaskForm.values.head3}
                      type="text"
                      className="form-control mb-4"
                    />
                    <label>Desription3</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addTaskForm.errors.desc3}
                    </span>
                    <textarea
                      id="desc3"
                      onChange={addTaskForm.handleChange}
                      value={addTaskForm.values.desc3}
                      type="text"
                      className="form-control mb-4"
                    />
                    <label>Heading4</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addTaskForm.errors.head3}
                    </span>
                    <input
                      id="head4"
                      onChange={addTaskForm.handleChange}
                      value={addTaskForm.values.head4}
                      type="text"
                      className="form-control mb-4"
                    />
                    <label>Desription4</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addTaskForm.errors.desc4}
                    </span>
                    <textarea
                      id="desc4"
                      onChange={addTaskForm.handleChange}
                      value={addTaskForm.values.desc4}
                      type="text"
                      className="form-control mb-4"
                    />
                     <label>Heading5</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addTaskForm.errors.head5}
                    </span>
                    <input
                      id="head5"
                      onChange={addTaskForm.handleChange}
                      value={addTaskForm.values.head5}
                      type="text"
                      className="form-control mb-4"
                    />
                     <label>Desription5</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addTaskForm.errors.desc5}
                    </span>
                    <textarea
                      id="desc5"
                      onChange={addTaskForm.handleChange}
                      value={addTaskForm.values.desc5}
                      type="text"
                      className="form-control mb-4"
                    />

                    <label>Project Status</label>
                    <input
                      id="status"
                      onChange={addTaskForm.handleChange}
                      value={addTaskForm.values.status}
                      type="text"
                      className="form-control mb-4"
                    />

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
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;