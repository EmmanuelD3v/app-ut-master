import {Injectable} from '@angular/core';
import {Food} from './food.model';
import {CategoryEnum} from './category.enum';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu: Food[] = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Pepperoni',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 199,
    },
    {
      id: 2,
      name: 'Pizza',
      description: 'Pepperoni',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 199,
    },
    {
      id: 3,
      name: 'Pizza',
      description: 'Pepperoni',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 199,
    },
    {
      id: 4,
      name: 'Pizza',
      description: 'Pepperoni',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 199,
    },
    {
      id: 5,
      name: 'Pizza',
      description: 'Pepperoni',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 199,
    },
    {
      id: 6,
      name: 'Pizza',
      description: 'Pepperoni',
      category: CategoryEnum.food,
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 199,
    },
  ];

  constructor() {
  }

  public getAllFood(): Food[] {
    return this.menu;
  }
}
