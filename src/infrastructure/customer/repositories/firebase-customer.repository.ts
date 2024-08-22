import { Injectable } from '@nestjs/common';
import { Customer } from 'src/domain/customer/entities/customer.entity';
import { ICustomer } from 'src/domain/customer/interfaces/customer.interface';
import { CustomerRepository } from 'src/domain/customer/repositories/custormer.repository';
import { FirebaseRepository } from 'src/infrastructure/common/firebase/firebase.repository';
import * as firestore from 'firebase/firestore';

@Injectable()
export class FirebaseCustomerRepository implements CustomerRepository {
  private collection: FirebaseFirestore.CollectionReference;
  constructor(private readonly firebaseRepository: FirebaseRepository) {
    this.collection = firebaseRepository.getCollection('customer');
  }
  async save(customer: Customer): Promise<void> {
    const data = customer.toValue();
    await this.collection.add({
      id: data.id,
      name: data.name,
      lastname: data.lastname,
      birthday: data.birthday,
      age: data.age ? data.age : 0,
    });
  }
  async update(
    customer: Customer,
    partialUpdate: Partial<Omit<ICustomer, 'id' | 'age'>>,
  ): Promise<void> {
    const data = customer.toValue();
    const response = await this.collection.where('id', '==', data.id).get();
    const customerRef = !response.empty ? response.docs[0].ref : null;

    customerRef.update({
      name: partialUpdate?.name ? partialUpdate?.name : data.name,
      lastname: partialUpdate?.lastname
        ? partialUpdate?.lastname
        : data.lastname,
      birthday:
        partialUpdate?.birthday.toString() !== 'Invalid Date'
          ? partialUpdate?.birthday
          : data.birthday,
    });
  }
  async findById(id: string): Promise<Customer> {
    const customer = await this.collection.where('id', '==', id).get();

    const data = !customer.empty ? customer.docs[0].data() : null;

    if (!data) {
      return null;
    }

    const timestamp = data?.birthday as firestore.Timestamp;

    return new Customer({
      id: data?.id,
      name: data?.name,
      lastname: data?.lastname,
      birthday: timestamp.toDate(),
      age: data?.age,
    });
  }
}
