import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/models/tweet.model';
import { TweetsInfoService } from '../services/tweets-info.service';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css']
})
export class CreateTweetComponent implements OnInit {

  newTweet: Tweet;

  constructor(private tweetsInfoService: TweetsInfoService) {

    this.newTweet = new Tweet();

  }

  ngOnInit(): void {
  }

  createTweet(){
    this.tweetsInfoService.createTweet(this.newTweet);
  }

}
