import React from "react";
import "./EditTweet.scss";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import SendTweet from "../sendTweet/SendTweet";

export default function EditTweet(props) {
  const { editTweet, index, valueEditTweet } = props;
  return (
    <IconButton
      onClick={() => {
        editTweet, valueEditTweet(index);
      }}
    >
      <EditIcon className="edit" />
    </IconButton>
  );
}
