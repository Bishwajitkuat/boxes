import React from "react";
import "./Main.css";
import Card from "./Card";

const Main = () => {
  return (
    <main>
      <Card name="Bisso" department="Developer" age="35" />
      <Card name="John" department="HR" age="45" />
      <Card name="River" department="ICT" age="30" />
      <Card name="Messi" department="Marketing" age="25" />
      <Card name="Ronaldo" department="Marketing" age="35" />
      <Card name="Benjama" department="Marketing" age="35" />
      <Card name="Mike" department="Developer" age="35" />
      <Card name="Karin" department="Developer" age="35" />
    </main>
  );
};

export default Main;
