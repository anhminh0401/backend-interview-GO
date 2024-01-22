import { AppDataSource } from "../../database/connect-database";
import { Errors } from "../../helper/error";
import { InfoProductDto } from "./dtos/info-product.dto";
import { Product } from "./entities/product.entity";

export class ProductService {
  public getListProducts = async () => {
    const products = await Product.find();
    return products;
  };

  public getDetailProduct = async (id: number) => {
    const product = await Product.findOne({ where: { id } });
    if (!product) throw Errors.findNotFound;
    return product;
  };

  public createProduct = async (infoProductDto: InfoProductDto) => {
    await AppDataSource.transaction(async (transaction) => {
      await transaction.insert(Product, infoProductDto);
    });
    return true;
  };

  public updateProduct = async (id: number, infoProductDto: InfoProductDto) => {
    const product = await Product.findOne({ where: { id } });
    if (!product) throw Errors.findNotFound;
    for (const prop in product) {
      if (!infoProductDto[prop]) {
        infoProductDto[prop] = product[prop];
      }
    }
    await AppDataSource.transaction(async (transaction) => {
      await transaction.update(Product, { id }, infoProductDto);
    });
    return true;
  };

  public deleteProdcut = async (id: number) => {
    const product = await Product.findOne({ where: { id } });
    if (!product) throw Errors.findNotFound;
    await AppDataSource.transaction(async (transaction) => {
      await transaction.delete(Product, { id: id });
    });
    return true;
  };
}
