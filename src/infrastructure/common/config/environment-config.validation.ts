import { plainToClass } from 'class-transformer';
import { IsString, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsString()
  TYPE: string;

  @IsString()
  PROJECT_ID: string;

  @IsString()
  PRIVATE_KEY_ID: string;

  @IsString()
  PRIVATE_KEY: string;

  @IsString()
  CLIENT_EMAIL: string;

  @IsString()
  CLIENT_ID: string;

  @IsString()
  AUTH_URI: string;

  @IsString()
  TOKEN_URI: string;

  @IsString()
  AUTH_CERT_URL: string;

  @IsString()
  CLIENT_CERT_URL: string;

  @IsString()
  UNIVERSAL_DOMAIN: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}