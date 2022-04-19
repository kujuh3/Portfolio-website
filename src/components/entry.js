import { Typography, Link } from "@mui/material";
import * as React from 'react';
import 'animate.css';
import { makeStyles } from '@mui/styles';
import Threejs from './threejs/landingthree';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from "./footer";

const useStyles = makeStyles({
    background : {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        background: "radial-gradient(circle, rgba(26,4,43,1) 0%, rgba(0,0,0,1) 100%)",
        display: "flex"
    },
    headertext: {
      color: "white",
      fontFamily: 'inherit !important',
      fontVariant: "all-petite-caps",
      fontWeight: "380 !important",
      fontSize: "35px !important",
      textShadow: "4px 2px 4px rgba(255, 167, 0, 0.33)",
      animation: "fadeInDown",
      animationDuration: "1s",
      lineHeight:"1 !important"
    },
    welcomebox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      minHeight: "100vh",
    },
    welcomeboxtext: {
      marginTop: "auto",
      marginBottom: "auto",
      textAlign: "left",
      zIndex: "1"
    },
    link: {
      animation: "fadeInLeft",
      animationDuration: "0.5s",
      
    },
    blink: {
      animation: `$flasher1 infinite linear`,
      animationDuration: "4s",
      animationDelay: "4s"
    },
    "@keyframes flasher1":{
      "0%": {
        opacity: 1,
      },
      "10%": {
        opacity: 1
      },
      "20%": {
        opacity: 1
      },
      "30%": {
        opacity: 1
      },
      "40%": {
        opacity: 1
      },
      "50%": {
        opacity: 0
      },
      "60%": {
        opacity: 1
      },
      "70%": {
        opacity: 1
      },
      "80%": {
        opacity: 1
      },
      "90%": {
        opacity: 1
      },
      "100%": {
        opacity: 1
      }
    }
});

function Entry() {
    const styles = useStyles();

  return (
    <>
    <div className={styles.background}>
      <Threejs/>
    </div>
    <div className={styles.welcomebox}>
        <div className={styles.welcomeboxtext}>
          <Typography className={styles.headertext}>Hi, I'm <span>Juho</span></Typography>
          <Typography className={styles.headertext}>I'm a <span>web developer</span></Typography>
            <div className={styles.blink}>
              <Link className={styles.link} desc sx={{color: "white", float: "right", fontVariant: "all-petite-caps"}} href="/front">Continue
                <ArrowForwardIosIcon className={styles.link} sx={{marginBottom: "-6px"}}/> 
              </Link>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default Entry;
