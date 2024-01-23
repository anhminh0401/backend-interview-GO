import express, { NextFunction, Request, Response } from "express";
import "reflect-metadata";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { AppDataSource } from "./database/connect-database";
import productRoutes from "./modules/products/product.route";
import { handleError } from "./helper/error";



(async () => {
  // express
  const app = express();
  const port = 3000;

  //middleware
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());

  // connect database mysql by typeORM
  await AppDataSource.initialize();
  // route
  app.use("/api/v1/products", productRoutes);

  // middleware handling error
  app.use(function (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    handleError(err, res);
  });

  app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
  });
})();
