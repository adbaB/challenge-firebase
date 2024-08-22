import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FindUserUseCase } from 'src/application/user/find-user-use-case/find-user-use-case';
import { UserNotFoundException } from 'src/domain/user/exceptions/user-not-found.exception';
import { IUser } from 'src/domain/user/interfaces/user.interface';
import { ROUTE_NAME } from '../routes.constans';
import { FindUserByIdControllerDto } from './dto/find-user-by-id.dto';

@ApiTags('user')
@Controller(ROUTE_NAME)
export class FindUserByIdController {
  constructor(private readonly findUserUseCase: FindUserUseCase) {}

  @ApiResponse({ status: 200, description: 'ok' })
  @ApiResponse({ status: 404, description: 'user not found' })
  @Get(':id')
  async run(@Param() params: FindUserByIdControllerDto): Promise<IUser> {
    try {
      return this.findUserUseCase.run({ id: params.id });
    } catch (error) {
      if (error instanceof UserNotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
