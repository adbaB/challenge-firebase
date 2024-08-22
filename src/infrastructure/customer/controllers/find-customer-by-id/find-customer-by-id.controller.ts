import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindCustomerByIdUseCase } from 'src/application/customer/find-by-id-customer-use-case/find-by-id-customer-use-case';
import { CustomerNotFoundException } from 'src/domain/customer/exceptions/customer-not-found.exception';
import { ICustomer } from 'src/domain/customer/interfaces/customer.interface';
import { ROUTE_NAME } from '../routes.constans';
import { FindCustomerByIdControllerDto } from './dto/find-customer-by-id.dto';

@ApiTags('customer')
@Controller(ROUTE_NAME)
export class FindCustomerByIdController {
  constructor(
    private readonly findCustomerByIdUseCase: FindCustomerByIdUseCase,
  ) {}

  @ApiResponse({status:200})
  @ApiResponse({status:404, description:'customer not found'})
  @Get(':id')
  async run(@Param() dto: FindCustomerByIdControllerDto): Promise<ICustomer> {
    try {
      return this.findCustomerByIdUseCase.run({ id: dto.id });
    } catch (error) {
      if (error instanceof CustomerNotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
