import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tweet } from 'src/models/tweet.model';




@Injectable({
  providedIn: 'root'
})
export class TweetsInfoService {

  listTweets: Array<Tweet>;

  urlApiTweets: string;

  constructor(private http: HttpClient) {

    this.urlApiTweets = "http://localhost:3000/tweets/";

    this.listTweets = new Array <Tweet> ();

    this.getTweets();

  }

  private async request(method: string, url: string, data?: any) {
    
    url = this.urlApiTweets
    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  createTweet(newTweet: Tweet){
    return this.request('post', this.urlApiTweets, newTweet);
  }

  getTweets() {

    const tweetsJson = (this.request('get', this.urlApiTweets));

    const tweets = tweetsJson["data"];

    for (let index = 0; index < tweets.length; index++) {

      const newTweet: Tweet = new Tweet();

      newTweet.idTweet = tweets["idTweet"][index];

      newTweet.text = tweets["text"][index];

      newTweet.date = tweets["date"][index];

      newTweet.device = tweets["device"][index];

      newTweet.location = tweets["location"][index];

      newTweet.idUser = tweets["idUser"][index];
      
      this.listTweets.push(newTweet);

    }

    return this.listTweets;
  }

}
