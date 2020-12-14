import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { RolModel } from '../models/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private serverUrl = environment.api_endpoint;

  constructor(
    private _http: HttpClient
  ) { }

  // GET roles
  getRoles(): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.serverUrl + 'roles/', { headers: headers });
  }

  // POST roles
  saveRol(rol: RolModel): Observable<any> { // Me devuelve un observable
    /**
     * Parámetros a recibir del objeto, lo pasamos a JSON para que el api pueda interactuar con el
     */
    const params = JSON.stringify(rol);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.serverUrl + 'roles', params, { headers: headers });
  }

  // PUT roles
  updateRol(rol: RolModel): Observable<any> { // Me devuelve un observable
    /**
     * Parámetros a recibir del objeto, lo pasamos a JSON para que el api pueda interactuar con el
     */
    const params = JSON.stringify(rol);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.serverUrl + 'roles/' + rol._id, params, { headers: headers });
  }

  getRol(id): Observable<any> { // Me devuelve un observable
    /**
     * COnsultar un rol
     */
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.serverUrl + 'roles/' + id, { headers: headers });
  }
  
}
