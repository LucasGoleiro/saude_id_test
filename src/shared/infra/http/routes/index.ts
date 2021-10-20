import { Router } from 'express';
import authorsRouter from '../../../../modules/authors/infra/http/routes/authors.routes';
import categoriesRouter from '../../../../modules/categories/infra/http/routes/categories.routes';
import postsRouter from '../../../../modules/posts/infra/http/routes/posts.routes';

const routes = Router();

routes.use('/authors', authorsRouter)
routes.use('/categories', categoriesRouter)
routes.use('/posts', postsRouter)

export default routes
