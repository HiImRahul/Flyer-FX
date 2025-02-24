import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src="/Flyerfx.png"  alt="Company Logo" style={{ height: 30, marginRight: 10 }} />
        
      </Toolbar>
    </AppBar>
  );
};

export default Header;
