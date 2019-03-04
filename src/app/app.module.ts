import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, AppRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { MeterToKmPipe } from './pipes/meter-to-km.pipe';
import { TimeToStringPipe } from './pipes/time-to-string.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    SafeHtmlPipe,
    EventDetailComponent,
    MeterToKmPipe,
    TimeToStringPipe
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [
    AppRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
