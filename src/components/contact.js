import { Typography} from "@mui/material";
import * as React from 'react';
import Container from '@mui/material/Container'
import { makeStyles } from '@mui/styles';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from "./footer";
import { TextField } from '@mui/material';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

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
        backgroundImage: "url(/img/contactheader.webp)",
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
    topbox: {
      position: "absolute",
      height: "35%",
      width: "103%",
      backgroundColor: "#271542",
      bottom: "-52px",
      transform: "rotate(-3deg)",
      left: "-10px"
    },
    test:{
      height: "2000px"
    },
    dividertop:{
      height: "100px"
    },
    container: {
      color: "white",
      fontVariant: "all-petite-caps",
      zIndex: "0",
      position: "relative",
      backgroundColor: "#271542",
      borderRadius: "5px",
      marginTop: "40px",
      marginBottom: "100px",
      boxShadow:"2px 2px 5px #000"
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
    dividerleft: {
      position: "absolute",
      height: "20%",
      width: "73%",
      backgroundColor: "#271542",
      transform: "rotate(-3deg)",
    },
    firstelement:{
      backgroundColor: "white",
      transform: "rotate(3deg)",
      zIndex: "2"
    },
    wrapper:{
      zIndex: "10"
    },
    title: {
      borderBottom: "1px white solid",
    },
    textleft: {
      padding: "10px",
      color: "white",
      width: "60%"
    },
    textright: {
      padding: "10px",
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto"
    },
    textcontainer: {
      marginBottom: "50px",
      padding: "10px"
    },
    root: {
      '& > *': {
        overFlow: "hidden",
        position:"relative",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#ffa93a",
      },
      "& .MuiOutlinedInput-root.Mui-focused": {
        color: "#d4d4d4"
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#d4d4d4",
        margin: "1px"
      },
     "& .MuiOutlinedInput-input": {
      color: "#ffa93a",
    },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "white",
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "#ffa93a",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "#ffa93a",
      },
      "&.MuiFormLabel-root": {
        color: "white"
      }
    },
    viesti:{
      
    },

    contactform:{
      
    },
    button:{
        textAlign: "center",
        backgroundColor:"#fd8e00"
    },
    emailheaders: {

    }
});


function Frontpage() {
    
  document.title = "Contact"
  const styles = useStyles();
  function submit(e){
    e.preventDefault();

    emailjs.sendForm('service_olmxr94', 'template_e78h0pc', e.target, 'user_hGVI2KSiWQaeHuOQuUpbU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    return(alert("Message sent!"))
}
  return (
    <>
    {/*HEADER*/}
    <div className={styles.topdiv}>
      <div className={styles.topdivcover}>
          {/*<div className={styles.headerline}>*/}
            <Container className={styles.headercontainer}>
              <Typography variant="h2" className={styles.headertitle}>Say hello!</Typography>
              <Typography variant="h2" className={styles.headertext}>Need something done? Have a thing to say?</Typography>
              <br/>
              <Typography variant="h2" className={styles.headertext}>Feel free to <span>contact</span> me!</Typography>
              <KeyboardArrowDownIcon sx={{ fontSize: 40, color: "#ffa700"}}/>
            </Container>
          {/*</div>*/}  
        <div id="topbox"></div>
      </div>
    </div>
    <div className={styles.dividertop}></div>
    {/*HEADER END*/}

    {/*CONTENT*/}
    <Container maxWidth="sm" className={styles.container}>
      <div className={styles.textcontainer}>
          <div style={{textAlign: "center", margin:"10px"}}>
            <Typography variant="h2" className={styles.headertext}><span>Juho Kujala</span></Typography>
            <Typography variant="h2" className={styles.headertext}>Kujala1@windowslive.com</Typography>
            <Typography variant="h2" className={styles.headertext}>Based in Tampere</Typography>
          </div>
              <form className={styles.root} noValidate autoComplete="off" onSubmit={submit}>
                <div className={styles.emailheaders}>
                  <TextField sx={{width: "50%"}} name="user_name" id="nimi" label="Name" variant="outlined"/>
                  <TextField sx={{width: "50%"}} name="user_email" id="sposti" label="Email" variant="outlined"/>
                </div>
                <TextField sx={{width: "100%", marginTop: "7px"}} name="message" className={styles.viesti} multiline rows={8} id="viesti" label="Message" variant="outlined"/>
                <Button
                    variant="contained"
                    color="primary"
                    className={styles.button}
                    type="submit"
                    endIcon={<SendIcon></SendIcon>}
                >Send
                </Button>
              </form>
      </div>
    </Container>
    {/*CONTENT END*/}
    <Footer/>
    <div className={styles.background}>
    </div>
    </>
  );
}

export default Frontpage;
