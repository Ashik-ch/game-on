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

  apiRunner(payload: any): Observable<any> {
    const { method, url, ...body } = payload;
    const fullUrl = this.baseUrl + url;
    switch (method.toLowerCase()) {
      case 'get':
        return this.http.get(fullUrl, { params: payload.params });
      case 'post':
        return this.http.post(fullUrl, body, { params: payload.params });
      default:
        return new Observable(observer => {
          observer.error('Invalid method or payload');
        });
    }
  }

}
