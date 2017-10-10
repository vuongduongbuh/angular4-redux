import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { AppConstants } from '../app.constant';

@Injectable()
export class HttpService {
    public header: any;
    public baseURL: string;

    constructor(private http: Http) {
        this.baseURL = AppConstants.API_ENDPOINT;
    }

    getAnonymous(url): Observable<Response> {
        let header = this.appendHeaders(false);
        return this.http.get(this.baseURL + url, {
            headers: header
        })
    }

    postAnonymous(url, data): Observable<Response> {
        let header = this.appendHeaders(false);
        return this.http.post(this.baseURL + url, JSON.stringify(data), {
            headers: header
        });
    }

    get(url): Observable<Response> {
        let header = this.appendHeaders(true);
        return this.http.get(this.baseURL + url, {
            headers: header
        })
    }

    post(url, data): Observable<Response> {
        let header = this.appendHeaders(true);
        return this.http.post(this.baseURL + url, JSON.stringify(data), {
            headers: header
        });
    }

    put(url, data): Observable<Response> {
        let header = this.appendHeaders(true);
        return this.http.put(this.baseURL + url, JSON.stringify(data), {
            headers: header
        });
    }

    patch(url, data): Observable<Response> {
        let header = this.appendHeaders(true);
        return this.http.patch(this.baseURL + url, JSON.stringify(data), {
            headers: header
        });
    }

    delete(url): Observable<Response> {
        let header = this.appendHeaders(true);
        return this.http.delete(this.baseURL + url, {
            headers: header
        });
    }

    private appendHeaders(isAuthorized) {
        let userToken = sessionStorage.getItem('token');
        let appToken = AppConstants.OAUTH.TOKEN;

        let token = appToken;
        if (isAuthorized) {
            token = userToken;
        }
        
        let header = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer ' + token
        });

        return header;
    }
}
