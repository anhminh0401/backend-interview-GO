import express from "express";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";

const productService = new ProductService();
const productController = new ProductController(productService);

const router = express.Router();

router.get("/", productController.getListProducts);
router.get("/:id", productController.getDetailProduct);
router.post("/", productController.createProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProdcut);

export default router;
