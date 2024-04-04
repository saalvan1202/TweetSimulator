import React from "react";
import { Card, CardContent, colors } from "@mui/material";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import "./Tweet.scss";
import EditTweet from "../EditTweet";

export default function Tweet(props) {
  const {
    Tweet: { name, tweet, time },
    index,
    deleteTweet,
    editTweet,
    valueEditTweet,
  } = props;
  return (
    <Card className="tweet">
      <CardContent>
        <div className="tweet_header">
          <h5>{name}</h5>
          <div>
            <EditTweet
              editTweet={editTweet}
              index={index}
              valueEditTweet={valueEditTweet}
            />
            <IconButton onClick={() => deleteTweet(index)} className="delete">
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        <div>
          <p>{tweet}</p>
        </div>
        <div className="tweet_hour">
          {moment(time).format("DD//MM/YYY HH:mm")}
        </div>
      </CardContent>
    </Card>
  );
}
