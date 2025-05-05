import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";
import GroupIcon from "@mui/icons-material/Group";
import SecurityIcon from "@mui/icons-material/Security";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Collapse,
} from "@mui/material";

import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [openUserMgmt, setOpenUserMgmt] = React.useState(false);
  const [openAuth, setOpenAuth] = React.useState(false);

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        width: {
          xs: "180px",
          sm: "220px",
          md: "270px",
        },
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "width 0.3s ease",
      }}
    >
      <Box>
        {/* Logo */}
        <Box
          sx={{
            mt: 3,
            ml: 4,
            fontFamily: "Poppins-Bold, Helvetica",
            fontWeight: 700,
            fontSize: "18px",
          }}
        >
          <img
            src="src/assets/syborg-techLogo.png"
            style={{ width: "150px", height: "auto" }}
          />
        </Box>

        {/* Menu Items */}
        <List sx={{ mt: 3, px: 1 }}>
          {/* Dashboard */}
          <ListItem
            onClick={() => handleMenuItemClick("/dashboard")}
            sx={{
              borderRadius: "10px",
              mb: 1,
              bgcolor:
                location.pathname === "/dashboard" ? "#d1d4d2" : "transparent",
              height: "52px",
              "&:hover": {
                bgcolor:
                  location.pathname === "/dashboard" ? "#d1d4d2" : "#f5f5f5",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon
              sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}
            >
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
          </ListItem>
          {/* <ListItem
            onClick={() => handleMenuItemClick("/previewDocument1")}
            sx={{
              borderRadius: "10px",
              mb: 1,
              bgcolor:
                location.pathname === "/previewDocument1"
                  ? "#d1d4d2"
                  : "transparent",
              height: "52px",
              "&:hover": {
                bgcolor:
                  location.pathname === "/previewDocument1"
                    ? "#d1d4d2"
                    : "#f5f5f5",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon
              sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}
            >
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText
              primary="Preview Document"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
          </ListItem> */}

          {/* Projects */}
          <ListItem
            onClick={() => handleMenuItemClick("/previewDocument")}
            sx={{
              borderRadius: "10px",
              mb: 1,
              bgcolor:
                location.pathname === "/previewDocument"
                  ? "#d1d4d2"
                  : "transparent",
              height: "52px",
              "&:hover": {
                bgcolor:
                  location.pathname === "/previewDocument"
                    ? "#d1d4d2"
                    : "#f5f5f5",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon
              sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}
            >
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText
              primary="Preview Document"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
          </ListItem>

          {/* Reports */}
          <ListItem
            onClick={() => handleMenuItemClick("/documents")}
            sx={{
              borderRadius: "10px",
              mb: 1,
              bgcolor:
                location.pathname === "/documents" ? "#d1d4d2" : "transparent",
              height: "52px",
              "&:hover": {
                bgcolor:
                  location.pathname === "/documents" ? "#d1d4d2" : "#f5f5f5",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon
              sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}
            >
              <ReportIcon />
            </ListItemIcon>
            <ListItemText
              primary="Documents"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
          </ListItem>
        </List>
      </Box>

      {/* Logout Button */}
      <Box>
        <ListItem
          onClick={() => handleMenuItemClick("/logout")}
          sx={{
            mb: 3,
            "&:hover": {
              bgcolor: "#f5f5f5",
              cursor: "pointer",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Log Out"
            primaryTypographyProps={{
              fontFamily: "Poppins-Medium, Helvetica",
              fontWeight: 500,
              fontSize: "15px",
            }}
          />
        </ListItem>
      </Box>
    </Paper>
  );
};

export default Sidebar;
