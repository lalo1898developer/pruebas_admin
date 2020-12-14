import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
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

  getSystem(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'systems/' + id, {headers: headers})
  }

  getModules(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'systems/' + id + '/modules', {headers: headers})
  }

  getTree(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'systems/' + id + '/modules/?submodules=true', {headers: headers})
  }

  getSubModules(id_system, id_module): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get(this.serverUrl + 'systems/' + id_system + '/modules/?id_module=' + id_module, {headers: headers})
  }

  addModule(id, module){

    const params = JSON.stringify(module);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.serverUrl + 'systems/' + id + '/modules', params, { headers: headers });
  }
  
}
