import React from "react";
import Header from "./components/Header/Header";
import Objetivos from "./components/Objetivos/Objetivos";
import Conhecimentos from "./components/Conhecimentos/Conhecimentos";
import Experiencia from "./components/Experiencia/Experiencia";
import Projetos from "./components/Projetos/Projetos";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import "./App.css";

const useStyles = makeStyles({
  title: {
    color: "#9D5559",
    display: "inline",
    marginLeft: "7%",
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className="cards">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Objetivos />
          <Conhecimentos />
        </div>
        <Typography variant="h4" className={classes.title}>
          Experiência
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Experiencia
            title="Estágio T.I"
            name="Automind Automação Industrial LTDA"
            date="21/04/19 - 22/10-19"
            description="Executava tarefas de Help Desk, suporte a colaboradores 
          internos e externos, infraestrutura de dispositivos (computadores, 
          impressoras, laptops)."
          />
          <Experiencia
            title="Estágio Front-End"
            name="UDOK"
            date="01/12/2020 - 01/04/21"
            description="Realizava melhorias na interface do projeto, 
          utilizando as ferramentas ReactJs (TypeScript e JavaScript) e 
          Material U.I e reparava bugs no código."
          />
        </div>
        <Projetos />
      </div>
    </>
  );
}

export default App;
