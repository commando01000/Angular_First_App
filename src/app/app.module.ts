import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './About/About.component';
import { FooterComponent } from './Footer/Footer.component';
import { NavbarComponent } from './Navbar/Navbar.component';
import { ContactComponent } from './Contact/Contact.component';
import { PortfolioComponent } from './Portfolio/Portfolio.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { HomeComponent } from './Home/Home.component';

@NgModule({
  declarations: [							
    AppComponent,
      AboutComponent,
      FooterComponent,
      NavbarComponent,
      ContactComponent,
      PortfolioComponent,
      NopagefoundComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
