import { Body, Controller, Get, Put } from '@nestjs/common';
import { MealService } from './meal.service';
import { AddMealDto } from './dto/addMeal.dto';

@Controller('meal')
export class MealController {
  constructor(private readonly mealService: MealService) {}
  @Put()
  async addMeal(@Body() body: AddMealDto) {
    console.log(body);
    return this.mealService.addMeal(body);
  }
}
