import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, AppRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { EventListComponent } from './components/event-list/event-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    AppRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
