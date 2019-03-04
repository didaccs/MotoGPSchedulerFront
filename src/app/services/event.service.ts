import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable  } from 'rxjs';

@Injectable()
export class EventService {
    public url: string;
    private headers: HttpHeaders;

    constructor( public _http: HttpClient) {
        this.url = environment.url;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }

    getEvents(): Observable<any> {
        return this._http.get(this.url + 'EventScheduler', {headers: this.headers});
    }

    getEvent(id): Observable<any> {
      return this._http.get(this.url + 'EventScheduler/' + id, {headers: this.headers});
    }

    getImage(imageName) {
        return 'http://localhost:61678/Resources/' + imageName;
    }
}
