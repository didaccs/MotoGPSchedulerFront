import { Component, OnInit } from '@angular/core';
import { Event } from './../../models/event';
import { EventService } from './../../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  providers: [EventService]
})
export class EventListComponent implements OnInit {
  public events: Event[];

  constructor(
    private _eventService: EventService
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this._eventService.getEvents().subscribe(
        response => {
          this.events = response;
          console.log(this.events);
        },
        error => {
            const errorMensaje = <any> error;
            console.log(errorMensaje);
        }
    );
  }

  getImagePath(event) {
    return this._eventService.getImage(event.circuit.imageName);
  }

}

