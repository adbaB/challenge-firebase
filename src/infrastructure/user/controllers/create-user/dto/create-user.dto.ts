import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateUserControllerDto {
  @ApiProperty({required:true, description:'username'})
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({required:true, description:"user's email"})
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({required:false, description:"user's password"})
  @IsOptional()
  password: string;
}