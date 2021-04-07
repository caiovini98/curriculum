import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import image from "../../img/fundo.jpg";
import image2 from "../../img/profile.jpeg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#FFF",
    margin: "15px",
  },
  titleProject: {
    color: "#9D5559",
    display: "inline",
    marginLeft: "7%",
  },
  gridList: {
    flexWrap: "nowrap",
  },
  title: {
    color: "#FFF",
  },
  image: {
    height: "100%",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 18%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
});

function Projects() {
  const classes = useStyles();
  const projects = [
    {
      img: image,
      title: "Jokenpô",
      link: "https://github.com/caiovini98/jokenpo",
    },
    {
      img: image2,
      title: "ToDoList",
      link: "https://github.com/caiovini98/todolist",
    },
    {
      img: image2,
      title: "Lista de Afazeres",
      link: "https://github.com/caiovini98/listaDeAfazeres",
    },
    {
      img: image2,
      title: "Conversor de Moedas",
      link: "https://github.com/caiovini98/conversorDeMoedas",
    },
    {
      img: image2,
      title: "Finanças",
      link: "https://github.com/caiovini98/App-Financas",
    },
  ];

  return (
    <>
      <Typography variant="h4" className={classes.titleProject}>
        Projetos
      </Typography>
      <div className={classes.root}>
        <GridList className={classes.gridList} cols={2.5}>
          {projects.map((projects) => (
            <GridListTile key={projects.img}>
              <img
                src={projects.img}
                alt={projects.title}
                className={classes.image}
              />
              <GridListTileBar
                title={projects.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton href={projects.link} style={{ color: "#FFF" }}>
                    Conferir
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </>
  );
}

export default Projects;
