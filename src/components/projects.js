import { Typography} from "@mui/material";
import { Link as Weblink } from "@mui/material"
import * as React from 'react';
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from "./footer";
import ProjectThree from './threejs/projectthree';

const useStyles = makeStyles({
    background : {
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
      background: "linear-gradient(90deg, rgba(60, 56, 87, 0.67) 5%, rgba(57, 28, 100, 0.52) 62%, rgba(57, 28, 100, 0.74) 100%)",
      paddingRight: "12%",
      float: "right",
      borderLeft: "3px solid #ffa700",
    },
    dividertop:{
      height: "100px"
    },
    container: {
      color: "white",
      fontVariant: "all-petite-caps",
      zIndex: "0",
      position: "relative",
      marginBottom: "100px"
    },
    headertitle: {
      color: "white",
      fontFamily: 'Montserrat Subrayada, sans-serif',
      fontSize: "40px",
      textShadow: "4px 2px 4px rgba(255, 167, 0, 0.33)"
    },
    headertext: {
      color: "white",
      fontFamily: 'Montserrat, sans-serif',
      fontSize: "20px",
      textShadow: "4px 2px 4px rgba(255, 167, 0, 0.33)"
    },
    headercontainer: {
      paddingTop: "20px",
      transform: "rotate(-3deg)",
    },
    headerline: {
      width: "100%",
      backgroundColor: "#FFFF"
    },
    title: {
      borderBottom: "1px white solid",
    },
});


function Projects() {
    const styles = useStyles();
    document.title = "Projects"

  return (
    <>
    {/*HEADER*/}
    <div className={styles.topdiv}>
      <div className={styles.topdivcover}>
          {/*<div className={styles.headerline}>*/}
            <Container className={styles.headercontainer}>
              <Typography variant="h2" className={styles.headertitle}>Projects</Typography>
              <Typography variant="h2" className={styles.headertext}>Things I've <span>done</span></Typography>
              <br/>
              <Typography variant="h2" className={styles.headertext}>Along my studies I've done a few projects, here's some of them.</Typography>
              <br/>
              <Typography variant="h2" className={styles.headertext}>More to be added, some are only visible on my <Weblink color="#ffa700" href="https://www.github.com/kujuh3" target="_blank">GitHub</Weblink> for now.</Typography>
              <br/>
              <KeyboardArrowDownIcon sx={{ fontSize: 40, color: "#ffa700"}}/>
            </Container>
          {/*</div>*/}  
        <div id="topbox"></div>
      </div>
    </div>
    <div className={styles.dividertop}></div>
    {/*HEADER END*/}

    {/*CONTENT*/}
    <Container className={styles.container}>
      <div className={styles.title}>
        <Typography variant="h4">2022 - 2023</Typography>
      </div>
      <ProjectThree/>
        
    </Container>
    {/*CONTENT END*/}
    <Footer/>
    <div className={styles.background}>
    </div>
    </>
  );
}

export default Projects;
