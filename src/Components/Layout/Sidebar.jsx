import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReportIcon from "@mui/icons-material/Report";
import GroupIcon from "@mui/icons-material/Group";
import SecurityIcon from "@mui/icons-material/Security";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ArchiveIcon from "@mui/icons-material/Archive";
import PreviewIcon from "@mui/icons-material/Preview";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";

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

  const [openAdmin, setOpenAdmin] = React.useState(false);
  //   const [openAuth, setOpenAuth] = React.useState(false);

  const handleMenuItemClick = (path) => {
    navigate(path);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        width: {
          xs: "140px", // for extra-small screens
          sm: "160px", // for small screens
          md: "200px", // for medium and up
        },
        height: "750px",
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
            ml: 3,
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
          {/* <ListItem
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
          </ListItem> */}

          <ListItem
            onClick={() => handleMenuItemClick("/archiveDocument1")}
            sx={{
              borderRadius: "10px",
              mt: 2,
              mb: 1,
              bgcolor:
                location.pathname === "/archiveDocument1"
                  ? "#d1d4d2"
                  : "transparent",
              height: "52px",
              "&:hover": {
                bgcolor:
                  location.pathname === "/archiveDocument1"
                    ? "#d1d4d2"
                    : "#f5f5f5",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon
              sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}
            >
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText
              primary="Archive Document 1"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
          </ListItem>

          {/* Projects */}
          {/* <ListItem
            onClick={() => handleMenuItemClick("/previewDocument")}
            sx={{
              borderRadius: "10px",
              mt: 2,
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
              <ArchiveIcon />
            </ListItemIcon>
            <ListItemText
              primary="Archive Document"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
          </ListItem> */}

          {/* Reports */}
          <ListItem
            onClick={() => handleMenuItemClick("/documents")}
            sx={{
              borderRadius: "10px",
              mt: 2,
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
              <PreviewIcon />
            </ListItemIcon>
            <ListItemText
              primary="View Documents"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
          </ListItem>

          {/* <ListItem
            onClick={() => handleMenuItemClick("/approveDoc")}
            sx={{
              borderRadius: "10px",
              mt: 2,
              mb: 1,
              bgcolor:
                location.pathname === "/approveDoc" ? "#d1d4d2" : "transparent",
              height: "52px",
              "&:hover": {
                bgcolor:
                  location.pathname === "/approveDoc" ? "#d1d4d2" : "#f5f5f5",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon
              sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}
            >
              <LibraryAddCheckIcon />
            </ListItemIcon>
            <ListItemText
              primary="Approve Documents"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
          </ListItem> */}

          {/* <ListItem
            onClick={() => setOpenAdmin(!openAdmin)}
            sx={{
              borderRadius: "10px",
              mt: 2,
              mb: 1,
              height: "52px",
              "&:hover": {
                bgcolor: "#f5f5f5",
                cursor: "pointer",
              },
            }}
          >
            <ListItemIcon
              sx={{ minWidth: "36px", ml: "8px", color: "#000000" }}
            >
              <GroupIcon />
            </ListItemIcon>
            <ListItemText
              primary="Admin"
              primaryTypographyProps={{
                fontFamily: "Poppins-Medium, Helvetica",
                fontWeight: 500,
                fontSize: "15px",
              }}
            />
            {openAdmin ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openAdmin} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              <ListItem
                onClick={() => handleMenuItemClick("/roles")}
                sx={{ height: 40, mb: 0.5, "&:hover": { bgcolor: "#f5f5f5" } }}
              >
                <ListItemText primary="Roles" />
              </ListItem>
              <ListItem
                onClick={() => handleMenuItemClick("/user")}
                sx={{ height: 40, "&:hover": { bgcolor: "#f5f5f5" } }}
              >
                <ListItemText primary="User" />
              </ListItem>
              <ListItem
                onClick={() => handleMenuItemClick("/folders")}
                sx={{ height: 40, mt: 2, "&:hover": { bgcolor: "#f5f5f5" } }}
              >
                <ListItemText primary="Configure Folders" />
              </ListItem>
            </List>
          </Collapse> */}
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
