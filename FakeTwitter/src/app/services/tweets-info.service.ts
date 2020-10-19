import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TweetsInfoService {

  _urlApiTweets: string;

  constructor(private http: HttpClient) {

    this._urlApiTweets = "/api/tweets/";
  }

  getTweets(): Observable <any> {

    let headers = new HttpHeaders().set(
      'Type-Content','aplication/json'
    )
    return this.http.get(this._urlApiTweets, {
      headers: headers
    });
  }

}
