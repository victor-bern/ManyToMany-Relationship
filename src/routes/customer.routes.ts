import { Router } from 'express';
import { getRepository } from 'typeorm';

import CustomerModel from '../models/Customer';
import CreateCustomerService from '../services/Customers/CreateCustomerService';

const customerRouter = Router();

customerRouter.get('/', async (req, res) => {
  const customersRepository = getRepository(CustomerModel);

  const customers = await customersRepository.find();

  return res.json(customers);
})

customerRouter.post('/create', async (req, res) => {
  try {
    const { name, adress } = req.body;

    const customerService = new CreateCustomerService;

    const customer = await customerService.execute({
      name,
      adress
    })

    return res.json(customer);

  } catch (err) {
    return res.status(400).json({ Error: err.message });
  }
})


export default customerRouter;
