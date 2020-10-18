import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/models/tweet.model';
import { TweetsInfoService } from '../services/tweets-info.service';

@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {

  listTweets: Array<Tweet>;

  constructor(private tweetsInfoService: TweetsInfoService) {

    this.listTweets = new Array <Tweet> ();

    this.tweetsInfoService.getTweets().subscribe(Response=>{
      
      const tweetsJson = Response;

      this.listTweets = tweetsJson["data"];

      console.log(this.listTweets)

    });

  }

  ngOnInit(): void {
    
  }

  

}
