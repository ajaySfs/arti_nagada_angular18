import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './products.routes';

export const productsConfig: ApplicationConfig = {
  providers: [ provideRouter(routes)]
};
