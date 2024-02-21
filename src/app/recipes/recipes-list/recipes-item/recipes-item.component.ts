import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrl: './recipes-item.component.css'
})
export class RecipesItemComponent {
@Input('recipe') recipe:Recipe;
@Output() RecipeSelected=new EventEmitter<void>();
OnSelected(){
this.RecipeSelected.emit();
}
}

