import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCustomerUseCase } from 'src/application/customer/create-customer-use-case/create-customer-use-case';
import { ROUTE_NAME } from '../routes.constans';
import { CreateCustomerControllerDto } from './dto/create-customer.dto';

@ApiTags('customer')
@Controller(ROUTE_NAME)
export class CreateCustomerController {
  constructor(private readonly createCustomerUseCase: CreateCustomerUseCase) {}

  @ApiResponse({status:201, description:'customer created'})
  @Post()
  async excecute(@Body() dto: CreateCustomerControllerDto): Promise<void> {
    return this.createCustomerUseCase.execute({
      name: dto.name,
      lastname: dto.lastname,
      birthday: dto.birthday,
    });
  }
}
