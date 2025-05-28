// import {
//   Avatar,
//   Box,
//   Paper,
//   Typography,
//   Menu,
//   MenuItem,
//   IconButton,
// } from "@mui/material";
// import React from "react";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   return (
//     <Box
//       sx={{
//         position: "fixed",
//         top: 0,
//         left: 165,
//         right: 0,
//         zIndex: 1200,
//         px: 2,
//         height: 77,
//         bgcolor: "#fff",
//       }}
//     >
//       <Paper
//         elevation={4}
//         sx={{
//           width: "100%",
//           height: 70,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "flex-end",
//           pr: 3,
//           // mb: 2,
//           borderLeft: "none", // no border/curve on the left
//           borderTopLeftRadius: 0,
//           borderBottomLeftRadius: 0,
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             width: "100%",
//             padding: "0 16px",
//           }}
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 700,
//               paddingLeft: "25px",
//               fontFamily: "Poppins-Bold, Helvetica",
//               fontSize: "18px",
//             }}
//           >
//             DOCUMENT MANAGEMENT SYSTEM
//             {/* -{" "}
//             <span style={{ fontWeight: 500, opacity: 0.7 }}>
//               AML KYC
//             </span> */}
//           </Typography>

//           <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//             <Avatar
//               sx={{
//                 width: 35,
//                 height: 35,
//                 bgcolor: "#d9d9d9",
//               }}
//             />
//             <Typography
//               sx={{
//                 fontFamily: "Poppins, Helvetica",
//                 fontWeight: 700,
//                 fontSize: 16,
//               }}
//             >
//               Admin
//             </Typography>
//           </Box>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default Header;

import {
  Avatar,
  Box,
  Paper,
  Typography,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const users = [
    { name: "Daniel Lewis", role: "Sales", route: "/archiveDocument1" },
    { name: "Sophia Martinez", role: "Accounts", route: "/invoice" },
    { name: "Michael Carter ", role: "Legal", route: "/legal" },
    { name: "Emily Johnson ", role: "HR", route: "/hr" },
  ];

  const [selectedUser, setSelectedUser] = useState(users[0]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (user) => {
    if (user) {
      setSelectedUser(user);
      navigate(user.route);
    }
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 165,
        right: 0,
        zIndex: 1200,
        px: 2,
        height: 77,
        bgcolor: "#fff",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          pr: 3,
          borderLeft: "none",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            padding: "0 16px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              paddingLeft: "25px",
              fontFamily: "Poppins-Bold, Helvetica",
              fontSize: "18px",
            }}
          >
            DOCUMENT MANAGEMENT SYSTEM
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                width: 35,
                height: 35,
                bgcolor: "#d9d9d9",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Poppins, Helvetica",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              {selectedUser.name} ({selectedUser.role})
            </Typography>
            <IconButton onClick={handleClick} size="small">
              <ArrowDropDownIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              {users.map((user) => (
                <MenuItem key={user.name} onClick={() => handleClose(user)}>
                  {user.name} ({user.role})
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Header;
