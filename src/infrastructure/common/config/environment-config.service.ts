import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentConfig } from 'src/domain/common/config/environment-config';

@Injectable()
export class EnvironmentConfigService implements EnvironmentConfig {
  constructor(private configService: ConfigService) {}
  getType(): string {
    return this.configService.get<string>('TYPE');
  }
  getProyectId(): string {
    return this.configService.get<string>('PROJECT_ID');
  }
  getPrivateKeyId(): string {
    return this.configService.get<string>('PRIVATE_KEY_ID');
  }

  getPrivateKey(): string {
    return this.configService.get<string>('PRIVATE_KEY').replace(/\\n/gm, '\n');
  }
  getClientEmail(): string {
    return this.configService.get<string>('CLIENT_EMAIL');
  }
  getClientId(): string {
    return this.configService.get<string>('CLIENT_ID');
  }
  getAuthURI(): string {
    return this.configService.get<string>('AUTH_URI');
  }
  getTokenURI(): string {
    return this.configService.get<string>('TOKEN_URI');
  }
  getAuthProviderCertUrl(): string {
    return this.configService.get<string>('AUTH_CERT_URL');
  }
  getClientCertUrl(): string {
    return this.configService.get<string>('CLIENT_CERT_URL');
  }
  getUniverseDomain(): string {
    return this.configService.get<string>('UNIVERSAL_DOMAIN');
  }
}
