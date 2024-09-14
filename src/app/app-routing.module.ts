import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoodSelectorComponent } from './mood-selector/mood-selector.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'mood-selector', component: MoodSelectorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
