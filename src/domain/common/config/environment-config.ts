export interface EnvironmentConfig {
  getType():string;
  getProyectId():string;
  getPrivateKeyId():string
  getPrivateKey():string;
  getClientEmail():string;
  getClientId():string;
  getAuthURI():string;
  getTokenURI():string;
  getAuthProviderCertUrl():string;
  getClientCertUrl():string;
  getUniverseDomain():string;
}