import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/models/tweet.model';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {

  listTweets: Array<Tweet>;

  constructor() {
    this.listTweets = new Array <Tweet> ();
  }

  ngOnInit(): void {
    this.fillListTweets();
  }

  fillListTweets(): void{

    let tweet = new Tweet();
    tweet.author = "Juan";
    tweet.idTweet = 1;
    tweet.location = "Bogotá";
    tweet.device = "Android";
    tweet.date = new Date();
    tweet.text = "Hello world, its my first tweet on fakeTwitter";

    this.listTweets.push(tweet);

    let tweet2 = new Tweet();
    tweet2.author = "David";
    tweet2.idTweet = 2;
    tweet2.location = "Bogotá";
    tweet2.device = "Pc";
    tweet2.date = new Date();
    tweet2.text = "Hello world, its my second tweet on fakeTwitter, but its a copy of other tweet D:";

    this.listTweets.push(tweet2);

    let tweet3 = new Tweet();
    tweet3.author = "Julio";
    tweet3.idTweet = 2;
    tweet3.location = "Bogotá";
    tweet3.device = "Pc";
    tweet3.date = new Date();
    tweet3.text = "Hello world, its my third tweet on fakeTwitter, but its a copy of other tweet D:";

    this.listTweets.push(tweet3);

  }

  

}
