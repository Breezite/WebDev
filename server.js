import express from 'express';
import path from 'path';
import fighters from './api.js';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('/api/fighters', fighters);
app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
});