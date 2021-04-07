import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "25%",
    margin: "15px",
  },
  title: {
    color: "#9D5559",
    display: "inline",
  },
});

function Objetivos() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Objetivos
      </Typography>
      <Typography variant="subtitle1" align="justify">
        Em busca de oportunidade para desenvolver e melhorar tudo que aprendi e
        estou aprendendo ao decorrer de meus estudos, e aprimorar gradativamente
        minhas habilidades e no meu crescimento profissional, podendo, assim,
        aplicar todos os conhecimentos adquiridos ao longo do ambiente acadêmico
        e cursos por fora que venho estudando.
      </Typography>
    </div>
  );
}

export default Objetivos;
