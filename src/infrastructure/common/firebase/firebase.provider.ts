import { EnvironmentConfigService } from '../config/environment-config.service';
import * as admin from 'firebase-admin';

export const firebaseProvider = {
  provide: 'FIREBASE_APP',
  inject: [EnvironmentConfigService],
  useFactory: (env: EnvironmentConfigService) => {
    const firebaseConfig = {
      type: env.getType(),
      project_id: env.getProyectId(),
      private_key_id: env.getPrivateKeyId(),
      private_key: env.getPrivateKey(),
      client_email: env.getClientEmail(),
      client_id: env.getClientId(),
      auth_uri: env.getAuthURI(),
      token_uri: env.getTokenURI(),
      auth_provider_x509_cert_url: env.getAuthProviderCertUrl(),
      client_x509_cert_url: env.getClientCertUrl(),
      universe_domain: env.getUniverseDomain(),
    } as admin.ServiceAccount;

    return admin.initializeApp({
      credential: admin.credential.cert(firebaseConfig),
      databaseURL:'http://localhost:8080',

    });
  },
};
