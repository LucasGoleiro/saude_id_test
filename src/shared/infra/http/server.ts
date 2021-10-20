import 'reflect-metadata';
import express from 'express';
import routes from '../../../routes/index';
import "../typeorm";
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../../documentation/swagger.json';

const app = express()

app.use(routes)

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(3333, () => {
    console.log('Working on port 3333')
})
