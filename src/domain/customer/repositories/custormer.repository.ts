
import { Customer } from "../entities/customer.entity";
import { ICustomer } from "../interfaces/customer.interface";

export abstract class CustomerRepository {
  abstract save(customer:Customer):Promise<void>
  abstract update(customer:Customer,partialUpdate: Partial<Omit<ICustomer,'id' | 'age'>> ):Promise<void>
  abstract findById(id:string):Promise<Customer | null>
}