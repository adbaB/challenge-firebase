import { Customer } from 'src/domain/customer/entities/customer.entity';
import { CustomerNotFoundException } from 'src/domain/customer/exceptions/customer-not-found.exception';
import { ICustomer } from 'src/domain/customer/interfaces/customer.interface';
import { CustomerRepository } from 'src/domain/customer/repositories/custormer.repository';
import { Injectable } from 'src/shared/injectable';
import { FindCustomerByIdDto } from './dto/find-by-id-customer.dto';

@Injectable()
export class FindCustomerByIdUseCase {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async run(dto: FindCustomerByIdDto): Promise<ICustomer> {
    try {
      const customer = await this.customerRepository.findById(dto.id);
      if (!customer) {
        throw new CustomerNotFoundException(dto.id);
      }
      return customer.toValue();
    } catch (error) {
      throw error;
    }
  }
}
