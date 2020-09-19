import { Router } from 'express';

import customerRouter from './customer.routes';
import descProductRouter from './descriptionProduct.routes';
import productRouter from './product.routes';

const routes = Router();

routes.use('/customers', customerRouter);
routes.use('/products', productRouter);
routes.use('/descproduct', descProductRouter);

routes.get('/', (req, res) => {
  return res.json({ Message: 'Olá' })
})


export default routes;