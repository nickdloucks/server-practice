import express from 'express';

const routes = express.Router();

routes.get('/', (req, res)=>{
    res.send('main API route');
});

export default routes;