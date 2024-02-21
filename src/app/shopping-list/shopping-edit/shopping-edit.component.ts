import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
@ViewChild('nameInput') nameInputRef:ElementRef;
@ViewChild('amountInput') amountInputRef:ElementRef;
@Output() ingredientAdded = new EventEmitter<Ingredient>();
onSubmit(event: Event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Additional form submission logic if needed
  this.onAddItem(); // Call onAddItem() when the form is submitted
}

onAddItem() {
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountInputRef.nativeElement.value;
  const ingData = new Ingredient(ingName, ingAmount);
  this.ingredientAdded.emit(ingData);
}
}
