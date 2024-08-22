import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class UpdateCustomerParamsControllerDto {
  @ApiProperty({ required: true })
  @IsUUID()
  @IsNotEmpty()
  id: string;
}

export class UpdateCustomerBodyControllerDto {
  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  lastname?: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsDateString()
  birthday?: Date;
}
