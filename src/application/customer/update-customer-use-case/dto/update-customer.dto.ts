export class CustomerDto {
  name?: string;
  lastname?: string;
  birthday?: Date;
}
export class UpdateCustomerDto {
  id: string;
  customer: CustomerDto;
}
