import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Container, List, Snackbar } from "@mui/material";
import SendTweet from "./components/sendTweet/SendTweet";
import { TWEET_STORAGE } from "./utils/constant";
import ListTweet from "./components/ListTweet";
function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null,
  });

  const onCloseSnack = () => {
    setToastProps({
      ...toastProps,
      open: false,
    });
  };
  const [allTweet, setAlltTweets] = useState([]);
  const [recargarTweet, setRecargarTweet] = useState(false);
  useEffect(() => {
    //Para que resiva el valor de la constante
    const AllTweetStorage = localStorage.getItem(TWEET_STORAGE);
    const allTweetArray = JSON.parse(AllTweetStorage);
    setAlltTweets(allTweetArray);
    setRecargarTweet(false);
  }, [recargarTweet]);
  const deleteTweet = (index) => {
    allTweet.splice(index, 1);
    setAlltTweets(allTweet);
    localStorage.setItem(TWEET_STORAGE, JSON.stringify(allTweet));
    setRecargarTweet(true);
  };

  const [openEdit, setOpenEdit] = useState(false);
  const editTweet = () => {
    return setOpenEdit(true);
  };
  const closeEdit = () => {
    return setOpenEdit(false);
  };
  const valueEditTweet = (index) => {
    const value = allTweet[index];
    setEditTweet(value);
  };

  const [EditTweet, setEditTweet] = useState([]);
  useEffect(() => {
    const val = valueEditTweet();
    setEditTweet(val);
  }, []);
  return (
    <Container className="tweets-simulator" maxWidth={false}>
      <Header />
      <SendTweet
        setToastProps={setToastProps}
        allTweet={allTweet}
        editTweet={openEdit}
        closeEdit={closeEdit}
      />
      <ListTweet
        allTweet={allTweet}
        deleteTweet={deleteTweet}
        editTweet={editTweet}
        valueEditTweet={valueEditTweet}
        value={EditTweet}
      />
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={toastProps.open}
        autoHideDuration={1000}
        onClose={onCloseSnack}
        message={<span id="message-id">{toastProps.text}</span>}
      />
    </Container>
  );
}

export default App;
