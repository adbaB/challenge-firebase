import { Customer } from 'src/domain/customer/entities/customer.entity';
import { CustomerRepository } from 'src/domain/customer/repositories/custormer.repository';
import { Injectable } from 'src/shared/injectable';
import { FindCustomerByIdUseCase } from '../find-by-id-customer-use-case/find-by-id-customer-use-case';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class UpdateCustomerUseCase {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly findCustomerByIdUseCase: FindCustomerByIdUseCase,
  ) {}

  async excecute(updateCustomerDto: UpdateCustomerDto): Promise<void> {
    try {
      const customer = await this.findCustomerByIdUseCase.run({
        id: updateCustomerDto.id,
      });

      this.customerRepository.update(new Customer(customer), {
        name: updateCustomerDto.customer.name,
        lastname: updateCustomerDto?.customer?.lastname,
        birthday: new Date(updateCustomerDto?.customer?.birthday),
      });
    } catch (error) {
      throw error;
    }
  }
}
