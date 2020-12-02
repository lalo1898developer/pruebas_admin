import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  private serverUrl = environment.api_endpoint;


  constructor(
    private http: HttpClient
  ) { }

  getSystems(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'systems', {headers: headers})
  }
}
