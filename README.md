Follow the steps to run the project in Docker

Backend Setup

1. Clone the repository
   ```bash
   git clone https://github.com/husni-haniffa/coverage-x-todo-backend.git
   ```
2. Navigate to the project
   ```bash
   cd coverage-x-todo-backend
   ```
3. Run the docker command in terminal
   ```bash
   docker-compose up --build
   ```
4. Open [http://localhost:8080](http://localhost:8080) on the browser
   
Frontend Setup

1. Clone the repository
   ```bash
   git clone https://github.com/husni-haniffa/coverage-x-todo-frontend.git
   ```
2. Navigate to the project
   ```bash
   cd coverage-x-todo-frontend
   ```
3. Run the docker command in terminal
   ```bash
   docker build -t coverage-x-todo-frontend .
   ```
   ```bash
   docker run --name coverage-x-todo-frontend -p 3000:3000 coverage-x-todo-frontend
   ```
4. Open [http://localhost:3000](http://localhost:3000) on the browser

