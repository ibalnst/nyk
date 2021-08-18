import express from 'express';
import {
  authUser,
  getUserProfile,
  getUsers,
  registerUser,
  updatedUserProfile,
  deleteUsers,
  getUserById,
  updatedUserByAdmin,
} from '../controllers/userControllers.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updatedUserProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUsers)
  .get(protect, admin, getUserById)
  .put(protect, admin, updatedUserByAdmin);

export default router;
