import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerControllerDto {

  @ApiProperty({required:true})
  @IsNotEmpty()
  @IsString()
  name:string;

  @ApiProperty({required:true})
  @IsNotEmpty()
  @IsString()
  lastname:string;

  @ApiProperty({required:true, type:Date})
  @IsNotEmpty()
  @IsDateString()
  birthday:Date;
}