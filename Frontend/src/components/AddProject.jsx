import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import logo from '../assets/logo.svg'

const addProjectSchema = Yup.object().shape({});
const AddProject = () => {

    const Navigate = useNavigate();
    const [selFile, setSelFile] = useState("");

    const addProjectForm = useFormik({
        initialValues: {
            pname: "",
            pinfo: "",
            pdescription: "",
            pcategory: "",
            image: "",
        },

        onSubmit: async (values, action) => {
            values.image = selFile;
            console.log(values);
            const res = await fetch("http://localhost:3000/project/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json" },
            });
            console.log(res.status);
            action.resetForm();
            if (res.status === 200) {
                // toast("Item uploaded successfully")
                Navigate("/AddProject")
            }
            else {
                //    toast("Something went wrong")
            }
        },
        validationSchema: addProjectSchema,

    });
    const uploadFile = async (e) => {
        let file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append('myfile', file);

        const res = await fetch('http://localhost:3000/util/uploadfile', {
            method: 'POST',
            body: fd
        })
        console.log(res.status);
    }
    const multipleFile = async (e) => {
        let file = e.target.files[0];
        setSelFile(file.name);
        const fd = new FormData();
        fd.append('myfile', file);

        const res = await fetch('http://localhost:3000/util/getfile', {
            method: 'POST',
            body: fd
        })
        console.log(res.status);
    }
    return (
        <div className="container-fluid px-4 py-5 mx-auto backk">
      <div className="maincard">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="cardleft">
          <form onSubmit={addProjectForm.handleSubmit}>
            <div className="row justify-content-center my-auto">
              <div className="col-md-8 col-10 my-5" style={{marginLeft:'-40px', marginRight:'40px'}}>
                <div className="row justify-content-center px-3 mb-3">
                  <img src={logo} style={{width:'100%', marginTop: '-50px'}} />
                </div>
                <h5 className="msg-info" >Add new projects</h5>
                  <div className="form-group fields">
                    <label className="form-control-label text-muted ">Project name</label>
                    <span style={{ color: 'red', fontSize: '10', marginLeft: 10 }}>{addProjectForm.touched.pname && addProjectForm.errors.pname}</span>
                    <input
                      type="text"
                      className="form-control mb-4"
                      id='pname'
                      placeholder="Enter project name"
                      onChange={addProjectForm.handleChange}
                      value={addProjectForm.values.pname} />
                  </div>
                  <div className="form-group fields">
                    <label className="form-control-label text-muted">Project Info</label>
                    <span style={{ color: 'red', fontSize: '10', marginLeft: 10 }}>{addProjectForm.touched.pinfo && addProjectForm.errors.pinfo}</span>
                    <input
                      type="text"
                      id="pinfo"
                      placeholder="Enter project information"
                      className="form-control"
                      onChange={addProjectForm.handleChange}
                      value={addProjectForm.values.pinfo} />
                  </div>
                  <div className="form-group fields ">
                    <label className="form-control-label text-muted">Project Description</label>
                    <span style={{ color: 'red', fontSize: '10', marginLeft: 10 }}>{addProjectForm.touched.pdescription && addProjectForm.errors.pdescription}</span>
                    <input
                      type="text"
                      id="pdescription"
                      placeholder="Add  description to your project"
                      className="form-control"
                      onChange={addProjectForm.handleChange}
                      value={addProjectForm.values.pdescription} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="imageUrl" className="form-control-label text-muted">Add Image</label>
                    <span style={{ color: 'red', fontSize: '10', marginLeft: 10 }}></span>
                    <input
                        type="file"
                        name="image"
                        onChange={uploadFile}
                        className="form-control mb-3"
                        required=''
                    />
                </div>
                <div className="row justify-content-center my-3 px-3">
                    <button className="btn-block btn-color">Add Project</button>
                </div>
              </div>
            </div>
            </form>
          </div>
          <div className="cardright">
            <div className="my-auto mx-md-5 px-md-5 right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddProject