import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CardDatabaseComponent } from './components/pages/card-database/card-database.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'cardDatabase', component:CardDatabaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
