# express-mysql-demo
This is a demonstration application that uses Express.js to serve a static HTML file and connect to a MySQL database.

## Requirement
Node.js v16 or higher. You can download it from [here](https://nodejs.org/en/download/).

## Installation
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required packages by running the following command in your terminal:
```
npm install
```
# Database Configuration
To connect to your MySQL database, you need to update the database configuration in the `server.js` file. Replace the following placeholders with your actual database details:
- `host`: Your database host
- `user`: Your database user
- `password`: Your database password
- `database`: Your database name

# Running the Server
```
node server.js
```

# Accessing the Demo
Once the server is running, you can access the demo by opening your web browser and navigating to `http://localhost:3000`.