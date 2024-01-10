import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <main
      class="flex flex-col items-center justify-center min-h-screen bg-gray-100 "
    >
      <div class="space-y-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-24 w-24 text-red-500 dark:text-red-400"
        >
          <path
            d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
          ></path>
          <path d="M12 9v4"></path>
          <path d="M12 17h.01"></path>
        </svg>
        <h1
          class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
        >
          Oops! Page not found.
        </h1>
        <p
          class="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
        >
          We're sorry, but the page you were looking for doesn't exist. You may
          have mistyped the address or the page may have moved.
        </p>
        <a
          class="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/"
        >
          Go to Homepage
        </a>
      </div>
    </main>
  `,
})
export class PageNotFoundComponent {}
