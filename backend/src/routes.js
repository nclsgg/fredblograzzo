import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import ArticleController from './app/controllers/ArticleController';
import SubscriptionController from './app/controllers/SubscriptionController';
import FileController from './app/controllers/FileController';
import CategoryController from './app/controllers/CategoryController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

routes.post('/articles', ArticleController.store);
routes.get('/articles', ArticleController.index);
routes.put('/articles/:id', ArticleController.update);
routes.delete('/articles/:id', ArticleController.delete);

routes.get('/articles/:category', CategoryController.index);

routes.post('/articles/:articleId/subscriptions', SubscriptionController.store);
routes.get('/articles/subscriptions', SubscriptionController.index);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
