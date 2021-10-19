import { Router } from 'express';
import authorsRouter from '../../../../modules/authors/infra/http/routes/authors.routes';
import categoriesRouter from '../../../../modules/categories/infra/http/routes/categories.routes';

const routes = Router();

routes.use('/authors', authorsRouter)
routes.use('/categories', categoriesRouter)

export default routes
