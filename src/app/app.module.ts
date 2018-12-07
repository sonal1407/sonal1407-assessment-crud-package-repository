/**
 * @author sonal prajapti
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ----------------------------------------------//
import { AppComponent } from './app.component';
import { TableModule } from './table/table.module';
import { StatusDirective } from './status.directive';





@NgModule({
  declarations: [
    AppComponent,
    StatusDirective,
  ],
  imports: [
    BrowserModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
