import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  ListSubheader,
  ListItemText,
  ListItem,
  List,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    margin: "15px",
  },
  list: {
    width: "100%",
    minWidth: 400,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 220,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  title: {
    color: "#9D5559",
    width: "25%",
    margin: "15px",
    display: "inline",
  },
}));

function Conhecimentos() {
  const classes = useStyles();
  const linguagens = [
    "JavaScript",
    "TypeScript",
    "Golang",
    "C e Java",
    "Python",
  ];
  const bibs = ["React.JS", "React Native", "Material-UI"];
  const frontend = ["HTML 5", "CSS 3"];
  const diversos = ["Arduino e Microcontroladores", "Inglês médio"];
  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Conhecimentos
      </Typography>
      <List className={classes.list} subheader={<li />}>
        <li key={"titles"} className={classes.listSection}>
          <ul className={classes.ul}>
            <ListSubheader>Linguagens</ListSubheader>
            {linguagens.map((item) => (
              <ListItem key={"item"}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </ul>
          <ul className={classes.ul}>
            <ListSubheader>Bibliotecas e Frameworks</ListSubheader>
            {bibs.map((item) => (
              <ListItem key={"item"}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </ul>
          <ul className={classes.ul}>
            <ListSubheader>Frontend</ListSubheader>
            {frontend.map((item) => (
              <ListItem key={"item"}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </ul>
          <ul className={classes.ul}>
            <ListSubheader>Outros</ListSubheader>
            {diversos.map((item) => (
              <ListItem key={"item"}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </ul>
        </li>
      </List>
    </div>
  );
}

export default Conhecimentos;
