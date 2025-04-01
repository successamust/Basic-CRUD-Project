const express = require ('express');
//const dotenv = require('dotenv');
//dotenv.config()

const app = express();

const task = []

app.use(express.json());


app.post('/task', async(req, res) =>{
    const {title, description} = req.body;

    if (!title || !description) {
        return res.status(404).json({
            message: 'Title and description are required'
        });
    }

    const newTask = {
        id: task.length + 1,
        title,
        description
    };

    task.push(newTask);

    res.status(200).json({
        message: "order succesfully created",
        task: newTask
    });
})

let items =[
    {id: "1", title: "buy groceries", description: "Get milk, eggs, bread"}
]

app.get('/', (req, res) => {
    res.json({
        items: task,
    })
})

app.put('/task/:id', (req, res) => {
    const taskId = (req.params.id);
    const {title, description} = req.body;
    
    if (!title || !description) 
    {
        return res.status(404).json({message: 'Title and description are required'});
    }
    const task = items.find(t => t.id === taskId);
    
    if (!task) {
        return res.status(404).json({message: "Order not found"});
    }

    task.title = title;
    task.description = description;

    res.status(200).json({message: "Order succesfully created", task});
});

app.delete('/task/:id', (req, res) => {
    const taskId = req.param.id; 

    const taskIdex = items.findIndex(t => t.id === taskId);

    if (taskIdex === -1) {
        return res.status(404).json({message: "Order not found"});
    }

    items.splice(taskIdex, 1);

    res.status(200).json({message: "Order deleted successfully"});
})

const PORT = 7550
app.listen(PORT, () => {
    console.log(`Now Listening to http://localhost:${PORT}`)
});

