import { useState, useEffect } from 'react';
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function Valikko() {

    const [open, setOpen] = useState(null);
    const [width, setWidth] = useState(window.innerWidth);
    const breakpoint = 600;
    const suljeMenu = () => {
      setOpen(null);
    }

    useEffect(() => {
      const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
          window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    if (width <= breakpoint) {
      return(
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: "relative",
          '& > *': {
            m: 1,
          },
          zIndex: 1,
        }}
      >
        <div style={{ position: "fixed", bottom: 0, margin: 0}}>
                <IconButton color="inherit" edge="start" onClick={ (e) => { setOpen(e.currentTarget) }}>
                    <MenuIcon sx={{ fontSize: 40, color: "#ffa700"}} />
                </IconButton>
                <Menu open={Boolean(open)} anchorEl={open} onClose={suljeMenu}>
                    <MenuItem 
                        component={Link}
                        to="/front"
                        onClick={ () => { 
                            suljeMenu();
                            }}
                    >Front page</MenuItem>
                    <MenuItem 
                        component={Link}
                        to="/projects"
                        onClick={ () => { 
                            suljeMenu();
                            }}
                    >Projects</MenuItem>
                    <MenuItem 
                        component={Link}
                        to="/contact"
                        onClick={ () => { 
                            suljeMenu();
                            }}
                    >Contact</MenuItem>
                 </Menu>
        </div>
      </Box>
      );
    }

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: "relative",
      '& > *': {
        m: 1,
      },
      zIndex: 1,
    }}
  >
    <ButtonGroup
    sx={{
        position: "fixed",
        bottom: 0,
    }}
    variant="text" aria-label="text button group" color="secondary">
      <Button style={{color: "rgb(171, 113, 255)"}} component={Link} to="/front">Front Page</Button>
      <Button style={{color: "rgb(171, 113, 255)"}} component={Link} to="/projects">Projects</Button>
      <Button style={{color: "rgb(171, 113, 255)"}} component={Link} to="/contact">Contact</Button>
    </ButtonGroup>
  </Box>
  );
}

export default Valikko;
