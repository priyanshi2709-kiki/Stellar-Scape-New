import {  useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
const addProjectSchema = Yup.object().shape({});

// import toast from 'react-hot-toast';


const AddProject = () => {


    const Navigate = useNavigate();
    const [selFile, setSelFile] = useState("");

    const addProjectForm = useFormik({
        initialValues: {
            pname: "",
            pdescription: "",
            pprice: "",
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
        <>

            
            <form onSubmit={addProjectForm.handleSubmit} className="mb-2 w-50 m-auto mt-5 ">
                <div className="form-group">
                    <label htmlFor="pname" className="mt-5 mb-2">pname</label>
                    <input
                        type="text"
                        name='pname'
                        onChange={addProjectForm.handleChange}
                        value={addProjectForm.values.pname}
                        className="form-control mb-3"
                        required=""
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="imageUrl" className="mb-2"></label>
                    <input
                        type="file"
                        name="image"
                        onChange={uploadFile}
                        className="form-control mb-3"
                        required=''
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="imageUrl" className="mb-2"></label>
                    <input
                        type="file"
                        name="image"
                        onChange={multipleFile}
                        className="form-control mb-3"
                        required=''
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pdescription" className="mb-2">pdetail</label>
                    <textarea
                        name="pdescription"
                        onChange={addProjectForm.handleChange}
                        value={addProjectForm.values.pdescription}
                        className="form-control mb-4"
                        required=''
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pprice" className="mb-2">price</label>
                    <textarea
                        name="pprice"
                        onChange={addProjectForm.handleChange}
                        value={addProjectForm.values.pprice}
                        className="form-control mb-4"
                        required=''
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pcategory" className="mb-2">pcategory</label>
                    <textarea
                        name="pcategory"
                        onChange={addProjectForm.handleChange}
                        value={addProjectForm.values.pcategory}
                        className="form-control mb-4"
                        required=''
                    />
                </div>

                <button type='submit' className="btn  mb-5 w-25"> Add Project</button>


            </form>

           
        </>
    )
}


export default AddProject