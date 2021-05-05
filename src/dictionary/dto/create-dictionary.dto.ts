import { IsOptional, IsString } from 'class-validator';
import { Fixture } from 'class-fixtures-factory';

export class CreateDictionaryDto {
  @IsString()
  readonly hiragana: string;

  @IsString()
  readonly sound: string;

  @IsOptional()
  @Fixture({ type: () => [Object] })
  readonly examples?: Example[];
}

export class Example {
  @IsString()
  readonly english: string;

  @IsString()
  readonly japanese: string;
}
