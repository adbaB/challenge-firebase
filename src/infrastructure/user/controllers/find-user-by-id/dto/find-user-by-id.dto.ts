import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class FindUserByIdControllerDto {
  
  @ApiProperty({required:true, description:'user uuid'})
  @IsNotEmpty()
  @IsUUID()
  id:string;
}