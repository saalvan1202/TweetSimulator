/**funciones para abrir y cerrar el modal */

import React, { useState } from "react";
import "./SendTweet.scss";
import { Fab, formControlClasses } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import moment from "moment";
import ModalContainer from "../ModalCotaineer/ModalContainer";
import FromSendTweet from "../FromSendTweet/FromSendTweet";
import { TWEET_STORAGE } from "../../utils/constant";

export default function SendTweet(props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  //Función para abrir el modal
  const openModal = () => {
    return setIsOpenModal(true);
  };
  const { setToastProps, allTweet, editTweet, closeEdit } = props;
  //Función para cerrar el modal
  const closeModal = () => {
    return setIsOpenModal(false);
  };
  /*Esta es la función para recibir los datos del tweet, para luego guardarlos en el local storage  */
  const SendTweet = (event, formValue) => {
    event.preventDefault();
    const { name, tweet } = formValue;
    let allTweetArray = [];

    if (allTweet) {
      allTweetArray = allTweet;
    }

    if (!name || !tweet) {
      setToastProps({
        open: true,
        text: "WARNING:Todos los campos son obligatorios",
      });
    } else {
      formValue.time = moment();
      allTweetArray.push(formValue);
      //Aquí se está mandado nuestros valores en forma objeto
      //par eso trasformamos los valores en formato JSON
      //para ser exacto el valor del array creado
      localStorage.setItem(TWEET_STORAGE, JSON.stringify(allTweetArray));
      setToastProps({
        open: true,
        text: "Enviado",
      });
      closeModal();
      closeEdit();
    }
    allTweetArray = [];
  };
  return (
    <div className="send-tweet">
      <Fab
        className="send-tweet_open-modal"
        color="primary"
        aria-label="add"
        onClick={openModal}
      >
        <AddIcon />
      </Fab>
      <ModalContainer
        isOpenModal={isOpenModal}
        closeModal={closeModal}
        editTweet={editTweet}
        closeEdit={closeEdit}
      >
        <FromSendTweet sendTweet={SendTweet} />
      </ModalContainer>
    </div>
  );
}
