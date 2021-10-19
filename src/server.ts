import express from 'express';
import routes from './routes/index';
import "./database/index";

const app = express()

app.use(routes)

app.listen(3333, () => {
    console.log('Working on port 3333')
})
