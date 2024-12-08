import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { CarService } from '../../service/car.service';
import { CardSkeletonComponent } from "../card-skeleton/card-skeleton.component";
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-car-list',
  imports: [CardComponent, CardSkeletonComponent],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
})
export class CarListComponent {
  #carService = inject(CarService);

  carsResource = rxResource({
    loader: () => this.#carService.getCars(),
  });
}
