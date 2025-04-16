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
    console.log("payload", payload);
    const { method, url, pathParameters, params, ...body } = payload;
    let fullUrl = `${this.baseUrl}${url}`;

    if (pathParameters) {
      fullUrl += `/${pathParameters}`;
    }
    switch (method.toLowerCase()) {
      case 'get':
        return this.http.get(fullUrl, { params });
      case 'post':
        return this.http.post(fullUrl, body, { params });
      case 'patch':
        return this.http.patch(fullUrl, body, { params });
      case 'delete':
        return this.http.delete(fullUrl, { params });
      default:
        return new Observable(observer => {
          observer.error('Invalid method or payload');
        });
    }
  }

}
