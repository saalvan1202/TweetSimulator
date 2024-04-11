/*CONTENIDO DEL MODAL*/

import React, { useState } from "react";
import "./FromSendTweet.scss";
import { FormControl, FormGroup, TextField, Button } from "@mui/material";
import { Twitter } from "@mui/icons-material";

export default function FromSendTweet(props) {
  const { sendTweet, valueEditTweet, value } = props;
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });
  console.log(value);
  //Dudas
  const onFormChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="form-send-tweet">
      <h2 className="form-send-tweet_tittle">ENVIAR TWEET </h2>
      <form
        className="form-send-tweet_form"
        onSubmit={(event) => sendTweet(event, formValue)}
        onChange={onFormChange}
      >
        <FormControl>
          <FormGroup>
            <TextField
              className="form-send-tweet_form-name"
              type="text"
              name="name"
              placeholder="Nombre del Usuario"
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send-tweet_form-textarea"
              name="tweet"
              multiline
              rows="6"
              placeholder="Escribe tu Tweet..."
              margin="normal"
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" className="submit">
              Enviar
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
