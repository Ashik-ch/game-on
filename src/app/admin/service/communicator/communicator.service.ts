import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LOCAL_BASEURL } from '../../../../environment';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {
  baseUrl: string = LOCAL_BASEURL;

  constructor(
    private http: HttpClient,
  ) { }

  apiRunner(payload: { method: string, url: string, params?: any, body?: any }): Observable<any> {
    const url = this.baseUrl;
    payload.url = url + payload.url;
    switch (payload.method.toLowerCase()) {
      case 'get':
        return this.http.get(payload.url, { params: payload.params });
      case 'post':
        return this.http.post(payload.url, payload.body, { params: payload.params });
      default:
        return new Observable(observer => {
          observer.error('Invalid method or payload');
        });
    }
  }

}
