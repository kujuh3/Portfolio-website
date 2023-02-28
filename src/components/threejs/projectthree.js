import React, { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import { Typography} from "@mui/material";
import Chip from '@mui/material/Chip';
import { Link as Weblink } from "@mui/material";
import PreviewIcon from '@mui/icons-material/Preview';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTrail, a } from 'react-spring'
import Trail from '../animations/trail';

const useStyles = makeStyles({
    container: {
      color: "white",
      fontVariant: "all-petite-caps",
      zIndex: "0",
      position: "relative"
    },
    headertext: {
      color: "white",
      fontFamily: 'Montserrat, sans-serif',
      fontSize: "37px",
      textShadow: "4px 2px 4px rgba(255, 167, 0, 0.33)"
    },
    title: {
      borderBottom: "1px white solid",
      display: "flex"
    },
    textleft: {
      padding: "10px",
      color: "white",
      width: "60%"
    },
    textright: {
      padding: "10px",
      textAlign: "right",
      width: "50%",
      marginTop: "auto"
    },
    textcontainer: {
      display: "flex",
      padding: "10px"
    },
    projectpaper: {
      margin: "10px",
      padding: "10px",
      backgroundColor: "#271542 !important",
      color: "white"
    },
    projectpic:{
        width: "80%",
        boxShadow: "5px 5px #f69b15"
    },


});

<<<<<<< Updated upstream
/*function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 300 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 290 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  )
}*/

export default function App() {
=======
export default function App(props) {
>>>>>>> Stashed changes
  const styles = useStyles();
  const Projects = require('../../data/json/projects.json');
  const [open, set] = useState(true)

  const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 1160;
    const breakpoint2 = 730;
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
            {Projects.map((project, index) => {
            return(
            <Paper key={index} sx={{border: "1px white solid"}} className={styles.projectpaper} elevation={3}>
                <div style={{display: "block !important"}}>
                        <div className={styles.title}>
                        <Typography className={styles.headertext} variant="h3">{project.name}</Typography>
                        <div style={{display: "flex", marginTop: "auto", marginLeft: "auto"}}>
                            <Weblink href={project.link} title="Open preview" rel="noreferrer" target="_blank"><PreviewIcon sx={{color: "white", fontSize: "30px"}}/></Weblink><br/>
                            <Weblink href={project.github} title="Open GitHub" rel="noreferrer" target="_blank"><GitHubIcon sx={{color: "white", fontSize: "30px"}}/></Weblink>
                        </div>
                        </div>
                        <div style={{marginTop: "2px"}}>
                        {project.techs.map((tech) =>{
                            return(<Chip key={tech} sx={{backgroundColor: "#F69B15 !important", margin:"1px", color: "white !important"}} label={tech} />)
                            })}
                        </div>
                        <div style={{marginTop: "30px", backgroundColor: "#73737385", padding: "10px", borderRadius: "4px", boxShadow: "5px 4px #f69b15"}}>
                            <Typography>{project.description}</Typography>
                        </div>
                    </div>
                        <a href={project.link} rel="noreferrer" target="_blank"><img alt="Preview" style={{width: "100%", marginTop: "10px"}} src={project.picture}/></a>
            </Paper>
            );
            })}
        </>
      )}
  else if (width <= breakpoint) {
  return (
    <>
        {Projects.map((project, index) => {
        return(
        <Paper key={index} className={styles.projectpaper} elevation={3}>
            <div className={styles.textcontainer}>
                <div className={styles.textleft}>
                    <div className={styles.title}>
                    <Typography className={styles.headertext} variant="h3">{project.name}</Typography>
                    <div style={{display: "flex", marginTop: "auto", marginLeft: "auto"}}>
                        <Weblink href={project.link} title="Open preview" rel="noreferrer" target="_blank"><PreviewIcon sx={{color: "white", fontSize: "30px"}}/></Weblink><br/>
                        <Weblink href={project.github} title="Open GitHub" rel="noreferrer" target="_blank"><GitHubIcon sx={{color: "white", fontSize: "30px"}}/></Weblink>
                    </div>
                    </div>
                    <div style={{marginTop: "2px"}}>
                    {project.techs.map((tech) =>{
                        return(<Chip key={tech} sx={{backgroundColor: "#F69B15 !important", margin:"1px", color: "white !important"}} label={tech} />)
                        })}
                    </div>
                    <div style={{marginTop: "30px", backgroundColor: "#73737385", padding: "10px", borderRadius: "4px", boxShadow: "5px 4px #f69b15"}}>
                        <Typography>{project.description}</Typography>
                    </div>
                </div>
                <div className={styles.textright}>
                    <a href={project.link} rel="noreferrer" target="_blank"><img alt="Preview" className={styles.projectpic} src={project.picture}/></a>
                </div>
            </div>
        </Paper>
        );
        })}
    </>
  )}
  else {
    return (
      <>
          {Projects.map((project, index) => {
          return(
          <Trail key={index} open={open}>
          <Paper className={styles.projectpaper} elevation={3}>
              <div className={styles.textcontainer}>
                  <div className={styles.textleft}>
                      <div className={styles.title}>
                      <Typography className={styles.headertext} variant="h3">{project.name}</Typography>
                      <div style={{display: "flex", marginTop: "auto", marginLeft: "auto"}}>
                          <Weblink href={project.link} title="Open preview" rel="noreferrer" target="_blank"><PreviewIcon sx={{color: "white", fontSize: "30px"}}/></Weblink><br/>
                          <Weblink href={project.github} title="Open GitHub" rel="noreferrer" target="_blank"><GitHubIcon sx={{color: "white", fontSize: "30px"}}/></Weblink>
                      </div>
                      </div>
                      <div style={{marginTop: "2px"}}>
                      {project.techs.map((tech) =>{
                          return(<Chip key={tech} sx={{backgroundColor: "#F69B15 !important", margin:"1px", color: "white !important"}} label={tech} />)
                          })}
                      </div>
                      <div style={{marginTop: "30px", backgroundColor: "#73737385", padding: "10px", borderRadius: "4px", boxShadow: "5px 4px #f69b15"}}>
                          <Typography>{project.description}</Typography>
                      </div>
                  </div>
                  <div className={styles.textright}>
                      <a href={project.link} rel="noreferrer" target="_blank"><img alt="Preview" className={styles.projectpic} src={project.picture}/></a>
                  </div>
              </div>
          </Paper>
          </Trail>
          );
          })}
      </>
    )
  }
}
