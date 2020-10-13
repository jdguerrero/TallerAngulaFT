import { Injectable } from '@angular/core';
import { Tweet } from 'src/models/tweet.model';


@Injectable({
  providedIn: 'root'
})
export class TweetsInfoService {

  listTweets: Array<Tweet>;

  constructor() {
    this.listTweets = new Array <Tweet> ();
  }

  createTweet(newTweet: Tweet){
    this.listTweets.push(newTweet);
  }

  getTweets(): Array <Tweet> {

    let tweet = new Tweet();
    tweet.author = "Juan";
    tweet.idTweet = 1;
    tweet.location = "Bogotá";
    tweet.device = "Android";
    tweet.date = new Date();
    tweet.text = "Hello world, its my first tweet on fakeTwitter";

    let tweet2 = new Tweet();
    tweet2.author = "David";
    tweet2.idTweet = 2;
    tweet2.location = "Bogotá";
    tweet2.device = "Pc";
    tweet2.date = new Date();
    tweet2.text = "Hello world, its my second tweet on fakeTwitter, but its a copy of other tweet D:";

    let tweet3 = new Tweet();
    tweet3.author = "Julio";
    tweet3.idTweet = 2;
    tweet3.location = "Bogotá";
    tweet3.device = "Pc";
    tweet3.date = new Date();
    tweet3.text = "Hello world, its my third tweet on fakeTwitter, but its a copy of other tweet D:";


    
    this.listTweets.push(tweet2);
    this.listTweets.push(tweet3);

    return this.listTweets;

  }
}
