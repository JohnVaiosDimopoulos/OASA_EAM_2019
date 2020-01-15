import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment.prod';


import { AppComponent } from './app.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TimeTablesComponent } from './time-tables/time-tables.component';
import { NewsComponent } from './news/news.component';
import { RouteFinderComponent } from './route-finder/route-finder.component';
import { TicketsComponent } from './tickets/tickets.component';
import { CommunicationsComponent } from './communications/communications.component';
import { CurrentChangesComponent } from './current-changes/current-changes.component';
import { FAQComponent } from './faq/faq.component';
import {ModalModule} from 'ngx-bootstrap';
import {AuthModule} from './auth/auth.module';
import { BreadcrumComponent } from './header/breadcrum/breadcrum.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import * as firebase from 'firebase';
import Firestore = firebase.firestore.Firestore;
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { PricesComponent } from './tickets/prices/prices.component';
import { EmailComponent } from './communications/email/email.component';
import { InfoComponent } from './communications/info/info.component';
import { ComplainsComponent } from './communications/complains/complains.component';
import { CardOrderComponent } from './tickets/card-order/card-order.component';
import { TicketOrderComponent } from './tickets/ticket-order/ticket-order.component';
import { AmeaComponent } from './amea/amea.component';
import { GeneralComponent } from './amea/general/general.component';
import { StationsComponent } from './amea/stations/stations.component';
import { InstructionsComponent } from './amea/instructions/instructions.component';
import {AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core';
import { AnouncementsComponent } from './news/anouncements/anouncements.component';
import { PressComponent } from './news/press/press.component';
import { ProkComponent } from './news/prok/prok.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    TimeTablesComponent,
    NewsComponent,
    RouteFinderComponent,
    TicketsComponent,
    CommunicationsComponent,
    CurrentChangesComponent,
    FAQComponent,
    BreadcrumComponent,
    PricesComponent,
    EmailComponent,
    InfoComponent,
    ComplainsComponent,
    CardOrderComponent,
    TicketOrderComponent,
    AmeaComponent,
    GeneralComponent,
    StationsComponent,
    InstructionsComponent,
    AnouncementsComponent,
    PressComponent,
    ProkComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAzm3935krlf29R-NAEEpW18nzday55SIES'
      }

    )
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
