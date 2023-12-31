import React, { useContext } from "react";
import { Context } from "../../context/langContext";
import "./Contenu.css";
import data from "../../assets/data";

export default function Content() {
  const { lang } = useContext(Context);
  console.log(lang);
  return (
    <div className="content">
      <h1 className="title">{data[lang].title}</h1>
      <p className="content-text">{data[lang].txt}</p>
    </div>
  );
}
