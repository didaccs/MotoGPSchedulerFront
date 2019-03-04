import { Component, OnInit } from '@angular/core';
import { EventService } from './../../services/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers: [EventService]
})
export class EventDetailComponent implements OnInit {
  public event: Event;

  constructor(
    private _route: ActivatedRoute,
    private _eventService: EventService
  ) { }

  ngOnInit() {
    this._route.params.subscribe( params => {
      const id = params['id'];
      this.getEvent(id);
    });
  }

  getEvent(id) {
    this._eventService.getEvent(id).subscribe(
        response => {
          this.event = response;
          console.log(this.event);
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
