import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import {
  AccountCircleRounded,
  AddCircleRounded,
  AutoAwesomeMotionRounded,
  ConnectWithoutContact,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function NavBar() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={4}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          component={Link}
          to="/Perfil"
          label="Perfil"
          value="perfil"
          icon={<AccountCircleRounded />}
        />
        <BottomNavigationAction
          component={Link}
          to="/Procedimientos"
          label="Procedimientos"
          value="procedimientos"
          icon={<AddCircleRounded />}
        />
        <BottomNavigationAction
          component={Link}
          to="/Boletas"
          label="Boletas"
          value="boletas"
          icon={<AutoAwesomeMotionRounded />}
        />
        <BottomNavigationAction
          component={Link}
          to="/Comunidad"
          label="Comunidad"
          value="comunidad"
          icon={<ConnectWithoutContact />}
        />
      </BottomNavigation>
    </Paper>
  );
}

export default NavBar;
