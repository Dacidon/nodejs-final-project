import { Router } from "express";
import { authController, userController, newsController } from '../controller/index.js'
import { authMiddleware } from '../middleware/index.js'


const router = Router()

router.post('/registration', authController.registration)
router.post('/login', authController.login)
router.post('/refresh-token',authMiddleware.authentication, authController.refreshToken)
router.get('/profile', authMiddleware.authentication,  userController.profile)
router.patch('/profile', authMiddleware.authentication, userController.update);
router.delete('/users/:id', userController.delete);
router.get('/news', authMiddleware.authentication, newsController.getAllNews);
router.post('/news', authMiddleware.authentication, newsController.create);
router.patch('/news/:id/edit', authMiddleware.authentication, newsController.update)
router.delete('/news/:id', newsController.delete);

export default router