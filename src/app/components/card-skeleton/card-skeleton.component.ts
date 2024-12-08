import { Component } from '@angular/core';

@Component({
  selector: 'app-card-skeleton',
  imports: [],
  template: `
    <div class="flex w-52 flex-col gap-4">
      <div class="skeleton h-32 w-full"></div>
      <div class="skeleton h-4 w-28"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
    </div>
  `,
})
export class CardSkeletonComponent {}
