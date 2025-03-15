const express = require('express');
const app = express();
const port = 3000;

const style = `
<style>
  h1 {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(45deg, #2563eb, #4f46e5);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 2px 2px 4px rgba(5, 5, 5, 0.1);
    font-size: calc(2rem + 1vw);
    text-align: center;
    padding: 2rem;
  }
</style>
`;

app.get('/', (req, res) => {
    res.send(`
      ${style}
      <div style="
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background:rgb(3, 3, 3);
      ">
        <h1 class="hero-text">Welcome to my Node.js with Express site!</h1>
      </div>
    `);
  });


    

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});

app.use(express.static('public'));