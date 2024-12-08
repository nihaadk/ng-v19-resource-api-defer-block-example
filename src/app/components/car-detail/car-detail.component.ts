import { CurrencyPipe, JsonPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { CarService } from '../../service/car.service';
import { CarDetailSkeletonComponent } from "../car-detail-skeleton/car-detail-skeleton.component";

@Component({
  selector: 'app-car-detail',
  imports: [JsonPipe, CarDetailSkeletonComponent, RouterModule, CurrencyPipe],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.scss',
})
export class CarDetailComponent {
  #carService = inject(CarService);

  id = input<string>();


  carResource = rxResource({
    request: this.id,
    loader: (param) => this.#carService.getCar(param.request),
  });
}
