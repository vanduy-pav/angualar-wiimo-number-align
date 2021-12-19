import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjGridMultirowModule } from '@grapecity/wijmo.angular2.grid.multirow';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    WjGridModule,
    WjGridMultirowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
