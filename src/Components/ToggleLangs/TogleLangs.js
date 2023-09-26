import React, { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import SpanishFlag from "../../assets/spain.svg";
import "./ToggleLangs.css";
import { Context } from "../../context/langContext";

export default function TogleLangs() {
  const { toggleLang } = useContext(Context);
  return (
    <div className="container-langs">
      <img onClick={() => toggleLang("FR")} src={FrenchFlag} alt="" />
      <img onClick={() => toggleLang("EN")} src={EnglishFlag} alt="" />
      <img onClick={() => toggleLang("ES")} src={SpanishFlag} alt="" />
    </div>
  );
}
