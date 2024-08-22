import { Module } from '@nestjs/common';
import { CreateCustomerUseCase } from 'src/application/customer/create-customer-use-case/create-customer-use-case';
import { FindCustomerByIdUseCase } from 'src/application/customer/find-by-id-customer-use-case/find-by-id-customer-use-case';
import { UpdateCustomerUseCase } from 'src/application/customer/update-customer-use-case/update-customer-use-case';
import { CustomerRepository } from 'src/domain/customer/repositories/custormer.repository';
import { FirebaseModule } from '../common/firebase/firebase.module';
import { CreateCustomerController } from './controllers/create-customer/create-customer.controller';
import { FindCustomerByIdController } from './controllers/find-customer-by-id/find-customer-by-id.controller';
import { UpdateCustomerController } from './controllers/update-customer/update-customer.controller';
import { FirebaseCustomerRepository } from './repositories/firebase-customer.repository';

@Module({
  imports: [FirebaseModule],
  controllers: [
    CreateCustomerController,
    FindCustomerByIdController,
    UpdateCustomerController,
  ],
  providers: [
    FirebaseCustomerRepository,
    CreateCustomerUseCase,
    FindCustomerByIdUseCase,
    UpdateCustomerUseCase,
    {
      provide: CustomerRepository,
      useExisting: FirebaseCustomerRepository,
    },
  ],
  exports: [
    CreateCustomerUseCase,
    FindCustomerByIdUseCase,
    UpdateCustomerUseCase,
  ],
})
export class CustomerModule {}
