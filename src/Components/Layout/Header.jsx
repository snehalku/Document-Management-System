// import React from "react";

// import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";

// const Header = ({ toggleSidebar }) => {
//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         bgcolor: "#3B82F6",
//         zIndex: 1100,
//       }}
//     >
//       <Toolbar>
//         <IconButton
//           edge="start"
//           color="inherit"
//           onClick={toggleSidebar}
//         ></IconButton>
//         <Typography variant="h6">Tab Reporting</Typography>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";

const Header = () => {
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
          // mb: 2,
          borderLeft: "none", // no border/curve on the left
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
      >
        {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography>TAB REPORTING</Typography>

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
            Admin
          </Typography>
        </Box> */}
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
            {/* -{" "}
            <span style={{ fontWeight: 500, opacity: 0.7 }}>
              AML KYC
            </span> */}
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
              Admin
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Header;
