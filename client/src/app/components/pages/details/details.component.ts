import { Component, OnInit, inject } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { StarRatingComponent } from '../../partials/star-rating/star-rating.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule, StarRatingComponent, NotFoundComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  foodService = inject(FoodService);
  cartService = inject(CartService);
  router = inject(Router);

  food!: Food;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.food = this.foodService.getFoodById(params.id);
      }
    });
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }
}
