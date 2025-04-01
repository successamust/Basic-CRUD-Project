// Import Express framework to create the server
const express = require('express');

// Initialize Express application
const app = express();

// In-memory array to store tasks (replace with database in production)
const task = [];

// Middleware to parse JSON request bodies
app.use(express.json());

/**
 * POST /task - Create a new task
 * Request body: { title: string, description: string }
 */
app.post('/task', async(req, res) => {
    // Destructure title and description from request body
    const { title, description } = req.body;

    // Validate required fields
    if (!title || !description) {
        return res.status(400).json({ // 400 = Bad Request
            message: 'Title and description are required'
        });
    }

    // Create new task object
    const newTask = {
        id: task.length + 1, // Simple auto-increment ID
        title,
        description
    };

    // Add to in-memory array
    task.push(newTask);

    // Return success response with created task
    res.status(201).json({ // 201 = Created
        message: "Task successfully created",
        task: newTask
    });
});

// Sample data (consider removing since we have 'task' array)
let items = [
    { id: "1", title: "buy groceries", description: "Get milk, eggs, bread" }
];

/**
 * GET / - Get all tasks
 */
app.get('/', (req, res) => {
    res.json({
        items: task, // Returns all tasks
    });
});

/**
 * PUT /task/:id - Update a task by ID
 * URL params: id (string)
 * Request body: { title: string, description: string }
 */
app.put('/task/:id', (req, res) => {
    const taskId = req.params.id;
    const { title, description } = req.body;
    
    // Validate required fields
    if (!title || !description) {
        return res.status(400).json({
            message: 'Title and description are required'
        });
    }

    // Find task in sample items array (should use 'task' array for consistency)
    const task = items.find(t => t.id === taskId);
    
    // Handle task not found
    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    // Update task properties
    task.title = title;
    task.description = description;

    // Return updated task
    res.status(200).json({
        message: "Task successfully updated", 
        task
    });
});

/**
 * DELETE /task/:id - Delete a task by ID
 * URL params: id (string)
 */
app.delete('/task/:id', (req, res) => {
    // Note: Should be req.params.id (fixed typo from req.param.id)
    const taskId = req.params.id;

    // Find task index in sample items array
    const taskIndex = items.findIndex(t => t.id === taskId);

    // Handle task not found
    if (taskIndex === -1) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    // Remove task from array
    items.splice(taskIndex, 1);

    // Return success message
    res.status(200).json({
        message: "Task deleted successfully"
    });
});

// Server configuration
const PORT = 7550;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});