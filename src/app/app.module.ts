import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoodSelectorComponent } from './mood-selector/mood-selector.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Dodaj ten import

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoodSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  // Dodaj FormsModule tutaj
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
