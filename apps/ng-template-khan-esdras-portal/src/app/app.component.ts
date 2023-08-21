import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseUrl } from '@ng-template-khan-esdras/shared/utils';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'ng-template-khan-esdras-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<div class="font-mono">
    <header class="px-xl py-md bg-primary-light text-xl font-bold shadow-md">Angular + Tailwind CSS + Nx</header>

    <main class="max-w-xl md:max-w-2xl lg:max-w-6xl mx-auto py-xl px-md md:px-xl grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
      <div class="flex flex-col p-lg bg-secondary-light shadow-md hover:shadow-lg">
        <div class="pb-md text-lg font-bold">Angular</div>
        <p class="mb-xl flex-1">
          Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.
        </p>
        <a
          class="py-sm px-md bg-primary-dark hover:bg-primary text-white flex self-end"
          href="https://angular.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show me!
        </a>
      </div>

      <div class="flex flex-col p-lg bg-secondary-light shadow-md hover:shadow-lg">
        <div class="pb-md text-lg font-bold">Tailwind CSS</div>
        <p class="mb-xl flex-1">
          Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
        </p>
        <a
          class="py-sm px-md bg-primary-dark hover:bg-primary text-white flex self-end"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show me!
        </a>
      </div>

      <div class="flex flex-col p-lg bg-secondary-light shadow-md hover:shadow-lg">
        <div class="pb-md text-lg font-bold">Nx</div>
        <p class="mb-xl flex-1">
          Nx is a smart, fast and extensible build system with first class monorepo support and powerful integrations.
        </p>
        <a
          class="py-sm px-md bg-primary-dark hover:bg-primary text-white flex self-end"
          href="https://nx.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Show me!
        </a>
      </div>
    </main>
  </div>`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly baseUrl = inject(BaseUrl);
}
