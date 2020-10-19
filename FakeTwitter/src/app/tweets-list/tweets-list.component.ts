import { Component, OnInit} from '@angular/core';
import { Tweet } from '../models/tweet.model';
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
  }

  ngOnInit(){

    this.tweetsInfoService.getTweets().subscribe(Response=>{
      
      const tweetsJson = Response;

      const tweets = tweetsJson["data"];

      tweets.forEach(tweetIn => {
        
      const tweet = new Tweet();

      tweet.idTweet = tweetIn.idTweet;
  
      tweet.text = tweetIn.text; 

      tweet.date = tweetIn.date;

      tweet.device = tweetIn.device;

      tweet.location = tweetIn.location;

      tweet.idUser = tweetIn.idUser;

      this.listTweets.push(tweet);

      });

      console.log(this.listTweets)

    });
    
  }

  

}
