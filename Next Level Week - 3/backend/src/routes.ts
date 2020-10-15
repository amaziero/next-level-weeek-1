import { Router } from 'express';
import OrphanageController from './controllers/OrphanagesControlles';
import multer from 'multer';
import uploadConfig from './config/upload';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/orphanages', OrphanageController.index);
routes.get('/orphanages/:id', OrphanageController.show);
routes.post('/orphanages', upload.array('imagens'), OrphanageController.create);

export default routes;
