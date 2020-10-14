import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from 'src/models/tweet.model';

import { TweetsInfoService } from '../services/tweets-info.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input()

  tweets;

  constructor(private tweetService: TweetsInfoService) {

  }

  ngOnInit(): void {
    this.tweets = this.tweetService.getTweets();
  }

}
