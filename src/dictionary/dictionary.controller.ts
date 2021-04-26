import { Controller, Get, Post } from '@nestjs/common';
import { DictionaryService } from './dictionary.service';

@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Get()
  getWords(): string {
    return this.dictionaryService.getWords();
  }

  @Post()
  createDictionary() {
    return this.dictionaryService.createDictionary();
  }
}
