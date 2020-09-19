import { getRepository } from 'typeorm';
import Customer from '../../models/Customer';

interface Request {
  name: string;
  adress: string;
}


class CreateCustomerService {
  public async execute({ name, adress }: Request): Promise<Customer> {
    const customerRepository = getRepository(Customer);

    const user = customerRepository.create({
      name,
      adress
    });

    await customerRepository.save(user);

    return user;
  }
}

export default CreateCustomerService;