import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "35%",
    margin: "15px",
  },
});

function Experiencia(props) {
  const { title, name, date, description } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <Typography style={{ color: "#555555" }}>
          <Box fontWeight="fontWeightBold">{title}</Box>
        </Typography>
      </div>
      <div>
        <Typography style={{ color: "#78797B" }}>
          <Box fontStyle="italic">{name}</Box>
        </Typography>
      </div>
      <div>
        <Typography style={{ color: "#78797B" }}>
          <Box fontStyle="italic">{date}</Box>
        </Typography>
      </div>
      <div>
        <Typography style={{ color: "#78797B" }}>
          <Box textAlign="justify">{description}</Box>
        </Typography>
      </div>
    </div>
  );
}

export default Experiencia;
