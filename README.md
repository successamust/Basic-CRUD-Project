# **Task Management (To-Do List) API**  

A simple **RESTful API** built with **Node.js** and **Express** for managing tasks. This API supports **CRUD operations** (Create, Read, Update, Delete) and stores tasks in memory (for development purposes).  

---

## **📌 Table of Contents**  
- [Features](#-features)  
- [Technologies Used](#-technologies-used)  
- [API Endpoints](#-api-endpoints)  
- [Setup & Installation](#-setup--installation)  
- [Usage Examples](#-usage-examples)  
- [Error Handling](#-error-handling)  
- [Future Improvements](#-future-improvements)  
- [License](#-license)  

---

## **✨ Features**  
✅ **Create** new tasks with `title` and `description`  
✅ **Retrieve** all tasks  
✅ **Update** existing tasks  
✅ **Delete** tasks  
✅ **Basic validation** (checks for required fields)  
✅ **In-memory storage** (for simplicity; replace with a database in production)  

---

## **🛠 Technologies Used**  
- **Node.js** (JavaScript runtime)  
- **Express** (Web framework)  
- **Git** (Version control)  
- **Postman/Thunder Client** (API testing)  

---

## **🌐 API Endpoints**  

| **Method** | **Endpoint**       | **Description**                        | **Request Body**                          |
|------------|-------------------|----------------------------------------|------------------------------------------|
| `GET`      | `/`               | Get all tasks                          | None                                     |
| `POST`     | `/task`           | Create a new task                      | `{ "title": "string", "description": "string" }` |
| `PUT`      | `/task/:id`       | Update a task by ID                    | `{ "title": "string", "description": "string" }` |
| `DELETE`   | `/task/:id`       | Delete a task by ID                    | None                                     |

---

## **⚙ Setup & Installation**  

### **1. Clone the Repository**  
```bash
git clone https://github.com/yourusername/task-management-api.git
cd task-management-api
```

### **2. Install Dependencies**  
```bash
npm install
```

### **3. Start the Server**  
```bash
npm start
# or for development (with nodemon):
npm run dev
```

### **4. Test the API**  
- Open **Postman**, **Thunder Client (VS Code)**, or use `curl`.  
- The server runs at:  
  ```bash
  http://localhost:7550
  ```

---

## **📡 Usage Examples**  

### **1. Create a Task (POST)**  
**Request:**  
```bash
POST http://localhost:7550/task
```
**Body (JSON):**  
```json
{
  "title": "Complete project",
  "description": "Finish the API documentation"
}
```
**Response:**  
```json
{
  "message": "Task successfully created",
  "task": {
    "id": 1,
    "title": "Complete project",
    "description": "Finish the API documentation"
  }
}
```

### **2. Get All Tasks (GET)**  
**Request:**  
```bash
GET http://localhost:7550/
```
**Response:**  
```json
{
  "items": [
    {
      "id": 1,
      "title": "Complete project",
      "description": "Finish the API documentation"
    }
  ]
}
```

### **3. Update a Task (PUT)**  
**Request:**  
```bash
PUT http://localhost:7550/task/1
```
**Body (JSON):**  
```json
{
  "title": "Updated task",
  "description": "New description"
}
```
**Response:**  
```json
{
  "message": "Task successfully updated",
  "task": {
    "id": "1",
    "title": "Updated task",
    "description": "New description"
  }
}
```

### **4. Delete a Task (DELETE)**  
**Request:**  
```bash
DELETE http://localhost:7550/task/1
```
**Response:**  
```json
{
  "message": "Task deleted successfully"
}
```

---

## **⚠ Error Handling**  
The API returns appropriate HTTP status codes:  
- `400 Bad Request` → Missing `title` or `description`  
- `404 Not Found` → Task ID does not exist  
- `500 Internal Server Error` → Unexpected server errors  

