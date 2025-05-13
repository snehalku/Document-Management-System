// import React from "react";
// import { Box, Typography, Alert, Stack, Paper } from "@mui/material";
// import dayjs from "dayjs";

// // Sample KYC data with expiry dates
// const kycDocuments = [
//   {
//     customerName: "David R Smith",
//     expiryDate: "2024-08-22",
//   },
//   {
//     customerName: "Jane Smith",
//     expiryDate: "2025-05-10",
//   },
//   {
//     customerName: "Sarah Johnson",
//     expiryDate: "2025-05-25",
//   },
//   {
//     customerName: "David V Smith",
//     expiryDate: "2025-04-15",
//   },
// ];

// const Dashboard = () => {
//   const today = dayjs();

//   const getExpiryStatus = (date) => {
//     const expiry = dayjs(date);
//     const daysLeft = expiry.diff(today, "day");

//     if (daysLeft < 0) return "expired";
//     if (daysLeft <= 15) return "warning";
//     return "valid";
//   };

//   const alerts = kycDocuments
//     .map((doc) => {
//       const status = getExpiryStatus(doc.expiryDate);
//       return status !== "valid"
//         ? {
//             ...doc,
//             status,
//             message:
//               status === "expired"
//                 ? `KYC expired for ${doc.customerName} on ${doc.expiryDate}`
//                 : `KYC for ${doc.customerName} is expiring soon (${doc.expiryDate})`,
//           }
//         : null;
//     })
//     .filter(Boolean);

//   return (
//     <Box
//       sx={{
//         bgcolor: "#f2f4f5",
//         display: "flex",
//         justifyContent: "center",
//       }}
//     >
//       <Box
//         sx={{
//           bgcolor: "#f2f4f5",
//           minHeight: "90vh",
//           width: "100%",
//           py: 4,
//           pl: "70px",
//           pt: "12px",
//           pr: "24px",
//           boxSizing: "border-box",
//           overflow: "hidden",
//           position: "relative",
//         }}
//       >
//         <Paper
//           elevation={3}
//           sx={{
//             p: 3,
//             borderRadius: 2,
//             bgcolor: "#ffffff",
//             mb: 4,
//           }}
//         >
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             KYC Expiry Alerts
//           </Typography>

//           {alerts.length === 0 ? (
//             <Typography variant="body1">All KYC documents are valid.</Typography>
//           ) : (
//             <Stack spacing={2}>
//               {alerts.map((alert, index) => (
//                 <Alert
//                   key={index}
//                   severity={alert.status === "expired" ? "error" : "warning"}
//                 >
//                   {alert.message}
//                 </Alert>
//               ))}
//             </Stack>
//           )}
//         </Paper>
//       </Box>
//     </Box>
//   );
// };

// export default Dashboard;

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Stack,
  TableRow,
  Typography,
  Card,
  CardContent,
  IconButton,
  Tooltip,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import agecard from "../assets/agecard.jpg";

const projectData = [
  {
    id: 101,
    date: "01-05-2025",
    customerName: "David R Smith",
    transactionId: "TXN123",
    dob: "01-05-2006",
    expiryDate: "22-08-2024",
    nationalId: "5843 2166 4567 8904",
    documentId: "111",
    documentName: "David_R_202514",
    versionNumber: "1.0",
    status: "Expiring Soon",
    category: "KYC",
    subCategory: "Age Proof",
  },
  {
    id: 102,
    date: "29-04-2025",
    customerName: "Jane Smith",
    transactionId: "TXN345",
    dob: "05-05-2003",
    nationalId: "1486 4625 4632 7854",
    documentId: "112",
    documentName: "Jane_S_202513",
    versionNumber: "2.0",
    status: "Expiring Soon",

    category: "KYC",
    subCategory: "Address Proof",
  },
  {
    id: 103,
    date: "24-02-2025",
    customerName: "Sarah Johnson",
    transactionId: "TXN344",
    dob: "18-11-2008",
    nationalId: "3625 4562 1236 4569",
    documentId: "113",
    documentName: "Sarah_J_202512",
    versionNumber: "3.0",
    status: "Expiring Soon",

    category: "KYC",
    subCategory: "ID Proof",
  },
  {
    id: 104,
    date: "12-04-2025",
    customerName: "David V Smith",
    transactionId: "TXN567",
    dob: "03-03-2002",
    nationalId: "5843 2166 4567 8904",
    documentId: "114",
    documentName: "David_V_202511",
    versionNumber: "4.0",
    status: "Expiring Soon",

    category: "KYC",
    subCategory: "Address Proof",
  },
];

const summaryCards = [
  {
    title: "Total Documents",
    value: "1,234",
    bgColor: "#e3f2fd",
  },
  {
    title: "Pending for Approval",
    value: "450",
    bgColor: "#e3f2fd",
  },
  {
    title: "Approved",
    value: "658",
    bgColor: "#e3f2fd",
  },
  {
    title: "Expiring Soon",
    value: "4",
    bgColor: "#fff3e0",
  },
  {
    title: "Expired",
    value: "12",
    bgColor: "#ffebee",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchInputs, setSearchInputs] = useState({
    customerName: "",
    date: "",
    dob: "",
    nationalId: "",
    documentId: "",
    documentName: "",
    category: "",
    subCategory: "",
  });

  const [showSearchFields, setShowSearchFields] = useState({
    customerName: false,
    date: false,
    dob: false,
    nationalId: false,
    documentId: false,
    documentName: false,
    category: false,
    subCategory: false,
  });

  const handleSearchInputChange = (field, value) => {
    setSearchInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleSearchField = (field) => {
    setShowSearchFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const filteredData = projectData.filter((item) =>
    Object.keys(searchInputs).every((key) =>
      item[key]?.toLowerCase().includes(searchInputs[key].toLowerCase())
    )
  );

  const handleCardClick = () => {
    navigate("/documents"); // navigate to the target route
  };
  return (
    <Box
      sx={{
        bgcolor: "#f2f4f5",
        display: "flex",
        justifyContent: "center",
        // width: "100%",
      }}
    >
      <Box
        sx={{
          bgcolor: "#f2f4f5",
          minHeight: "90vh",
          width: "100%",
          py: 4,
          pl: "70px",
          pt: "12px",
          pr: "24px",
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Grid container spacing={3} sx={{ mb: 2 }}>
          {summaryCards.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                onClick={handleCardClick}
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  position: "relative",
                  pb: 2,
                  cursor: "pointer",
                  width: "215px",
                  height: "80px",
                }}
              >
                <CardContent sx={{ position: "relative", p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h7"
                      component="div"
                      fontWeight="500"
                      fontFamily="Poppins, sans-serif"
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h4"
                    component="div"
                    fontWeight="bold"
                    fontFamily="Poppins, sans-serif"
                    sx={{ mt: 1 }}
                  >
                    {item.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* <Grid container spacing={3} sx={{ mt: 2 }}>
            {summaryCards.map((card, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    position: "relative",
                    borderRadius: "10px",
                    height: "119px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#aaaaaa",
                        fontWeight: "bold",
                        fontSize: "1.25rem",
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "2.5rem",
                      }}
                    >
                      {card.value}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      bgcolor: card.bgColor,
                      width: "60px",
                      height: "56px",
                      borderRadius: "40px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      ml: "auto",
                    }}
                  >
                    {card.icon}
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid> */}
        <TableContainer
          component={Paper}
          sx={{ mb: 4, borderRadius: "10px 10px 0 0" }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#99caff" }}>
                <TableCell>
                  <Stack direction="column">
                    <Stack direction="row" alignItems="center">
                      <Typography fontWeight="bold">Customer ID</Typography>
                      <IconButton
                        size="small"
                        onClick={() => toggleSearchField("id")}
                      >
                        <SearchIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                    {showSearchFields.id && (
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.id}
                        onChange={(e) =>
                          handleSearchInputChange("id", e.target.value)
                        }
                        sx={{ mt: 1 }}
                      />
                    )}
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="column">
                    <Stack direction="row" alignItems="center">
                      <Typography fontWeight="bold">
                        Transaction Date
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => toggleSearchField("date")}
                      >
                        <SearchIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                    {showSearchFields.date && (
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.date}
                        onChange={(e) =>
                          handleSearchInputChange("date", e.target.value)
                        }
                        sx={{ mt: 1 }}
                      />
                    )}
                  </Stack>
                </TableCell>

                <TableCell>
                  <Stack direction="column">
                    <Stack direction="row" alignItems="center">
                      <Typography fontWeight="bold">Customer Name</Typography>
                      <IconButton
                        size="small"
                        onClick={() => toggleSearchField("customerName")}
                      >
                        <SearchIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                    {showSearchFields.customerName && (
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.customerName}
                        onChange={(e) =>
                          handleSearchInputChange(
                            "customerName",
                            e.target.value
                          )
                        }
                        sx={{ mt: 1 }}
                      />
                    )}
                  </Stack>
                </TableCell>

                <TableCell>
                  <Stack direction="column">
                    <Stack direction="row" alignItems="center">
                      <Typography fontWeight="bold">Date of Birth</Typography>
                      <IconButton
                        size="small"
                        onClick={() => toggleSearchField("dob")}
                      >
                        <SearchIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                    {showSearchFields.dob && (
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.dob}
                        onChange={(e) =>
                          handleSearchInputChange("dob", e.target.value)
                        }
                        sx={{ mt: 1 }}
                      />
                    )}
                  </Stack>
                </TableCell>

                <TableCell>
                  <Stack direction="column">
                    <Stack direction="row" alignItems="center">
                      <Typography fontWeight="bold">National ID</Typography>
                      <IconButton
                        size="small"
                        onClick={() => toggleSearchField("nationalId")}
                      >
                        <SearchIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                    {showSearchFields.nationalId && (
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.nationalId}
                        onChange={(e) =>
                          handleSearchInputChange("nationalId", e.target.value)
                        }
                        sx={{ mt: 1 }}
                      />
                    )}
                  </Stack>
                </TableCell>

                <TableCell>
                  <Stack direction="column">
                    <Stack direction="row" alignItems="center">
                      <Typography fontWeight="bold">Document ID</Typography>
                      <IconButton
                        size="small"
                        onClick={() => toggleSearchField("documentId")}
                      >
                        <SearchIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                    {showSearchFields.documentId && (
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.documentId}
                        onChange={(e) =>
                          handleSearchInputChange("documentId", e.target.value)
                        }
                        sx={{ mt: 1 }}
                      />
                    )}
                  </Stack>
                </TableCell>

                <TableCell>
                  <Stack direction="column">
                    <Stack direction="row" alignItems="center">
                      <Typography fontWeight="bold">Document Name</Typography>
                      <IconButton
                        size="small"
                        onClick={() => toggleSearchField("documentName")}
                      >
                        <SearchIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                    {showSearchFields.documentName && (
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.documentName}
                        onChange={(e) =>
                          handleSearchInputChange(
                            "documentName",
                            e.target.value
                          )
                        }
                        sx={{ mt: 1 }}
                      />
                    )}
                  </Stack>
                </TableCell>

                <TableCell>
                  <Stack direction="column">
                    <Stack direction="row" alignItems="center">
                      <Typography fontWeight="bold">Version No.</Typography>
                      <IconButton
                        size="small"
                        onClick={() => toggleSearchField("versionNumber")}
                      >
                        <SearchIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                    {showSearchFields.versionNumber && (
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.versionNumber}
                        onChange={(e) =>
                          handleSearchInputChange(
                            "versionNumber",
                            e.target.value
                          )
                        }
                        sx={{ mt: 1 }}
                      />
                    )}
                  </Stack>
                </TableCell>
                <TableCell>
                  <Stack direction="row" alignItems="center">
                    <Typography fontWeight="bold">Status</Typography>
                  </Stack>
                </TableCell>

                <TableCell>
                  <Stack direction="row" alignItems="center">
                    <Typography fontWeight="bold">Action</Typography>
                  </Stack>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredData.map((project) => (
                <TableRow key={project.id} hover>
                  <TableCell>
                    <Typography fontWeight="bold">{project.id}</Typography>
                  </TableCell>
                  <TableCell>{project.date}</TableCell>
                  <TableCell>{project.customerName}</TableCell>
                  <TableCell>{project.dob}</TableCell>
                  <TableCell>{project.nationalId}</TableCell>
                  <TableCell align="center" sx={{ textAlign: "center" }}>
                    {project.documentId}
                  </TableCell>
                  <TableCell>{project.documentName}</TableCell>
                  <TableCell>{project.versionNumber}</TableCell>
                  <TableCell>{project.status}</TableCell>

                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Tooltip title="View Document">
                        <IconButton
                          color="primary"
                          onClick={() => navigate("/viewdocument")}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Dashboard;
