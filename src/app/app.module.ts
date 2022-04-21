import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DidyouknowComponent } from './didyouknow/didyouknow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { GetHelpComponent } from './get-help/get-help.component';
import { ViewOverviewComponent } from './view-overview/view-overview.component';
import { ViewOverview1Component } from './view-overview1/view-overview1.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from './header/header.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    DidyouknowComponent,
    GetHelpComponent,
    ViewOverviewComponent,
    ViewOverview1Component,
    HeaderComponent,
    LatestNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
