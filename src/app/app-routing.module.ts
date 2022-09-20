import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatresComponent } from './theatres/theatres.component'
import { AppComponent } from './app.component'

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'theatres', component: TheatresComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
