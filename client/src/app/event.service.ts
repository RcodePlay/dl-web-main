import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHandler,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiURI = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<any> {
    const uri = `${this.apiURI}/events`;

    return this.http.get(uri);
  }

  getEvent(id: string): Observable<Event> {
    return this.http.get<Event>(`${this.apiURI}/event/${id}`);
  }

  addEvent(event: Event): Observable<any> {
    const uri = `${this.apiURI}/events`;

    return this.http.post(uri, event);
  }

  editEvent(id: string, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiURI}/events/${id}`, event);
  }

  deleteEvent(id: string): Observable<any> {
    return this.http.delete(`${this.apiURI}/events/${id}`);
  }
}

export interface Event {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
  type: string;
}
