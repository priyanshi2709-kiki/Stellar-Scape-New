import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom'

const AddTaskSchema = Yup.object().shape({});

const AddTask = ({ projectId }) => {
    const navigate = useNavigate();

    const [selTask, setSelTask] = useState("");


    const addTaskForm = useFormik({
        initialValues: {
            projectId: projectId,
            task1: '',
            task2: '',
            task3: '',
            desc1: '',
            desc2: '',
            desc3: '',
            desc4: '',
            desc5: '',
            task4: '',
            task5: '',
            status: '',
            progress: '',
            createdAt: new Date()
        },
        onSubmit: async (values, action) => {
            // values.projectid = selTask._id; /* the ID of the project to which the task should be added */
            console.log(values);


            // const data = typeof values === 'string' ? { content: markdownContent } : { ...values, content: markdownContent };

            const res = await fetch('http://localhost:3000/task/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);
            action.resetForm();

            if (res.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Item Uploaded Successfully",
                });
                enqueueSnackbar('Project Added Successfully', {
                    variant: 'success', anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right',
                    }

                });
                navigate('/Project')
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Something went wrong",
                });
            }
        },
        validationSchema: AddTaskSchema
    });
    return (
        <div className='d-flex mx-auto'>
            {/* <h2>Add Task</h2> */}
            <form onSubmit={addTaskForm.handleSubmit}>
                <input className='mb-2 mx-5 w-75' type="text" name="task1" placeholder="Task 1" onChange={addTaskForm.handleChange} value={addTaskForm.values.task1} />
                <textarea className='mb-2 mx-5 w-75' type="text" name="desc1" placeholder="Description 1" onChange={addTaskForm.handleChange} value={addTaskForm.values.desc1} />
                <input className='mb-2 mx-5 w-75' type="text" name="task2" placeholder="Task 2" onChange={addTaskForm.handleChange} value={addTaskForm.values.task2} />
                <textarea className='mb-2 mx-5 w-75' type="text" name="desc2" placeholder="Description 2" onChange={addTaskForm.handleChange} value={addTaskForm.values.desc2} />
                <input className='mb-2 mx-5 w-75' type="text" name="task3" placeholder="Task 3" onChange={addTaskForm.handleChange} value={addTaskForm.values.task3} />
                <textarea className='mb-2 mx-5 w-75' type="text" name="desc3" placeholder="Description 3" onChange={addTaskForm.handleChange} value={addTaskForm.values.desc3} />
                <input className='mb-2 mx-5 w-75' type="text" name="task4" placeholder="Task 4" onChange={addTaskForm.handleChange} value={addTaskForm.values.task4} />
                <textarea className='mb-2 mx-5 w-75' type="text" name="desc4" placeholder="Description 4" onChange={addTaskForm.handleChange} value={addTaskForm.values.desc4} />
                <input className='mb-2 mx-5 w-75' type="text" name="task5" placeholder="Task 5" onChange={addTaskForm.handleChange} value={addTaskForm.values.task5} />
                <textarea className='mb-2 mx-5 w-75' type="text" name="desc5" placeholder="Description 5" onChange={addTaskForm.handleChange} value={addTaskForm.values.desc5} />
                {/*<input className='mb-2 mx-5 w-75' type="text" name="status" placeholder="Status" onChange={addTaskForm.handleChange} value={addTaskForm.values.status} />
                <input className='mb-4 mx-5 w-75' type="text" name="progress" placeholder="Progress" onChange={addTaskForm.handleChange} value={addTaskForm.values.progress} />*/}
                <div>
                    <button type="submit" className="btn btn-primary w-75 mx-5">
                        Submit
                    </button>
                </div>
            </form>

        </div>
    )
}

export default AddTask
