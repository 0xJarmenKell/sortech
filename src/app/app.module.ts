import { CUSTOM_ELEMENTS_SCHEMA ,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { StatsGraphComponent } from './components/stats-graph/stats-graph.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { QRCodeModule } from 'angularx-qrcode';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ChartModule } from 'primeng/chart';
import { FileSaverModule } from 'ngx-filesaver';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SplitButtonModule } from 'primeng/splitbutton';




@NgModule({
  declarations: [
    AppComponent,
    TicketCardComponent,
    StatsGraphComponent,
    TicketListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    TooltipModule,
    QRCodeModule,
    FormsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ButtonModule,
    InputSwitchModule,
    ChartModule,
    FileSaverModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
