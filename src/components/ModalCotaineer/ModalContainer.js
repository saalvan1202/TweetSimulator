import React from "react";
import "./ModalContainer.scss";
import { Modal } from "@mui/material";
export default function ModalContainer(props) {
  const { isOpenModal, closeModal, children, editTweet, closeEdit } = props;
  // let openCont;
  // if (isOpenModal == true) {
  //   openCont = isOpenModal;
  // } else {
  //   openCont = editTweet;
  // }

  // MODAL PARA AGREGAR
  // MODAL PARA EDITAR
  return (
    <div>
      <Modal
        className="modal-container"
        open={isOpenModal}
        onClose={closeModal}
        closeAfterTransition
      >
        <div>{children}</div>
      </Modal>

      <Modal
        className="modal-container"
        open={editTweet}
        onClose={closeEdit}
        closeAfterTransition
      >
        <div>{children}</div>
      </Modal>
    </div>
  );
}
