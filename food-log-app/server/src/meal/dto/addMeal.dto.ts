import { IsNumber, IsOptional, IsString } from 'class-validator';

export class AddMealDto {
  @IsOptional()
  date: string;

  @IsString()
  meal: string;

  @IsNumber()
  amount: number;

  @IsString()
  measure: string;

  @IsNumber()
  hunger: number;
}
