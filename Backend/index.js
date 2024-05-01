const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const userRouter = require('./Routers/user');
const addProjectRouter = require('./Routers/addProject');
app.use(cors({
    origin: ['http://localhost:5173'] 
}))
//middleware
app.use(express.json());
app.use('/user', userRouter)
app.use('/project', addProjectRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});