import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigModule } from '../config/environment-config.module';
import { firebaseProvider } from './firebase.provider';
import { FirebaseRepository } from './firebase.repository';


@Module({
  imports: [EnvironmentConfigModule],
  providers: [firebaseProvider,FirebaseRepository],
  exports: [FirebaseRepository],
})
export class FirebaseModule {}
