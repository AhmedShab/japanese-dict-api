import { Injectable } from '@nestjs/common';

@Injectable()
export class WordsService {
  getWords(): string {
    return 'From words service';
  }
}
