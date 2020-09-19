import { getRepository } from 'typeorm';
import CustomerModel from '../../models/Customer';
import ProductModel from '../../models/Product';
import DescriptionProduct from '../../models/DescriptionProduct';



interface Request {
  id_customer: CustomerModel;
  id_product: ProductModel;
}

class CreateDescriptionProductService {
  public async execute({ id_customer, id_product }: Request): Promise<DescriptionProduct> {
    const descpritionProductRepo = getRepository(DescriptionProduct);
    const productRepo = getRepository(ProductModel);

    const descriptionProduct = descpritionProductRepo.create({
      id_product,
      id_customer
    })

    const productOfDescription = await productRepo.findOne(id_product) as ProductModel;

    productOfDescription.quantity--;

    productRepo.save(productOfDescription);

    await descpritionProductRepo.save(descriptionProduct);

    return descriptionProduct
  }
}

export default CreateDescriptionProductService;