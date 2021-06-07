import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxEditorModule } from 'ngx-editor';
import {NgxPrintModule} from 'ngx-print';

@NgModule({
  imports:      [ BrowserModule, FormsModule  NgxEditorModule,NgxPrintModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
