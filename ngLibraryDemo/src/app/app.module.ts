import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgLibraryModule } from 'ng-library';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {NgLibraryModule} from "../../projects/ng-library/src/lib/ng-library.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
