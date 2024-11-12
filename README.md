---

# Microservices CRUD Application with Docker

This project is a simple microservices-based CRUD application built with a **frontend**, **backend API**, and **MongoDB** database. Each service runs in a separate Docker container, orchestrated using Docker Compose. The application allows users to add, view, and delete to-do items through a web interface.

## Project Structure

```plaintext
project-root/
├── frontend/
│   ├── Dockerfile
│   ├── index.html
│   └── script.js
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   └── package.json
├── docker-compose.yml
└── README.md
```

### Services

- **Frontend**: Serves the HTML and JavaScript for the user interface.
- **Backend**: Provides API endpoints to manage to-do items (CRUD operations).
- **Database**: MongoDB for data storage, managed as a Docker container.

## Getting Started

### Prerequisites

- **Docker** and **Docker Compose**: [Install Docker](https://docs.docker.com/get-docker/) if you haven’t already.

### Installation

1. **Clone the Repository**:
   ```
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Run the Application**:
   Use Docker Compose to build and run the application.
   ```
   docker-compose up --build
   ```

   This command builds the Docker images and starts all services defined in the `docker-compose.yml` file.

### Accessing the Application

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **API Endpoints**: [http://localhost:5000/api/todos](http://localhost:5000/api/todos)

### Stopping the Application

To stop the containers, press `CTRL+C` in the terminal where Docker Compose is running or use:
```
docker-compose down
```

## API Documentation

The API supports basic CRUD operations.

### 1. **GET** /api/todos
   - **Description**: Retrieve all to-do items.
   - **Response**:
     ```
     [
       { "_id": "unique_id_1", "text": "Sample To-Do 1", "__v": 0 },
       { "_id": "unique_id_2", "text": "Sample To-Do 2", "__v": 0 }
     ]
     ```

### 2. **POST** /api/todos
   - **Description**: Add a new to-do item.
   - **Request Body**:
     ```
     { "text": "New To-Do Item" }
     ```
   - **Response**:
     ```
     { "_id": "new_unique_id", "text": "New To-Do Item", "__v": 0 }
     ```

### 3. **DELETE** /api/todos/{id}
   - **Description**: Delete a to-do item by ID.
   - **Response**:
     ```
     { "message": "Todo deleted" }
     ```

## Testing with Postman

1. **GET** all to-dos: Set the request to **GET** and use the URL `http://localhost:5000/api/todos`.
2. **POST** a new to-do: Set the request to **POST** with the same URL. Go to the **Body** tab, select **raw**, and use **JSON** format to send:
   ```
   { "text": "New To-Do Item" }
   ```
3. **DELETE** a to-do: Set the request to **DELETE** and use the URL `http://localhost:5000/api/todos/{id}`, replacing `{id}` with the to-do item's ID.

## Project Configuration

The `docker-compose.yml` file defines the services, network, and volumes.

- **Frontend**: Runs an NGINX server to serve the frontend files.
- **Backend**: Uses Node.js and Express for the API and connects to MongoDB.
- **Database**: A MongoDB container with persistent storage via Docker volumes.

## Built With

- **Docker** - Containerization platform
- **Node.js & Express** - Backend server and API
- **MongoDB** - Database for storing to-do items
- **HTML, CSS, JavaScript** - Basic frontend interface

## Future Improvements

- **User Authentication**: Add user login functionality.
- **Detailed Frontend UI**: Improve the UI with styling frameworks like Bootstrap.
- **API Security**: Add validation and better error handling.

## Troubleshooting

- **Database Connection Issues**: Ensure MongoDB is running in Docker and accessible from the backend container.
- **Port Conflicts**: Change the ports in `docker-compose.yml` if 3000 or 5000 are in use.
- **Frontend Not Loading**: Clear browser cache or restart the frontend container.

---

This README should help you get the application up and running, test it, and understand the project's structure. Enjoy building and improving upon it!
