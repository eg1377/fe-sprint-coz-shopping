import React from "react";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function IconButtonMenu(){
  return(
    <IconButton aria-label="delete">
  <MenuIcon/>
</IconButton>
  );
}

export default IconButtonMenu;