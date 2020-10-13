import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTweetComponent } from './create-tweet/create-tweet.component';
import { TweetsListComponent } from './tweets-list/tweets-list.component';

const routes: Routes = [
  {path: "", redirectTo: "/listTweets", pathMatch: "full"},
  {path: "listTweets", component: TweetsListComponent},
  {path: "createTweet", component: CreateTweetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
