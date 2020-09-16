import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import StorageIcon from "@material-ui/icons/Storage";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Skills() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="skills">
      <Grid container className="centerSkills" justify="center" spacing={0}>
        <Grid item md={6}>
          <Paper className="paper leftBorder" style={{ paddingBottom: "96px" }}>
            <div className="iconDesign">
              <i class="fa fa-code" aria-hidden="true"></i>
            </div>
            <h3 className="head">Front-end </h3>
            <p align="center" className="textAlign">
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </p>
            <h4 className="skillsDev">Languages I use :</h4>
            <div className="centerText">HTML5</div>
            <div className="centerText">CSS3</div>
            <div className="centerText">Javascript</div>

            <h4 className="skillsDev">Libraries and Frameworks I use :</h4>
            <div
              className="centerText"
              style={{ marginLeft: "88px", marginRight: "80px" }}
            >
              React JS, Vue JS, Angular JS, Bootstrap, Materail UI, Semantic UI,
              JQuery
            </div>
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className="paper rightBorder">
            <div className="iconDesign">
              <StorageIcon />
            </div>
            <h3 className="head">Back-end</h3>
            <p align="center" className="textAlign">
              I also love to do server-side of web application with the
              Knowledge of various DBMS technologies.
            </p>
            <h4 className="skillsDev">Languages I use :</h4>
            <div className="centerText">Javascript</div>
            <div className="centerText">Python</div>
            <div className="centerText">PHP</div>

            <h4 className="skillsDev">Frameworks I use :</h4>
            <div
              className="centerText"
              style={{ marginLeft: "40px", marginRight: "40px" }}
            >
              Node JS, Laravel, Django, Flask
            </div>

            <h4 className="skillsDev">Databases I use :</h4>
            <div
              className="centerText"
              style={{ marginLeft: "40px", marginRight: "40px" }}
            >
              SQL Server, PostgreSQL, MongoDB, MySQL
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
