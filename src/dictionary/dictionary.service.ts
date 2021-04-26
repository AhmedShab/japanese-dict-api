import { Injectable } from '@nestjs/common';

@Injectable()
export class DictionaryService {
  getWords(): string {
    return 'From words service';
  }

  createDictionary() {
    return 'Dictionary';
  }
}
