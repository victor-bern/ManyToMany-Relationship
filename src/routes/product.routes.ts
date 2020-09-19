import { Router } from 'express';
import { getRepository } from 'typeorm';

import Product from '../models/Product';
import CreateProductService from '../services/Products/CreateProductService';


const productRouter = Router();

productRouter.get('/', async (req, res) => {
  const productRepository = getRepository(Product);

  const products = await productRepository.find();

  return res.json(products);
})

productRouter.post('/create', async (req, res) => {
  try {
    const { name, quantity } = req.body;

    const productService = new CreateProductService;

    const product = await productService.execute({
      name,
      quantity
    })

    return res.json(product);

  } catch (err) {
    return res.status(400).json({ Error: err.message });
  }
})


export default productRouter;
