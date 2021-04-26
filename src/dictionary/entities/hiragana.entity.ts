import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Hiragana extends Document {
  @Prop()
  hiragana: string;

  @Prop()
  english: string;

  @Prop()
  examples: string[];
}

export const HiraganaSchema = SchemaFactory.createForClass(Hiragana);
