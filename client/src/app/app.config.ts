import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FilterByTypePipe } from './filter-by-type.pipe';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    FilterByTypePipe,
    provideAuth0({
      domain: 'dev-7ehb50jlkoqlqalp.us.auth0.com',
      clientId: 'Tjocw2oXDndcGWw18yXNIWiitsPAhZOI',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
