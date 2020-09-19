import {
  Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,
  ManyToMany, JoinTable
} from 'typeorm';
import CustomerModel from './Customer';
import ProductModel from './Product';

@Entity('ped_description')
class DescriptionProductModel {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToMany(type => CustomerModel)
  @JoinTable()
  id_customer: CustomerModel;

  @ManyToMany(type => ProductModel)
  @JoinTable()
  id_product: ProductModel;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default DescriptionProductModel;