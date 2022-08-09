import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import {
  PrimengButtonElementModule,
  PrimengButtonElementComponent,
} from '../../../primeng-button-element/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengButtonElementModule,
    ButtonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const myCustomElement = createCustomElement(PrimengButtonElementComponent, {
      injector: this.injector,
    });

    customElements.define('my-custom-element', myCustomElement);
  }
}
