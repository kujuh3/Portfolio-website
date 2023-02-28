import { Typography } from "@mui/material";
import { Link as Weblink } from "@mui/material";
import * as React from "react";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Footer from "./footer";
import ProjectThree from "./threejs/projectthree";
import { directories, commits } from "./api/gitAPI";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";

const useStyles = makeStyles({
  background: {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: "#0F0A15",
    zIndex: -1,
  },
  topdiv: {
    backgroundImage: "url(/img/projectsheader.webp)",
    backgroundAttachment: "fixed",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "300px",
    width: "100%",
    position: "relative",
    overflowX: "clip",
  },
  topdivcover: {
    height: "300px",
    width: "80%",
    overflowX: "clip",
    background:
      "linear-gradient(90deg, rgba(60, 56, 87, 0.67) 5%, rgba(57, 28, 100, 0.52) 62%, rgba(57, 28, 100, 0.74) 100%)",
    paddingRight: "12%",
    float: "right",
    borderLeft: "3px solid #ffa700",
  },
  dividertop: {
    height: "100px",
  },
  container: {
    color: "white",
    fontVariant: "all-petite-caps",
    zIndex: "0",
    position: "relative",
    marginBottom: "100px",
  },
  headertitle: {
    color: "white",
    fontFamily: "Montserrat Subrayada, sans-serif",
    fontSize: "40px",
    textShadow: "4px 2px 4px rgba(255, 167, 0, 0.33)",
  },
  headertext: {
    color: "white",
    fontFamily: "Montserrat, sans-serif",
    fontSize: "20px",
    textShadow: "4px 2px 4px rgba(255, 167, 0, 0.33)",
  },
  headercontainer: {
    paddingTop: "20px",
    transform: "rotate(-3deg)",
  },
  headerline: {
    width: "100%",
    backgroundColor: "#FFFF",
  },
  title: {
    borderBottom: "5px #271542 groove",
    width: "calc(100% + 32px)",
    marginRight: "-16px"
  },
});

function Projects() {
  const [gitDirectories, setDirectories] = React.useState();
  const [commitamount, setCommits] = React.useState();
  const styles = useStyles();
  document.title = "Projects";

  React.useEffect(() => {
    directories().then((data) => setDirectories(data.data));
    commits()
      .then((data) => {
        setCommits(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      {/*HEADER*/}
      <div className={styles.topdiv}>
        <div className={styles.topdivcover}>
          {/*<div className={styles.headerline}>*/}
          <Container className={styles.headercontainer}>
            <Typography variant="h2" className={styles.headertitle}>
              Projects
            </Typography>
            <Typography variant="h2" className={styles.headertext}>
              Things I've <span>done</span>
            </Typography>
            <br />
            <Typography variant="h2" className={styles.headertext}>
              More to be added, some are only visible on my{" "}
              <Weblink
                color="#ffa700"
                href="https://www.github.com/kujuh3"
                target="_blank"
              >
                GitHub
              </Weblink>{" "}
              for now.
            </Typography>
            <br />
            <KeyboardArrowDownIcon sx={{ fontSize: 40, color: "#ffa700" }} />
          </Container>
          {/*</div>*/}
          <div id="topbox"></div>
        </div>
      </div>
      <div className={styles.dividertop}></div>
      {/*HEADER END*/}

      {/*CONTENT*/}
      <Container className={styles.container}>
        {gitDirectories && commitamount ? (
          <>
            <Grid className={styles.title} container spacing={2}>
              <Grid item xs={6}>
                <Typography
                  sx={{
                    color: "white",
                    display: "flex",
                    marginTop: "5px",
                  }}
                  variant="h5"
                >
                  {commitamount.totalContributions}
                  <Typography
                    sx={{ margin: "auto 0 auto 5px", color: "#ffa700" }}
                  >
                    Commits total
                  </Typography>
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Weblink
                  href={"https://github.com/kujuh3?tab=repositories"}
                  title="Repositories"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Typography
                    sx={{
                      color: "white",
                      display: "flex",
                      marginTop: "5px",
                    }}
                    variant="h5"
                  >
                    {gitDirectories.length}{" "}
                    <Typography
                      sx={{ margin: "auto 0 auto 5px", color: "#ffa700" }}
                    >
                      {" "}
                      Public repositories
                    </Typography>
                  </Typography>
                </Weblink>
              </Grid>
            </Grid>
            <ProjectThree commits={commitamount} />
          </>
        ) : (
          <>
            <LinearProgress sx={{ margin: "auto" }} />
          </>
        )}
      </Container>
      {/*CONTENT END*/}
      <Footer />
      <div className={styles.background}></div>
    </>
  );
}

export default Projects;
