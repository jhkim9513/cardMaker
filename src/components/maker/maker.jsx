import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Jonghwan",
      company: "none",
      theme: "dark",
      title: "Software Engineer",
      email: "dondon9513@gmail.com",
      message: "go for it",
      fileName: "jonghwan",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Jonghwan2",
      company: "none",
      theme: "light",
      title: "Software Engineer",
      email: "dondon9513@gmail.com",
      message: "go for it",
      fileName: "jonghwan",
      fileURL: "jonghwan.png",
    },
    3: {
      id: "3",
      name: "Jonghwan3",
      company: "none",
      theme: "colorful",
      title: "Software Engineer",
      email: "dondon9513@gmail.com",
      message: "go for it",
      fileName: "jonghwan",
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    // set함수 자체가 이전 값을 인자로 가지는 callback함수를 이용할 수 있다.
    setCards((cards) => {
      // setCards를 부를 때 그 때의 cards를 가지고와서
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
