import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private serverUrl = environment.api_endpoint;

  constructor(
    private http: HttpClient
  ) { }

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
}
