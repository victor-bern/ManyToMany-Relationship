import { getRepository } from 'typeorm';
import Product from '../../models/Product';

interface Request {
  name: string;
  quantity: number;
}


class CreateProductService {
  public async execute({ name, quantity }: Request): Promise<Product> {
    const productRepository = getRepository(Product);

    const product = productRepository.create({
      name,
      quantity
    })

    await productRepository.save(product);

    return product;
  }
}

export default CreateProductService;