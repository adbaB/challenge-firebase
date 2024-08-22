import { Body, Controller, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from 'src/application/user/create-user-use-case/create-user-use-case';
import { ROUTE_NAME } from '../routes.constans';
import { CreateUserControllerDto } from './dto/create-user.dto';

@ApiTags('user')
@Controller(ROUTE_NAME)
export class CreateUserController {
  constructor(private readonly createUseruseCase: CreateUserUseCase) {}

  @Post()
  @ApiResponse({status:201, description:'user created'})
  async run(
    @Body() createUserDto: CreateUserControllerDto,
  ): Promise<{ status: string }> {
    await this.createUseruseCase.execute({
      email: createUserDto.email,
      username: createUserDto.username,
      password: createUserDto.password,
    });

    return {
      status: 'ok',
    };
  }
}
