import { Injectable } from '@nestjs/common';
import { AddMealDto } from './dto/addMeal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Meal } from './entities/meal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MealService {
  constructor(
    @InjectRepository(Meal) private readonly mealRepository: Repository<Meal>,
  ) {}

  async addMeal(meal: AddMealDto) {
    await this.mealRepository.save(meal);
  }
}
