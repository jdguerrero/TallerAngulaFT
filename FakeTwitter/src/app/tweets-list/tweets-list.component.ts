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

    this.listTweets.push(tweet);
  }

}
