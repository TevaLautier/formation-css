import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { HeaderModule } from './app/modules/header/header.module';
import { AppMaterialModule } from './app/app-material.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule, HeaderModule, AppMaterialModule),
  ],
})
  .catch(err => console.error(err));
