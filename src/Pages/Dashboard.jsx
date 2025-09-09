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
  TextField,
} from "@mui/material";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../Components/Layout/Header";

const projectData = [
  {
    id: 101,
    date: "01-05-2025",
    customerName: "John Livone",
    transactionId: "TXN123",
    dob: "06-09-1986",
    expiryDate: "12-11-2030",
    IdNo: "A123456",
    documentId: "111",
    documentName: "John_L_202514",
    versionNumber: "1.0",
    status: "Pending for Approval",
    category: "KYC",
    subCategory: "Age Proof",
  },
  {
    id: 102,
    date: "29-04-2025",
    customerName: "Jane Smith",
    transactionId: "TXN345",
    dob: "05-05-2003",
    IdNo: "SD54896",
    documentId: "112",
    documentName: "Jane_S_202513",
    versionNumber: "2.0",
    status: "Pending for Approval",

    category: "KYC",
    subCategory: "Address Proof",
  },
  {
    id: 103,
    date: "24-02-2025",
    customerName: "Sarah Johnson",
    transactionId: "TXN344",
    dob: "18-11-2008",
    IdNo: "AK54789",
    documentId: "113",
    documentName: "Sarah_J_202512",
    versionNumber: "3.0",
    status: "Pending for Approval",

    category: "KYC",
    subCategory: "ID Proof",
  },
];
const pieData = [
  { name: "Pending for Approval", value: 120 },
  { name: "Approved", value: 155 },
  { name: "Expiring Soon", value: 69 },
  { name: "Expired", value: 89 },
];

const COLORS = ["#8E44AD", "#2980B9", "#27AE60", "#F39C12"];

const Dashboard = () => {
  const navigate = useNavigate();
  const [searchInputs, setSearchInputs] = useState({
    id: "",
    customerName: "",
    date: "",
    dob: "",
    IdNo: "",
    documentId: "",
    documentName: "",
    category: "",
    subCategory: "",
  });

  const [showSearchFields, setShowSearchFields] = useState({
    id: false,
    customerName: false,
    date: false,
    dob: false,
    IDNo: false,
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
      String(item[key] || "")
        .toLowerCase()
        .includes(searchInputs[key].toLowerCase())
    )
  );
  const departments = [
    { label: "Sales", route: "/documents" },
    { label: "Accounts", route: "/invoiceDocument" },
    { label: "HR", route: "/hrDocument" },
    { label: "Legal" },
  ];

  const handleNavigate = (path, dep) => {
    navigate(path);
    localStorage.setItem("selectedDepartment", dep);
  };

  return (
    <div>
      <Header departments={departments} defValue={"Sales"} />

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
            pt: "20px",
            pr: "24px",
            boxSizing: "border-box",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Typography
            variant="h6"
            component="h1"
            fontWeight="bold"
            sx={{ mb: 1 }}
          >
            Department
          </Typography>
          <Grid container spacing={3} sx={{ mb: 2, mt: 2 }}>
            <Grid item xs={12} md={4}>
              <Card
                onClick={() => handleNavigate("/archiveDocument1", "Sales")}
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  position: "relative",
                  pb: 2,
                  cursor: "pointer",
                  width: "215px",
                  height: "80px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ position: "relative", p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      fontWeight="500"
                      fontFamily="Poppins, sans-serif"
                    >
                      Sales
                    </Typography>
                    {/* <Typography fontFamily="Poppins, sans-serif">
                      Pending Documents - 2
                    </Typography> */}
                  </Box>
                  {/* <Typography
                    variant="h4"
                    component="div"
                    fontWeight="bold"
                    fontFamily="Poppins, sans-serif"
                    sx={{ mt: 1 }}
                  >
                    275
                  </Typography> */}
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card
                onClick={() => handleNavigate("/invoice", "Accounts")}
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  position: "relative",
                  pb: 2,
                  cursor: "pointer",
                  width: "215px",
                  height: "80px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ position: "relative", p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 1,
                      // alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      fontWeight="500"
                      fontFamily="Poppins, sans-serif"
                    >
                      Accounts
                    </Typography>
                    {/* <Typography
                     
                      fontFamily="Poppins, sans-serif"
                    >
                      Pending Documents - 2
                    </Typography> */}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* <Grid item xs={12} md={4}>
              <Card
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  position: "relative",
                  pb: 2,
                  cursor: "pointer",
                  width: "215px",
                  height: "80px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                  },
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
                      variant="h6"
                      component="div"
                      fontWeight="500"
                      fontFamily="Poppins, sans-serif"
                    >
                      HR
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid> */}

            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                  position: "relative",
                  pb: 2,
                  cursor: "pointer",
                  width: "215px",
                  height: "80px",

                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                  },
                }}
              >
                <CardContent sx={{ position: "relative", p: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 1,
                      // alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="div"
                      fontWeight="500"
                      fontFamily="Poppins, sans-serif"
                    >
                      Legal
                    </Typography>
                    {/* <Typography
                      
                      fontFamily="Poppins, sans-serif"
                    >
                      Pending Documents - 0
                    </Typography> */}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* <Grid item xs={12} md={4}>
              <Card
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  position: "relative",
                  pb: 2,
                  cursor: "pointer",
                  width: "215px",
                  height: "80px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                  },
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
                      variant="h6"
                      component="div"
                      fontWeight="500"
                      fontFamily="Poppins, sans-serif"
                    >
                      Other
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid> */}
          </Grid>

          {/* <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 3 }}
          justifyContent="space-between"
        >
          <TextField
            placeholder="Search by Customer ID, Transaction Date, Customer Name, Date of Birth, ID No., Document ID, Document Name, Version No."
            variant="outlined"
            sx={{
              width: "72%",
              bgcolor: "#fff",
              height: "50px",
              borderRadius: "10px",

              "& .MuiOutlinedInput-root": {
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
                "& fieldset": {
                  border: "none",
                },
                "&.Mui-focused": {
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)",
                },
              },
            }}
          />
        </Stack> */}

          {/* <Box sx={{ mt: 6, width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Box> */}
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
