export type TweetItem = {
  id: number;
  content: string;
};

export type TweetsState = {
  loading: boolean;
  tweetsData: TweetItem[];
  myTweet: TweetItem[];
};
