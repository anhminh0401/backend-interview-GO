import { NextFunction, Request, Response } from "express";
import { ProductService } from "./product.service";
import { ResponseWrapper } from "../../helper/response-wrapper";
import { InfoProductDto } from "./dtos/info-product.dto";
import { BodyRequest } from "../base/base.request";

export class ProductController {
  constructor(private productService: ProductService) {}

  public getListProducts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.productService.getListProducts();
      return res.send(new ResponseWrapper(data, null, null));
    } catch (error) {
      next(error);
    }
  };

  public getDetailProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.productService.getDetailProduct(
        Number(req.params.id)
      );
      return res.send(new ResponseWrapper(data, null, null));
    } catch (error) {
      next(error);
    }
  };

  public createProduct = async (
    req: BodyRequest<InfoProductDto>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.productService.createProduct(req.body);
      return res.send(new ResponseWrapper(data, null, null));
    } catch (error) {
      next(error);
    }
  };

  public updateProduct = async (
    req: BodyRequest<InfoProductDto>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.productService.updateProduct(
        Number(req.params.id),
        req.body
      );
      return res.send(new ResponseWrapper(data, null, null));
    } catch (error) {
      next(error);
    }
  };

  public deleteProdcut = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data = await this.productService.deleteProdcut(
        Number(req.params.id)
      );
      return res.send(new ResponseWrapper(data, null, null));
    } catch (error) {
      next(error);
    }
  };
}
