import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  id = input<number>();
  brand = input<string>();
  model = input<string>();
  image = input<string>();
  year = input<number>();
  fuel = input<string>();
  price = input<number>();
  fuelType = input<string>();
}
