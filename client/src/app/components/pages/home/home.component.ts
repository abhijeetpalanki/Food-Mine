import { Component, OnInit, inject } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, StarRatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  foodService = inject(FoodService);

  foods: Food[] = [];

  ngOnInit(): void {
    this.foods = this.foodService.getAll();
  }
}
