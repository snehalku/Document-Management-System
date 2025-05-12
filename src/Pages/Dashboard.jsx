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
  TableRow,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";

const documentData = [
  {
    type: "Age Proof",
    owner: "David R Smith",
    expiryDate: "15 May 2025",
    status: "Expiring Soon",
  },
  {
    type: "Driving Licence",
    owner: "Michael Chen",
    expiryDate: "30 Apr 2025",
    status: "Expired",
  },
  {
    type: "Passport",
    owner: "Emma wilson",
    expiryDate: "20 May 2025",
    status: "Expiring Soon",
  },
];

const summaryCards = [
  {
    title: "Total Documents",
    value: "1,234",
    // icon: <DescriptionIcon />,
    bgColor: "#e3f2fd",
  },
  {
    title: "Expiring Soon",
    value: "28",
    // icon: <AccessTimeIcon />,
    bgColor: "#fff3e0",
  },
  {
    title: "Expired",
    value: "12",
    // icon: <ErrorIcon />,
    bgColor: "#ffebee",
  },
];

const Dashboard = () => {
  const getStatusColor = (status) => {
    return status === "Expired" ? "#ff0004" : "#f28c0c";
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
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  position: "relative",
                  pb: 2,
                  cursor: "pointer",
                  width: "385px",
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

        <Grid item xs={12}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              borderRadius: "10px",
              // mt: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                mb: 1,
              }}
            >
              KYC Document Expiry Alerts
            </Typography>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "#99caff" }}>
                    <TableCell>
                      <Typography
                        variant="h7"
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        Document Type
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h7"
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        Customer Name
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h7"
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        Expiry Date
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h7"
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        Status
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="h7"
                        sx={{
                          fontWeight: "bold",
                        }}
                      >
                        Action
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {documentData.map((doc, index) => (
                    <TableRow key={index}>
                      <TableCell>
                        <Typography variant="body2">{doc.type}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">{doc.owner}</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body2">
                          {doc.expiryDate}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: "bold",
                            color: getStatusColor(doc.status),
                          }}
                        >
                          {doc.status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Button
                          sx={{
                            color: "#0066c0",
                            fontWeight: "bold",
                            p: 0,
                            minWidth: "auto",
                            textTransform: "none",
                          }}
                        >
                          Review
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
