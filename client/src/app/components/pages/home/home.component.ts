import { Component, OnInit, inject } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    StarRatingComponent,
    SearchComponent,
    TagsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foodService = inject(FoodService);
  activatedRoute = inject(ActivatedRoute);

  foods: Food[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      } else if (params.tag) {
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}
