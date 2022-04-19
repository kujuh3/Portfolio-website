import { Typography, Link } from "@mui/material";
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const useStyles = makeStyles({
    footer: {
      width: "100%",
      height: "50px",
      right: "0px",
      bottom: "0px",
      position: "fixed",
      display: "inline-flex",
      backgroundColor: "#000c",
    },
    footertext: {
      fontWeight: "200 !important",
      fontVariant: "all-small-caps",
      lineHeight: "1.5rem !important",
      marginTop: "auto !important",
      marginBottom: "auto !important",
      paddingLeft: "20px",
      fontFamily: 'Montserrat, sans-serif',
    },
    icons: {
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "auto",
      paddingRight: "20px",
      zIndex: "10"
    }
});

function Footer() {
    const styles = useStyles();

  return (
    <>
    <div className={styles.footer}>
        <Typography className={styles.footertext} color="white">©Juho Kujala</Typography>
        <div className={styles.icons}>
          <Link href="https://www.linkedin.com/in/kujala1/" target="_blank">
            <LinkedInIcon sx={{color: "white", fontSize: "30px"}}/>
          </Link>
          <Link href="http://www.github.com/kujuh3" target="_blank">
            <GitHubIcon sx={{color: "white", fontSize: "30px"}}/>  
          </Link>      
        </div>     
      </div>
    </>
  );
}

export default Footer;
