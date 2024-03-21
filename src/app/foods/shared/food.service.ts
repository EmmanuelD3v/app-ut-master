import {Injectable} from '@angular/core';
import {Food} from './food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  menu: Food[] = [
    {
      id: 1,
      name: "Baguette de res",
      description: "Baguete con queso y carne de res",
      category: 'Comida',
      image: 'https://www.recetasnestle.com.mx/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/1febb843b6cb8161261d1b3fe60e326c.jpg?itok=YUauEgvF',
      price: 45
    },
    {
      id: 2,
      name: 'Pizza',
      description: 'Pepperoni',
      category: 'Comida',
      image: 'https://2trendies.com/hero/2023/04/pizzapepperoni.jpg?width=1200&aspect_ratio=16:9',
      price: 199,
    },
    {
      id: 3,
      name: 'Hamburguesa',
      description: 'Hamburguesa de res',
      category: 'Comida',
      image: 'https://editorialtelevisa.brightspotcdn.com/dims4/default/5591c0e/2147483647/strip/true/crop/1195x672+5+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2Ffa%2F68%2Fb5133d9f4eaf91738f36c7afcf59%2Fhamburguesas-estilo-texas-receta-facil-y-rapida.jpeg',
      price: 55,
    },
    {
      id: 4,
      name: 'Empanadas Yucatecas',
      description: 'De queso de bola.',
      category: 'Comida',
      image: 'https://www.mexicoenmicocina.com/wp-content/uploads/2018/02/Empanadas-con-queso-fresco-1-500x500.jpg',
      price: 15
    }
  ];

  constructor() {
  }

  // * Get all food.
  public getAllFood(): Food[] {
    return this.menu;
  }

  // * Get one food.
  public getOne(id: number): Food | undefined {
    return this.menu.find(item => item.id == id);
  }

  // * Add new food.
  public addFood(food: Food){
    this.menu.push(food);
  }

  // * Update food.
  public updateFood(newFood: Food) {
    this.menu.forEach((food, index) => {
      if (food.id == newFood.id) {
        this.menu[index] = newFood;
      }
    })
  }

  // * Delete food.
  public deleteFood(deletedFood: Food) {
    this.menu.forEach((food, index) => {
      if (food.id == deletedFood.id) {
        this.menu.splice(index, 1);
      }
    })
  }
}
