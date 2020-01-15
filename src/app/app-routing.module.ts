import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RouteFinderComponent} from './route-finder/route-finder.component';
import {TicketsComponent} from './tickets/tickets.component';
import {CommunicationsComponent} from './communications/communications.component';
import {FAQComponent} from './faq/faq.component';
import {NewsComponent} from './news/news.component';
import {CurrentChangesComponent} from './current-changes/current-changes.component';
import {TimeTablesComponent} from './time-tables/time-tables.component';
import {PricesComponent} from './tickets/prices/prices.component';
import {EmailComponent} from './communications/email/email.component';
import {InfoComponent} from './communications/info/info.component';
import {ComplainsComponent} from './communications/complains/complains.component';
import {CardOrderComponent} from './tickets/card-order/card-order.component';
import {TicketOrderComponent} from './tickets/ticket-order/ticket-order.component';
import {AmeaComponent} from './amea/amea.component';
import {GeneralComponent} from './amea/general/general.component';
import {InstructionsComponent} from './amea/instructions/instructions.component';
import {StationsComponent} from './amea/stations/stations.component';
import {AnouncementsComponent} from './news/anouncements/anouncements.component';
import {PressComponent} from './news/press/press.component';
import {ProkComponent} from './news/prok/prok.component';

const routes: Routes = [
  {path: 'home', data: {breadcrumb: 'Αρχική'} , children: [
      {path: 'news', data: {breadcrumb: 'Νέα'}, children: [
          {path: 'announcements', component: AnouncementsComponent, data: {breadcrumb: 'Ανακοινώσεις'}},
          {path: 'press', component: PressComponent, data: {breadcrumb: 'Δελτία Τύπου'}},
          {path: 'procurements', component: ProkComponent, data: {breadcrumb: 'Προκηρύξεις'}},
          {path: '', component: NewsComponent, pathMatch: 'full'}
        ]},
      {path: 'amea',  data: {breadcrumb: 'ΑΜΕΑ'}, children: [
          {path: 'general', component: GeneralComponent, data: {breadcrumb: 'Γενικές Οδηγίες'}},
          {path: 'instructions', component: InstructionsComponent, data: {breadcrumb: 'Οδηγίες Προσέγγισης'}},
          {path: 'stations', component: StationsComponent, data: {breadcrumb: 'Στάσεις με Προεξοχές'}},
          {path: '', component: AmeaComponent, pathMatch: 'full'}
        ]},
      {path: 'timetables', component: TimeTablesComponent, data: {breadcrumb: 'Ωράρια δρομολογίων'}},
      {path: '', component: HomeComponent, pathMatch: 'full' }
    ]},

  {path: 'routes', component: RouteFinderComponent, data: {breadcrumb: 'Εύρεση Διαδρομής'}},
  {path: 'tickets', data: {breadcrumb: 'Εισιτήρια-Κάρτες'}, children: [
      {path: '', component: TicketsComponent, pathMatch: 'full'},
      {path: 'prices', component: PricesComponent, data: {breadcrumb: 'Τιμες εισητηρίων'}},
      {path: 'card-order', component: CardOrderComponent, data: {breadcrumb: 'Εκδωση προσωποποιημένης κάρτας'}},
      {path: 'ticket-order', component: TicketOrderComponent, data: {breadcrumb: 'Online αγορά εισιτηρίου/επαναφόρτιση κάρτας'}}
      ]},

  {path: 'communication', data: {breadcrumb: 'Επικοινωνία'}, children: [
      {path: '', component: CommunicationsComponent, pathMatch: 'full'},
      {path: 'email', component: EmailComponent, data: {breadcrumb: 'Επικοινωνία μέσω email'}},
      {path: 'info', component: InfoComponent, data: {breadcrumb: 'Επικοινωνία με τους Φορείς'}},
      {path: 'complains', component: ComplainsComponent, data: {breadcrumb: 'Φόρμα Παραπόνων'}}
    ]},
  {path: 'liveInfo', component: CurrentChangesComponent, data: {breadcrumb: 'Ζωντάνη Ενημέρωση'}},
  {path: 'faq', component: FAQComponent,  data: {breadcrumb: 'Συχνές Ερωτήσεις'}},
  {path: '', redirectTo: 'home', pathMatch: 'full'},


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
