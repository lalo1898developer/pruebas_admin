import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());
    private loggedInRole = new BehaviorSubject<string>(this.getLoggedInRole());
    private serverUrl = environment.api_endpoint;

    constructor(private httpClient: HttpClient) {
    }

    login(email) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        // tslint:disable-next-line:max-line-length
        const body = JSON.stringify({email}); // Parametros a recibir del objeto, lo pasamos a JSON para que el api pueda interactuar con el
        return this.httpClient.post(this.serverUrl + 'login', body, {headers}).pipe(
            map((response: any) => {
                if (response.token) {
                    // Se guarda en sesion la informacion del usuario
                    sessionStorage.setItem('auth_token', response.token);
                    this.loggedIn.next(true);
                }
                return response;
            }),
            catchError(error => {
                return Observable.throw(error);
            })
        );
    }

    logout(): void {
        sessionStorage.clear();
        this.loggedIn.next(false);
        this.loggedInRole.next('');
    }

    // Variable de Role como observable
    getLoggedInRole$(): Observable<string> {
        return this.loggedInRole.asObservable();
    }

    isLoggedIn(): boolean {
        return !!sessionStorage.getItem('auth_token');
    }

    getToken(): string {
        return sessionStorage.getItem('auth_token');
    }

    forgotPassword(email: string): Observable<any> {
        const params = JSON.stringify({email});
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.httpClient.post(`${this.serverUrl}forgot_password`, params, {headers: headers});
    }

    private getLoggedInRole(): string {
        return sessionStorage.getItem('role');
    }
}
