import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class FindCustomerByIdControllerDto {
  @ApiProperty({ required: true })
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
