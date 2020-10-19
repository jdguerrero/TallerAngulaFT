export class Tweet {

    idTweet: number;

    text: string;

    date: Date;

    device: string;

    location: string;

    idUser: number;

    constructor (idTweet?: number){
        this.idTweet = idTweet;
    }

}