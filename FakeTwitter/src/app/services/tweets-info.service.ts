import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tweet } from 'src/models/tweet.model';



@Injectable({
  providedIn: 'root'
})
export class TweetsInfoService {

  _urlApiTweets: string;

  constructor(private http: HttpClient) {

    this._urlApiTweets = "/api/tweets/";
  }

  getTweets() {

    let headers = new HttpHeaders().set(
      'Type-Content','aplication/json'
    )
    return this.http.get(this._urlApiTweets, {
      headers: headers
    });
  }

}
