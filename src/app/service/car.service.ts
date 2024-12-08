import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ICar } from '../interfaces/car.interface';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  #httpClient = inject(HttpClient);
  private delay = 1500;

  #api = environment.apiUrl;

  getCars(): Observable<ICar[]> {
    const url: string = `${this.#api}/cars`;
    return this.#httpClient.get<ICar[]>(url).pipe(delay(this.delay));
  }

  getCar(id: string): Observable<ICar> {
    const url: string = `${this.#api}/cars/${id}`;
    return this.#httpClient.get<ICar>(url).pipe(delay(this.delay));
  }
}
