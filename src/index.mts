import express from 'express';
import routes from './routes/index.mjs';

const app = express();
const port = 3000;

app.use('/api', routes);

app.get('/file-db', (req, res)=>{
    // read from file system
});

app.listen(port, ()=>{
    console.log(`server listening at http://localhost:${port}`);
});
