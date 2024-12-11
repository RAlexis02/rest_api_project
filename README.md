# rest_api_project


🌐 REST API Project

This project is a simple REST API built with Node.js and Express, containerized using Docker for easy deployment. It serves a basic webpage that displays the message:
"Hello, REST API!"

✨ Features
🚀 Serves a static webpage via a REST API.
📦 Dockerized for easy deployment.
🔄 Compatible with Docker Compose.
🛠️ Requirements
To run this project, you need the following:

Docker Installed:

Download and install Docker from the official website: Docker Desktop.
After installation, ensure Docker is running by opening the Docker Desktop application.
Verify Docker Installation:
Open a terminal or command prompt and run:

bash
Copiar código
docker --version
You should see the Docker version number. If not, ensure Docker is installed correctly and running.

🚀 How to Run
Option 1: Pull and Run the Docker Image
Pull the Image:
Open a terminal or command prompt and run:

bash
Copiar código
docker pull rommela462/container.1
Run the Container:
Execute the following command:

bash
Copiar código
docker run -d -p 8080:8080 rommela462/container.1
-d: Runs the container in detached mode (in the background).
-p 8080:8080: Maps port 8080 on your machine to port 8080 inside the container.
Open the Application:
Open your browser and navigate to:
👉 http://localhost:8080

Verify the Container:
Check if the container is running:

bash
Copiar código
docker ps
This will display a list of active containers. You should see rommela462/container.1.

Stop the Container (optional):
To stop the container, run:

bash
Copiar código
docker stop <container_id>
Replace <container_id> with the ID of the running container from docker ps.

Remove the Container (optional):
If you no longer need the container, remove it with:

bash
Copiar código
docker rm <container_id>
Option 2: Build and Run Locally
Clone the project:
bash
Copiar código
git clone https://github.com/<your_username>/rest_api_project.git
Navigate to the project directory:
bash
Copiar código
cd rest_api_project
Build the Docker image:
bash
Copiar código
docker build -t rommela462/container.1 .
Run the container:
bash
Copiar código
docker run -d -p 8080:8080 rommela462/container.1
Open the application in your browser:
👉 http://localhost:8080
Option 3: Use Docker Compose
Ensure you're in the project directory containing the docker-compose.yml file.
Start the application:
bash
Copiar código
docker-compose up --build
Stop the application:
bash
Copiar código
docker-compose down
📂 Project Structure
go
Copiar código
rest_api_project/
├── Dockerfile
├── docker-compose.yml
├── index.js
├── package.json
└── index.html
index.html: A simple HTML file with the message "Hello, REST API!".
index.js: A Node.js script serving the HTML file via a REST API.
Dockerfile: A Docker configuration file to containerize the application.
docker-compose.yml: A configuration file for Docker Compose to simplify deployment.
🧪 Testing the Application
Verify the application in the browser:
👉 http://localhost:8080

Use docker ps to confirm the container is running.

🛠️ Troubleshooting
Docker Not Running:
Ensure Docker Desktop is open and running before executing any Docker commands.

Port Conflict:
If port 8080 is already in use, modify the port mapping in the docker run or docker-compose.yml file. For example:

bash
Copiar código
docker run -d -p 9090:8080 rommela462/container.1
Then access the application at 👉 http://localhost:9090.

Permission Issues:
Ensure you have sufficient permissions to run Docker commands. On some systems, you may need to prefix commands with sudo.

📜 License
This project is open-source and available under the MIT License.

