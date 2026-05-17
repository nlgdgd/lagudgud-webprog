import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { styled, useTheme, alpha } from "@mui/material/styles";
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  InputBase,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";

const drawerWidth = 240;
const pinkText = "#FFA6C9"; // Theme color

const dashboardNavItems = [
  { label: "Dashboard", to: "/dashboard", icon: DashboardIcon },
  { label: "Reports", to: "/dashboard/reports", icon: AssessmentIcon },
  { label: "Users", to: "/dashboard/users", icon: PeopleIcon },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 16,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(3),
  width: "250px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1.5),
  position: "absolute",
  height: "100%",
  display: "flex",
  alignItems: "center",
  color: pinkText,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: pinkText,
  paddingLeft: "40px",
  width: "100%",
  "& .MuiInputBase-input::placeholder": {
    color: pinkText,
    opacity: 0.7,
  },
}));

const DashLayout = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleLogout = () => navigate("/");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* 🔷 TOP NAVBAR - Updated to Black and Pink */}
      <AppBar 
        position="fixed" 
        sx={{ backgroundColor: "black", color: pinkText }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            Dashboard
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder=" Search..." />
          </Search>

          <Button color="inherit" onClick={handleLogout} sx={{ fontWeight: 'bold' }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* 🔷 SIDEBAR - Updated to Black and Pink */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-paper": { 
            width: drawerWidth, 
            backgroundColor: "black", 
            color: pinkText 
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={handleDrawerClose} sx={{ color: pinkText }}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>

        <Divider sx={{ backgroundColor: alpha(pinkText, 0.2) }} />

        <List>
          {dashboardNavItems.map(({ label, to, icon: Icon }) => (
            <ListItem key={to} disablePadding>
              <ListItemButton
                component={Link}
                to={to}
                onClick={handleDrawerClose}
                selected={location.pathname === to}
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: alpha(pinkText, 0.1),
                  },
                  "&:hover": {
                    backgroundColor: alpha(pinkText, 0.05),
                  },
                }}
              >
                <ListItemIcon sx={{ color: pinkText }}>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* 🔷 MAIN CONTENT */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashLayout;