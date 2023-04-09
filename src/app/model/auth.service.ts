import { Observable } from 'rxjs';
import { RestService } from './rest.service';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    constructor(private restService: RestService) { }

    authenticate(username: string, password: string): Observable<boolean> {
        return this.restService.authentication(username, password)
    }
    get authenticated(): boolean {
        return this.restService.token != null
    }
    clear() {
        this.restService.token = null
    }
}