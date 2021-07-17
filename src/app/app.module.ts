import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { QuotesComponent } from './quotes/quotes.component';
import { AboutQuoteComponent } from './about-quote/about-quote.component';
import { HoverDirective } from './hover.directive';
import { ElapsedTimePipe } from './elapsed-time.pipe';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroSectionComponent,
    QuotesComponent,
    AboutQuoteComponent,
    HoverDirective,
    ElapsedTimePipe,
    CreateQuoteComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
