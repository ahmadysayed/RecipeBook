import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gqmagazine.fr%2Flifestyle%2Farticle%2Fburger-king-annonce-fierement-un-nouveau-burger-mais-se-fait-clasher-par-les-produits-laitiers-et-demonter-par-les-internautes&psig=AOvVaw0v1-1wIhdf_4t8ThXpa7Av&ust=1693240883920000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCID4qf2j_YADFQAAAAAdAAAAABAE')
  ];

  constructor(){}

  ngOnInit() {
    
  }
}
