import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDictionaryDto } from './dto/create-dictionary.dto';
import { Hiragana } from './entities/hiragana.entity';

@Injectable()
export class DictionaryService {
  constructor(
    @InjectModel(Hiragana.name) private readonly hiraganaModel: Model<Hiragana>,
  ) {}

  getWords(): string {
    return 'From words service';
  }

  createDictionary(createDictionaryDto: CreateDictionaryDto) {
    const hiragana = new this.hiraganaModel(createDictionaryDto);

    hiragana.save();
  }
}
