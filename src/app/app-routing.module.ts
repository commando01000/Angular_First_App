import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './About/About.component';
import { ContactComponent } from './Contact/Contact.component';
import { PortfolioComponent } from './Portfolio/Portfolio.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HomeComponent } from './Home/Home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: '**',
    component: NopagefoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
