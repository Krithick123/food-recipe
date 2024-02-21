import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'food-recipe';
  defaultFeature='recipes';
  onAddFeature(feature: string){
    this.defaultFeature=feature;
  }
}
