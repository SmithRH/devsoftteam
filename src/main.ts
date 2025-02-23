import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes} from './app/app.routes'
import { provideRouter } from '@angular/router';
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes),provideAnimationsAsync()]
})
  .catch((err) => console.error(err));
