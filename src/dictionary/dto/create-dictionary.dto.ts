import { IsString } from 'class-validator';

export class CreateDictionaryDto {
  @IsString()
  readonly hiragana: string;

  @IsString()
  readonly english: string;

  @IsString({ each: true })
  readonly examples?: string[];
}
