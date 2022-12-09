export type TweetItem = {
  id: string;
  user: string;
  value: string;
};
export type TweetItemInput = {
  user: string;
  value: string;
};

export type TweetsState = {
  loading: boolean;
  tweetsData: TweetItem[];
  myTweet: TweetItem[];
};
