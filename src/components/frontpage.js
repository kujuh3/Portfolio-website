import { useState, useRef, useEffect } from 'react';
import { Typography} from "@mui/material";
import { Link as Weblink } from "@mui/material"
import * as React from 'react';
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from "./footer";
import LinearProgress from '@mui/material/LinearProgress';
import Boxhtml from './threejs/frontthree';
import HiddenGalaxy from './threejs/galaxy';

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
        backgroundImage: "url(/img/frontpageheader.webp)",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "300px",
        width: "100%",
        position: "relative",
        overflowX: "clip"
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
      position: "relative"
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
    textleft: {
      padding: "10px",
      color: "white"
    },
    textright: {
      padding: "10px",
      textAlign: "right",
      width: "50%"
    },
    textcontainer: {
      display: "flex",
      marginBottom: "50px"
    },
    experience: {
      width: "200px",
      float: "right"
    },
    skill: {
      float: "left",
      position: "relative",
      top: "-20px",
      right: "-20px"
    },
    skillprogress: {
      height: "14px !important",
      borderRadius: "4px !important",
      width: "105px !important",
      top: "-10px",
      marginLeft: "auto"
    },
    aboutbg: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: "-1"
    }
});

const useEventListener = (eventName, handler, element = window) => {
  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
};


function Frontpage() {
    const [easterEgg, setEasterEgg] = useState(false);
    var [Maria, setMaria] = useState("");
    const styles = useStyles();
    const handler = ({key}) => {
      Maria += String(key);
      if(Maria == "maria"){
        ReactSucksfuckingASS()
        console.log(Maria)
      }
    };
    
    useEventListener("keydown", handler);
    const ReactSucksfuckingASS = () => setEasterEgg(true)
  return (
    <>
    {/*HEADER*/}
    <div className={styles.topdiv}>
      <div className={styles.topdivcover}>
          {/*<div className={styles.headerline}>*/}
            <Container className={styles.headercontainer}>
              <Typography variant="h2" className={styles.headertitle}>Web developer</Typography>
              <Typography variant="h2" className={styles.headertext}>Hi, I'm <span>Juho.</span></Typography>
              <br/>
              <Typography variant="h2" className={styles.headertext}>I'm a programmer, and as such I love making puzzles and solving them.</Typography>
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
        <Typography variant="h4">About me</Typography>
      </div>
        <div className={styles.textcontainer}>
          <div className={styles.textleft}>
            <Typography>I'm a 25 year old computer science student from Seinäjoki. Everything computer related has always been close at heart, and currently I'm looking to fulfill my yearn for working as a developer.</Typography>
            <br/>
            <Typography>As a person I've grown up to be a team player. Being humble is my signature, never take offense to criticism – and always keep on improving.</Typography>
          </div>
            <div className={styles.textright}>
              <Typography>You can catch me at</Typography>
              <br/>
              <Typography><Weblink color="#ffa700" href="http://www.github.com/kujuh3" target="_blank">GitHub</Weblink></Typography>
              <Typography><Weblink color="#ffa700" href="https://www.linkedin.com/in/kujala1/" target="_blank">LinkedIn</Weblink></Typography>
              <Typography><Weblink color="#ffa700" href="https://www.twitch.tv/lenkkirastas" target="_blank">Twitch</Weblink></Typography>
          </div>
          </div>

      <div className={styles.title}>
        <Typography variant="h4">Experience</Typography>
      </div>
        <div className={styles.textcontainer}>
          <div className={styles.textleft}>
          <Typography>My experience as a developer is mainly focused towards web development. As a hobby on the side I dabble in other environments.</Typography>
          <br/>
          <Typography>Skills listed here are ranked relative to my current knowledge. Not everything is listed (Ex. Threejs), only the ones I feel most confidence with. As always with programming: <span>learning never ends.</span></Typography>
          </div>
            <div className={styles.textright}>
              <br/>
              <div className={styles.experience}>
                <Typography className={styles.skill} color="#ffa700" variant="h6">React</Typography><LinearProgress className={styles.skillprogress} valueBuffer={100} variant="buffer" value={90}/>
                <br/>
                <Typography className={styles.skill} color="#ffa700" variant="h6">Node</Typography><LinearProgress className={styles.skillprogress} valueBuffer={100} variant="buffer" value={80}/>
                <br/>
                <Typography className={styles.skill} color="#ffa700" variant="h6">JS</Typography><LinearProgress className={styles.skillprogress} valueBuffer={100} variant="buffer" value={80}/>
                <br/>
                <Typography className={styles.skill} color="#ffa700" variant="h6">PHP</Typography><LinearProgress className={styles.skillprogress} valueBuffer={100} variant="buffer" value={60}/>
                <br/>
                <Typography className={styles.skill} color="#ffa700" variant="h6">SQL</Typography><LinearProgress className={styles.skillprogress} valueBuffer={100} variant="buffer" value={40}/>
                <br/>
                <Typography className={styles.skill} color="#ffa700" variant="h6">Python</Typography><LinearProgress className={styles.skillprogress} valueBuffer={100} variant="buffer" value={40}/>
              </div>
             </div>
            </div>
            <div className={styles.aboutbg}>
              {easterEgg
              ?<></>
              :<Boxhtml/>}
            </div>
    </Container>
    {/*CONTENT END*/}
    <Footer/>
    <div className={styles.background}>
      {(easterEgg)
      ?<><HiddenGalaxy/>{alert("Congratz, you've found the hidden kmeb")}</>
      :<></>
      }
    </div>
    </>
  );
}

export default Frontpage;
