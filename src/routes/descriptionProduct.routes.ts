import { Router } from 'express';
import { getRepository } from 'typeorm';
import DescriptionProductModel from '../models/DescriptionProduct';
import CreateDescriptionProductService from '../services/DescriptionProduct/CreateDescriptionProductService';


const descProductRouter = Router();

descProductRouter.get('/', async (req, res) => {
  const descProductRepo = getRepository(DescriptionProductModel);

  const descProducts = await descProductRepo.find();

  return res.json(descProducts);
})

descProductRouter.post('/create', async (req, res) => {
  try {
    const { id_product, id_customer } = req.body;

    const descProductService = new CreateDescriptionProductService();

    const descProduct = await descProductService.execute({
      id_product,
      id_customer
    })

    return res.json(descProduct);

  } catch (err) {
    return res.status(400).json({ Error: err.message });
  }
})

export default descProductRouter;