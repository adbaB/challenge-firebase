import { Customer } from 'src/domain/customer/entities/customer.entity';
import { CustomerRepository } from 'src/domain/customer/repositories/custormer.repository';
import { Injectable } from 'src/shared/injectable';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CreateCustomerUseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}


  async execute(createCustomerDto:CreateCustomerDto){
    const customer = Customer.create({
      name: createCustomerDto.name,
      lastname: createCustomerDto.lastname,
      birthday: createCustomerDto.birthday,
    })

    await this.customerRepository.save(customer);
  }
  
}
