import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Hiragana, HiraganaSchema } from './entities/hiragana.entity';
import { DictionaryController } from './dictionary.controller';
import { DictionaryService } from './dictionary.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Hiragana.name,
        schema: HiraganaSchema,
      },
    ]),
  ],
  controllers: [DictionaryController],
  providers: [DictionaryService],
})
export class DictionaryModule {}
