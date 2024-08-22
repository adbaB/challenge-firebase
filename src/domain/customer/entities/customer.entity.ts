import { uuid } from 'uuidv4';
import { ICustomer } from '../interfaces/customer.interface';

export class Customer {
  constructor(private attribute: ICustomer) {}

  static create(createCustomer: {
    name:string,
    lastname:string,
    birthday:Date
  }):Customer{
    return new Customer({
      id: uuid(),
      name: createCustomer.name,
      lastname: createCustomer.lastname,
      birthday: new Date(createCustomer.birthday),
      age: null
    })
  }

  toValue():ICustomer{
    return {
    id: this.attribute.id,
    name: this.attribute.name,
    lastname: this.attribute.lastname,
    birthday: this.attribute.birthday,
    age: this.attribute.age
    }
  }
}
