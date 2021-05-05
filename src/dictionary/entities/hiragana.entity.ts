import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Example } from '../dto/create-dictionary.dto';

@Schema()
export class Hiragana extends Document {
  @Prop()
  hiragana: string;

  @Prop()
  sound: string;

  @Prop({ type: Object })
  examples: Example[];
}

export const HiraganaSchema = SchemaFactory.createForClass(Hiragana);
