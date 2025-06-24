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
//               fontFamily: "Poppins-Bold, sans-serif",
//               fontSize: "18px",
//             }}
//           >
//             DOCUMENT MANAGEMENT SYSTEM
//             {/* -{" "}
//             <span style={{ fontWeight: 700, opacity: 0.7 }}>
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
//                 fontFamily: "Poppins, sans-serif",
//                 fontWeight: 700,
//                 fontSize: 16,
//               }}
//             >
//               Daniel Lewis (Admin)
//             </Typography>
//           </Box>
//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default Header;

import React, { useState } from "react";
import {
  Avatar,
  Box,
  Paper,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = ({ departments, defValue }) => {
  const navigate = useNavigate();

  const [selectedDept, setSelectedDept] = useState(defValue);

  const handleChange = (event) => {
    const selected = event.target.value;
    setSelectedDept(selected);
    const dept = departments.find((d) => d.label === selected);
    if (dept) {
      navigate(dept.route);
    }
    console.log("dept", dept);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 183,
        right: 0,
        zIndex: 1200,
        px: 2,
        height: 76,
        bgcolor: "#fff",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          height: 74,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          pr: 3,
          borderLeft: "none",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          boxShadow: "none",
          // boxShadow: "0px 2px 4px rgba(0.1, 0.1, 0.1, 0 )",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            // padding: "0 16px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              paddingLeft: "25px",
              fontFamily: "Poppins-Bold, sans-serif",
              fontSize: "18px",
            }}
          >
            DOCUMENT MANAGEMENT SYSTEM
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Department
            </Typography>
            <FormControl size="small" sx={{ minWidth: 140 }}>
              <Select value={selectedDept} onChange={handleChange}>
                {departments.map((dept) => (
                  <MenuItem key={dept.label} value={dept.label}>
                    {dept.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}

            <Avatar sx={{ width: 35, height: 35, bgcolor: "#d9d9d9" }} />
            <Typography
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: 16,
              }}
            >
              Daniel Lewis (Admin)
            </Typography>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Header;
