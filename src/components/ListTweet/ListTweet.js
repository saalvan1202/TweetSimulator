import React from "react";
import "./ListiTweet.scss";
import Grid from "@mui/material/Grid";
import Tweet from "../Tweet/Tweet";

export default function ListTweet(props) {
  const { allTweet, deleteTweet, editTweet, valueEditTweet } = props;
  if (!allTweet || allTweet.length === 0) {
    return (
      <div className="list-tweet-null">
        <h2>"No hay Tweets"</h2>
      </div>
    );
  }
  return (
    <Grid container spacing={3} className="list-tweet">
      {allTweet.map((tweet, index) => (
        <Grid key={index} item xs={4}>
          <Tweet
            Tweet={tweet}
            index={index}
            deleteTweet={deleteTweet}
            editTweet={editTweet}
            valueEditTweet={valueEditTweet}
          />
        </Grid>
      ))}
    </Grid>
  );
}
