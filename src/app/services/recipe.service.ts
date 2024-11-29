import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../Models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato, mozzarella, and fresh basil.',
      image: 'assets/Margherita-Pizza.jpg',
      category: 'Pizza',
      ingredients: [
        '1 pizza dough',
        '1/2 cup tomato sauce',
        '1 1/2 cups mozzarella cheese, shredded',
        'Fresh basil leaves',
        '1 tbsp olive oil',
        'Salt and pepper to taste',
      ],
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      description: 'Classic pizza topped with spicy pepperoni slices.',
      image: 'assets/Pepperoni-Pizza.jpg',
      category: 'Pizza',
      ingredients: [
        '1 pizza dough',
        '1/2 cup tomato sauce',
        '1 1/2 cups mozzarella cheese, shredded',
        '1 cup pepperoni slices',
        '1 tsp red pepper flakes (optional)',
        'Olive oil for drizzling',
      ],
    },
    {
      id: 3,
      name: 'BBQ Chicken Pizza',
      description: 'Pizza topped with BBQ sauce, grilled chicken, and red onions.',
      image: 'assets/BBQ Bacon Burger.jpg',
      category: 'Pizza',
      ingredients: [
        '1 pizza dough',
        '1/2 cup BBQ sauce',
        '1 chicken breast, grilled and shredded',
        '1/4 cup red onions, sliced',
        '1 1/2 cups mozzarella cheese, shredded',
        'Cilantro leaves for garnish',
      ],
    },
    {
      id: 4,
      name: 'Veggie Pizza',
      description: 'Loaded with fresh veggies, olives, and a sprinkle of cheese.',
      image: 'assets/Veggie-Pizza.jpg',
      category: 'Pizza',
      ingredients: [
        '1 pizza dough',
        '1/2 cup tomato sauce',
        '1 1/2 cups mozzarella cheese, shredded',
        '1/4 cup mushrooms, sliced',
        '1/4 cup bell peppers, diced',
        '1/4 cup black olives, sliced',
        'Fresh spinach leaves',
      ],
    },
    {
      id: 5,
      name: 'Hawaiian Pizza',
      description: 'Pizza topped with ham, pineapple, and mozzarella cheese.',
      image: 'assets/Hawaiian Pizza.jpg',
      category: 'Pizza',
      ingredients: [
        '1 pizza dough',
        '1/2 cup tomato sauce',
        '1 1/2 cups mozzarella cheese, shredded',
        '1 cup ham, diced',
        '1/2 cup pineapple chunks',
        'Olive oil for drizzling',
      ],
    },
  
    // Burger Recipes
    {
      id: 6,
      name: 'Classic Cheeseburger',
      description: 'A juicy beef patty with melted cheddar cheese, lettuce, and tomato.',
      image: 'assets/Classic Cheeseburger.jpg',
      category: 'Burger',
      ingredients: [
        '1 beef patty',
        '1 hamburger bun',
        '1 slice cheddar cheese',
        'Lettuce leaves',
        'Tomato slices',
        'Pickles (optional)',
        'Ketchup and mustard to taste',
      ],
    },
    {
      id: 7,
      name: 'Bacon Burger',
      description: 'A savory burger topped with crispy bacon, cheese, and all the fixings.',
      image: 'assets/Bacon Burger.jpg',
      category: 'Burger',
      ingredients: [
        '1 beef patty',
        '1 hamburger bun',
        '2 slices crispy bacon',
        '1 slice cheddar cheese',
        'Lettuce leaves',
        'Tomato slices',
        'Onion rings (optional)',
        'Ketchup and mayo',
      ],
    },
    {
      id: 8,
      name: 'Mushroom Swiss Burger',
      description: 'A delicious burger with sautéed mushrooms and melted Swiss cheese.',
      image: 'assets/Mushroom Swiss Burger.jpg',
      category: 'Burger',
      ingredients: [
        '1 beef patty',
        '1 hamburger bun',
        '1/2 cup sautéed mushrooms',
        '1 slice Swiss cheese',
        'Lettuce leaves',
        'Tomato slices',
        'Garlic mayo or aioli',
      ],
    },
    {
      id: 9,
      name: 'BBQ Bacon Burger',
      description: 'A smoky BBQ sauce burger with crispy bacon and cheddar cheese.',
      image: 'assets/BBQ Bacon Burger.jpg',
      category: 'Burger',
      ingredients: [
        '1 beef patty',
        '1 hamburger bun',
        '2 slices crispy bacon',
        '1 slice cheddar cheese',
        '1/4 cup BBQ sauce',
        'Lettuce leaves',
        'Onion rings (optional)',
      ],
    },
    {
      id: 10,
      name: 'Veggie Burger',
      description: 'A hearty burger made with a plant-based patty and fresh veggies.',
      image: 'assets/Veggie Burger.jpg',
      category: 'Burger',
      ingredients: [
        '1 veggie patty (store-bought or homemade)',
        '1 hamburger bun',
        'Lettuce leaves',
        'Tomato slices',
        'Avocado slices',
        'Pickles',
        'Mustard or ketchup',
      ],
    },
  ];
  

  getRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }

}