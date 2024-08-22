import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IBcryptService } from 'src/domain/common/adapters/bcrypt.interface';

@Injectable()
export class BcryptService implements IBcryptService {
  private rounds: number = 10;

  async hash(hashString: string): Promise<string> {
    return await bcrypt.hash(hashString, this.rounds);
  }
}
