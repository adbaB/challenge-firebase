import {
  Body,
  Controller,
  NotFoundException,
  Param,
  Put,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UpdateCustomerUseCase } from 'src/application/customer/update-customer-use-case/update-customer-use-case';
import { CustomerNotFoundException } from 'src/domain/customer/exceptions/customer-not-found.exception';
import { ROUTE_NAME } from '../routes.constans';
import {
  UpdateCustomerBodyControllerDto,
  UpdateCustomerParamsControllerDto,
} from './dto/update-customer.dto';

@ApiTags('customer')
@Controller(ROUTE_NAME)
export class UpdateCustomerController {
  constructor(private readonly updateCustomerUseCase: UpdateCustomerUseCase) {}


  @ApiResponse({ status: 200, description: 'ok' })
  @ApiResponse({ status: 404, description: 'customer not found' })
  @Put(':id')
  async excecute(
    @Param() params: UpdateCustomerParamsControllerDto,
    @Body() body: UpdateCustomerBodyControllerDto,
  ): Promise<void> {
    try {
      return this.updateCustomerUseCase.excecute({
        id: params.id,
        customer: {
          name: body?.name,
          lastname: body?.lastname,
          birthday: body?.birthday,
        },
      });
    } catch (error) {
      if (error instanceof CustomerNotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
