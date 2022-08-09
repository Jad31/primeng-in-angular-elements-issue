import { NgModule } from '@angular/core';
import { PrimengButtonElementComponent } from './primeng-button-element.component';
import { ButtonModule } from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [PrimengButtonElementComponent],
  imports: [BrowserModule, BrowserAnimationsModule, ButtonModule],
  exports: [PrimengButtonElementComponent],
})
export class PrimengButtonElementModule {}
