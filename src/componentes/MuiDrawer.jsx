import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  Box,
  ListItem,
  ListItemButton,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  AccountCircleRounded,
  AddCircleRounded,
  AutoAwesomeMotionRounded,
  ConnectWithoutContact,
} from "@mui/icons-material";

function MuiDrawer({ drOpen, setDrOpen }) {
  return (
    <Drawer anchor="left" open={drOpen} onClose={() => setDrOpen(false)}>
      <Box>
        <List>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/Procedimientos"
              onClick={() => setDrOpen(false)}
            >
              <ListItemIcon>
                <AddCircleRounded />
              </ListItemIcon>
              <ListItemText primary={"Procedimientos"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/Boletas"
              onClick={() => setDrOpen(false)}
            >
              <ListItemIcon>
                <AutoAwesomeMotionRounded />
              </ListItemIcon>
              <ListItemText primary={"Boletas"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/Comunidad"
              onClick={() => setDrOpen(false)}
            >
              <ListItemIcon>
                <ConnectWithoutContact />
              </ListItemIcon>
              <ListItemText primary={"Comunidad"} />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component={Link}
              to="/Perfil"
              onClick={() => setDrOpen(false)}
            >
              <ListItemIcon>
                <AccountCircleRounded />
              </ListItemIcon>
              <ListItemText primary={"Perfil"} />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}

export default MuiDrawer;

// <Paper
//   sx={{
//     position: "fixed",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: "white",
//     zIndex: 2,
//   }}
//   elevation={4}
// >
//   <BottomNavigation value={value} onChange={handleChange}>
//     <BottomNavigationAction
//       component={Link}
//       to="/Perfil"
//       label="Perfil"
//       value="perfil"
//       icon={<AccountCircleRounded />}
//     />
//     <BottomNavigationAction
//       component={Link}
//       to="/Procedimientos"
//       label="Procedimientos"
//       value="procedimientos"
//       icon={<AddCircleRounded />}
//     />
//     <BottomNavigationAction
//       component={Link}
//       to="/Boletas"
//       label="Boletas"
//       value="boletas"
//       icon={<AutoAwesomeMotionRounded />}
//     />
//     <BottomNavigationAction
//       component={Link}
//       to="/Comunidad"
//       label="Comunidad"
//       value="comunidad"
//       icon={<ConnectWithoutContact />}
//     />
//   </BottomNavigation>
// </Paper>
