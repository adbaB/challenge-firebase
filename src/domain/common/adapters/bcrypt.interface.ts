export interface IBcryptService {
  hash(string: string): Promise<string>;
}
