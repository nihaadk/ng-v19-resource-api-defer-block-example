import { Component } from '@angular/core';

@Component({
  selector: 'app-car-detail-skeleton',
  imports: [],
  template: ` <div class="w-screen h-screen bg-gray-100 flex flex-col">
    <div class="flex-1 flex">
      <div class="w-1/2 h-full">
        <div class="skeleton h-full w-full"></div>
      </div>
      <div class="w-1/2 p-10 flex flex-col justify-start bg-white relative">
        <h2 class="text-4xl font-bold mb-4 text-gray-800 mt-10">
          <div class="skeleton h-4 w-full"></div>
        </h2>
        <div class="skeleton h-4 w-full mb-4"></div>
        <div class="text-lg flex flex-wrap gap-6 mb-6">
          <div class="skeleton h-4 w-full"></div>
        </div>
        <div class="text-lg flex flex-wrap gap-6 mb-6">
          <div class="skeleton h-4 w-full"></div>
        </div>
        <div class="text-lg flex flex-wrap gap-6 mb-6">
          <div class="skeleton h-4 w-full"></div>
        </div>

        <div class="skeleton h-4 w-full mb-6"></div>

        <h3 class="text-2xl font-semibold mb-4 text-gray-800">
          <div class="skeleton h-4 w-full"></div>
        </h3>
        <div class="flex flex-wrap gap-4">
          <div class="skeleton h-4 w-28 "></div>
          <div class="skeleton h-4 w-28 "></div>
          <div class="skeleton h-4 w-28 "></div>
          <div class="skeleton h-4 w-28 "></div>
        </div>
      </div>
    </div>
  </div>`,
})
export class CarDetailSkeletonComponent {}
