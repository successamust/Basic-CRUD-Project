// const express = require('express');

// const app = express();

// const task = []

// app.post('/task', async(req, res) =>{
//     const {title, description} = req.body;

//     if (!title || !description) {
//         return res.status(400).json({
//             message: 'Title and description are required'
//         });
//     }

//     const newTask = {
//         id: task.length + 1,
//         title,
//         description
//     };

//     task.push(newTask);

//     res.status(201).json({
//         message: "Task succesfully created",
//         task: new task
//     });
// })

// module.exports = api;