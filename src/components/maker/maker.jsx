import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
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
    {
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
    {
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
  ]);
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
  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
