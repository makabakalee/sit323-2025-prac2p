# SIT323/SIT737 - Cloud-Native Application Development (2.1P: Node.js & Express)


## Project Overview
This project is a hands-on task in a cloud-native application development course designed to help you become familiar with Node.js programming and set up a simple web server using the Express framework. The following knowledge will be acquired through this task:
- Programming in JavaScript and running in a Node.js environment
- Leverage the Express framework to quickly set up a web server and host static pages
- Use Git for version control and push code to GitHub repositories


## Environment Setup & Installation
Before starting, ensure the following tools are installed:
- **Git**  
  Download: [Git Official Site](https://git-scm.com/)  
  Verify: Run `git --version` in your terminal.
- **Visual Studio Code**  
  Download: [VS Code Official Site](https://code.visualstudio.com/)
- **Node.js** (includes npm)  
  Download: [Node.js Official Site](https://nodejs.org/)  
  Verify: Run `node -v` and `npm -v` in your terminal.
  

## Project initialization and dependency installation
1. Create a local folder named `sit323-2025-prac2p` to store all project files.
2. Go to the project folder:
   ```bash
   cd path/to/sit323-2025-prac2p
3. Initialize Node.js Project:
    ```bash
    npm init -y
4. Install Express Framework
    ```bash
    npm install express    


## Project Structure
SIT323-2025-PRAC2P/
├── node_modules/        // Node.js dependency installation directory (automatically generated by npm)
├── public/              // Directory for static files (HTML/CSS/JS/images, etc.)
│   └── ...              // (e.g., place index.html and other files here)
├── app.js               // Main entry file for the Node.js application
├── image.png            // Image file used in the project
├── package-lock.json    // Lock file automatically generated when installing dependencies with npm
├── package.json         // Node.js project configuration file, including dependencies, scripts, etc.
└── README.md            // Project documentation


## Code Implementation
1. <!--  Serve Code (app.js):
// Import Express framework
const express = require('express');
// Create Express application instance
const app = express();

// Serve static files from 'public' directory (CSS/images/etc)
app.use(express.static('public'));

// Set server port
const port = 3000;

// Handle root path GET request
app.get('/', (req, res) => {
    // Return simple HTML content
    res.send('<h1>Welcome to my Node.js and Express Site!</h1>');
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); -->


2. <!--  Static Page (public/index.html)
<!-- HTML5 doctype declaration -->
<!DOCTYPE html>
<!-- Set document language to English -->
<html lang="en">
<head>
      <!-- Character encoding -->
    <meta charset="UTF-8">

    <!-- Responsive viewport settings -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

     <!-- Page title -->
    <title>SIT323 task2</title>

    <!-- Inline CSS styles -->
    <style>
        /* Global base styles */
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            margin: 0;  
            padding: 0;
            background-color: #ecedf0;
        }

        /* Content container styling */
        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 30px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            text-align: center;
        }

        /* Main heading style */
        h1 {
            color: #2c3e50;
            font-size: 2.5em;
            margin-bottom: 20px;
        }

        /* Paragraph styling */
        p {
            color: #34495e;
            font-size: 1.1em;
            margin: 20px 0;
        }

        /* Tech logo image styling */
        .tech-logo {
            width: 500px;
            margin: 30px 0;
            transition: transform 0.3s ease;
        }

        /* Image hover effect */
        .tech-logo:hover {
            transform: rotate(-5deg) scale(1.05);
        }

        /* Highlight text style */
        .highlight {
            color: #3498db;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <!-- Page content container -->
    <div class="container">
        <h1> Welcome to my website!</h1>
        <!--  
            src: Image path
            alt: Image description
        -->
        <img src="welcome.jpg" alt="Welcome" class="tech-logo">
          <!-- Highlighted text using span -->
        <p>This is a web page built with <span class="highlight">Node.js</span> and <span class="highlight">Express. </span></p>
    </div>
</body>
</html> -->

## Running & Testing
1. Start the Server
    ```bash
    node app.js
2. Access the Page
    Open the browser and navigate to: http://localhost:3000

## Git and GitHub Operations
1. Initialize Local Repository
    ```bash
    git init
2. Commit Code
    ```bash
    git commit -m "Commit: Complete Node.js and Express website development"
3. Link Remote Repository
    Create a public GitHub repository named sit323-2025-prac2p
    Copy the repository SSH/HTTPS URL
    ```bash
    git remote add origin https://github.com/makabakalee/sit323-2025-prac2p.git
4. Push Code
    ```bash
    git push -u origin main
