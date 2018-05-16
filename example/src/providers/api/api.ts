import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {

  constructor(public http: HttpClient) {
  }


  post(endpoint: string, body: any, reqOpts?: any) {
    var form_data = new FormData();

    for ( var key in body ) {
      form_data.append(key, body[key]);
    }

    return this.http.post(endpoint, form_data, reqOpts);
  }

  postJson(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(endpoint, JSON.stringify(body), reqOpts);
  }


}
