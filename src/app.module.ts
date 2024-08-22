import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/common/config/environment-config.module';
import { FirebaseModule } from './infrastructure/common/firebase/firebase.module';
import { ServiceModule } from './infrastructure/common/services/services.module';
import { CustomerModule } from './infrastructure/customer/customer.module';
import { UserModule } from './infrastructure/user/user.module';

@Module({
  imports: [EnvironmentConfigModule, FirebaseModule, UserModule, ServiceModule,CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
