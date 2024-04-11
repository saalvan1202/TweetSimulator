import React from "react";
import "./EditTweet.scss";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import SendTweet from "../sendTweet/SendTweet";

export default function EditTweet(props) {
  const { editTweet, index, valueEditTweet } = props;
  const fnEditTweet = () => {
    editTweet();
    valueEditTweet(index);
  };
  return (
    <IconButton
      onClick={() => {
        fnEditTweet();
      }}
    >
      <EditIcon className="edit" />
    </IconButton>
  );
}
