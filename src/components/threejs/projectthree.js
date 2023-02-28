import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import { Link as Weblink } from "@mui/material";
import PreviewIcon from "@mui/icons-material/Preview";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTrail, a } from "react-spring";
import Trail from "../animations/trail";

const useStyles = makeStyles({
  container: {
    color: "white",
    fontVariant: "all-petite-caps",
    zIndex: "0",
    position: "relative",
  },
  headertext: {
    color: "white",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "37px",
    textShadow: "4px 2px 4px rgba(255, 167, 0, 0.33)",
  },
  title: {
    borderBottom: "1px white solid",
    display: "flex",
  },
  textleft: {
    padding: "10px",
    color: "white",
    width: "60%",
  },
  textright: {
    padding: "10px",
    textAlign: "right",
    width: "50%",
    marginTop: "auto",
  },
  textcontainer: {
    display: "flex",
    padding: "10px",
  },
  projectpaper: {
    margin: "10px",
    padding: "10px",
    backgroundColor: "#271542 !important",
    color: "white",
  },
  projectpic: {
    width: "80%",
    boxShadow: "5px 5px #f69b15",
  },
});

export default function App(props) {
  const styles = useStyles();
  const Projects = require("../../data/json/projects.json");
  const GroupedProjects = groupBy(Projects, "year");
  const Years = getYears(2019).reverse();
  const [open, set] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 1160;
  const breakpoint2 = 730;

  function groupBy(xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  function getYears(startYear) {
    var currentYear = new Date().getFullYear(),
      years = [];
    startYear = startYear || 1980;
    while (startYear <= currentYear) {
      years.push(startYear++);
    }
    return years;
  }

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width <= breakpoint2) {
    return (
      <>
        {(() => {
          let td = [];
          for (const item in Years) {
            GroupedProjects[Years[item]] ? (
              td.push(
                <Typography
                  key={Years[item]}
                  sx={{
                    display: "flex",
                    borderBottom: "1px dashed #ffa700",
                    marginTop: "5px",
                  }}
                  variant="h4"
                >
                  {" "}
                  {Years[item]}{" "}
                  <Typography
                    sx={{ margin: "auto 0 auto 5px", color: "#ffa700" }}
                  >
                    {" "}
                    - {props.commits[Years[item]]} Commits
                  </Typography>
                </Typography>
              )
            ) : (
              <></>
            );
            GroupedProjects[Years[item]]?.map((project) => {
              td.push(
                <Paper
                  key={Math.random()}
                  className={styles.projectpaper}
                  elevation={3}
                  sx={{ border: "1px white solid" }}
                >
                  <div style={{ display: "block !important" }}>
                    <div className={styles.title}>
                      <Typography className={styles.headertext} variant="h3">
                        {project.name}
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          marginTop: "auto",
                          marginLeft: "auto",
                        }}
                      >
                        <Weblink
                          href={project.link}
                          title="Open preview"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <PreviewIcon
                            sx={{ color: "white", fontSize: "30px" }}
                          />
                        </Weblink>
                        <br />
                        <Weblink
                          href={project.github}
                          title="Open GitHub"
                          rel="noreferrer"
                          target="_blank"
                        >
                          <GitHubIcon
                            sx={{ color: "white", fontSize: "30px" }}
                          />
                        </Weblink>
                      </div>
                    </div>
                    <div style={{ marginTop: "2px" }}>
                      {project.techs.map((tech) => {
                        return (
                          <Chip
                            key={tech}
                            sx={{
                              backgroundColor: "#F69B15 !important",
                              margin: "1px",
                              color: "white !important",
                            }}
                            label={tech}
                          />
                        );
                      })}
                    </div>
                    <div
                      style={{
                        marginTop: "30px",
                        backgroundColor: "#73737385",
                        padding: "10px",
                        borderRadius: "4px",
                        boxShadow: "5px 4px #f69b15",
                      }}
                    >
                      <Typography>{project.description}</Typography>
                    </div>
                  </div>
                  <a href={project.link} rel="noreferrer" target="_blank">
                    <img
                      alt="Preview"
                      className={styles.projectpic}
                      src={project.picture}
                    />
                  </a>
                </Paper>
              );
            });
          }
          return td;
        })()}
      </>
    );
  } else if (width <= breakpoint) {
    return (
      <>
        {(() => {
          let td = [];
          for (const item in Years) {
            GroupedProjects[Years[item]] ? (
              td.push(
                <Typography
                  key={Years[item]}
                  sx={{
                    display: "flex",
                    borderBottom: "1px dashed #ffa700",
                    marginTop: "5px",
                  }}
                  variant="h4"
                >
                  {" "}
                  {Years[item]}{" "}
                  <Typography
                    sx={{ margin: "auto 0 auto 5px", color: "#ffa700" }}
                  >
                    {" "}
                    - {props.commits[Years[item]]} Commits
                  </Typography>
                </Typography>
              )
            ) : (
              <></>
            );
            GroupedProjects[Years[item]]?.map((project) => {
              td.push(
                <Paper
                  key={Math.random()}
                  className={styles.projectpaper}
                  elevation={3}
                >
                  <div className={styles.textcontainer}>
                    <div className={styles.textleft}>
                      <div className={styles.title}>
                        <Typography className={styles.headertext} variant="h3">
                          {project.name}
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                            marginTop: "auto",
                            marginLeft: "auto",
                          }}
                        >
                          <Weblink
                            href={project.link}
                            title="Open preview"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <PreviewIcon
                              sx={{ color: "white", fontSize: "30px" }}
                            />
                          </Weblink>
                          <br />
                          <Weblink
                            href={project.github}
                            title="Open GitHub"
                            rel="noreferrer"
                            target="_blank"
                          >
                            <GitHubIcon
                              sx={{ color: "white", fontSize: "30px" }}
                            />
                          </Weblink>
                        </div>
                      </div>
                      <div style={{ marginTop: "2px" }}>
                        {project.techs.map((tech) => {
                          return (
                            <Chip
                              key={tech}
                              sx={{
                                backgroundColor: "#F69B15 !important",
                                margin: "1px",
                                color: "white !important",
                              }}
                              label={tech}
                            />
                          );
                        })}
                      </div>
                      <div
                        style={{
                          marginTop: "30px",
                          backgroundColor: "#73737385",
                          padding: "10px",
                          borderRadius: "4px",
                          boxShadow: "5px 4px #f69b15",
                        }}
                      >
                        <Typography>{project.description}</Typography>
                      </div>
                    </div>
                    <div className={styles.textright}>
                      <a href={project.link} rel="noreferrer" target="_blank">
                        <img
                          alt="Preview"
                          className={styles.projectpic}
                          src={project.picture}
                        />
                      </a>
                    </div>
                  </div>
                </Paper>
              );
            });
          }
          return td;
        })()}
        {Projects.map((project, index) => {
          return (
            <Paper key={index} className={styles.projectpaper} elevation={3}>
              <div className={styles.textcontainer}>
                <div className={styles.textleft}>
                  <div className={styles.title}>
                    <Typography className={styles.headertext} variant="h3">
                      {project.name}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "auto",
                        marginLeft: "auto",
                      }}
                    >
                      <Weblink
                        href={project.link}
                        title="Open preview"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <PreviewIcon
                          sx={{ color: "white", fontSize: "30px" }}
                        />
                      </Weblink>
                      <br />
                      <Weblink
                        href={project.github}
                        title="Open GitHub"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <GitHubIcon sx={{ color: "white", fontSize: "30px" }} />
                      </Weblink>
                    </div>
                  </div>
                  <div style={{ marginTop: "2px" }}>
                    {project.techs.map((tech) => {
                      return (
                        <Chip
                          key={tech}
                          sx={{
                            backgroundColor: "#F69B15 !important",
                            margin: "1px",
                            color: "white !important",
                          }}
                          label={tech}
                        />
                      );
                    })}
                  </div>
                  <div
                    style={{
                      marginTop: "30px",
                      backgroundColor: "#73737385",
                      padding: "10px",
                      borderRadius: "4px",
                      boxShadow: "5px 4px #f69b15",
                    }}
                  >
                    <Typography>{project.description}</Typography>
                  </div>
                </div>
                <div className={styles.textright}>
                  <a href={project.link} rel="noreferrer" target="_blank">
                    <img
                      alt="Preview"
                      className={styles.projectpic}
                      src={project.picture}
                    />
                  </a>
                </div>
              </div>
            </Paper>
          );
        })}
      </>
    );
  } else {
    return (
      <>
        {(() => {
          let td = [];
          for (const item in Years) {
            GroupedProjects[Years[item]] ? (
              td.push(
                <Typography
                  key={Years[item]}
                  sx={{
                    display: "flex",
                    borderBottom: "1px solid #ffa700",
                    marginTop: "5px",
                  }}
                  variant="h4"
                >
                  {Years[item]}
                  <Typography
                    sx={{ margin: "auto 0 auto 5px", color: "#ffa700" }}
                  >
                    - {props.commits[Years[item]]} Commits
                  </Typography>
                </Typography>
              )
            ) : (
              <></>
            );
            GroupedProjects[Years[item]]?.map((project) => {
              td.push(
                <Trail key={Math.random()} open={open}>
                  <Paper className={styles.projectpaper} elevation={3}>
                    <div className={styles.textcontainer}>
                      <div className={styles.textleft}>
                        <div className={styles.title}>
                          <Typography
                            className={styles.headertext}
                            variant="h3"
                          >
                            {project.name}
                          </Typography>
                          <div
                            style={{
                              display: "flex",
                              marginTop: "auto",
                              marginLeft: "auto",
                            }}
                          >
                            <Weblink
                              href={project.link}
                              title="Open preview"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <PreviewIcon
                                sx={{ color: "white", fontSize: "30px" }}
                              />
                            </Weblink>
                            <br />
                            <Weblink
                              href={project.github}
                              title="Open GitHub"
                              rel="noreferrer"
                              target="_blank"
                            >
                              <GitHubIcon
                                sx={{ color: "white", fontSize: "30px" }}
                              />
                            </Weblink>
                          </div>
                        </div>
                        <div style={{ marginTop: "2px" }}>
                          {project.techs.map((tech) => {
                            return (
                              <Chip
                                key={tech}
                                sx={{
                                  backgroundColor: "#F69B15 !important",
                                  margin: "1px",
                                  color: "white !important",
                                }}
                                label={tech}
                              />
                            );
                          })}
                        </div>
                        <div
                          style={{
                            marginTop: "30px",
                            backgroundColor: "#73737385",
                            padding: "10px",
                            borderRadius: "4px",
                            boxShadow: "5px 4px #f69b15",
                          }}
                        >
                          <Typography>{project.description}</Typography>
                        </div>
                      </div>
                      <div className={styles.textright}>
                        <a href={project.link} rel="noreferrer" target="_blank">
                          <img
                            alt="Preview"
                            className={styles.projectpic}
                            src={project.picture}
                          />
                        </a>
                      </div>
                    </div>
                  </Paper>
                </Trail>
              );
            });
          }
          return td;
        })()}
      </>
    );
  }
}
