import express from 'express';
import {
  getProducts,
  getProductsById,
  deleteProducts,
  createProducts,
  updateProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, createProducts);
router
  .route('/:id')
  .get(getProductsById)
  .delete(protect, admin, deleteProducts)
  .put(protect, admin, updateProducts);

export default router;
