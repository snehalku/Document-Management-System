import React from "react";
import { Box, Typography, Alert, Stack, Paper } from "@mui/material";
import dayjs from "dayjs";

// Sample KYC data with expiry dates
const kycDocuments = [
  {
    customerName: "David R Smith",
    expiryDate: "2024-08-22",
  },
  {
    customerName: "Jane Smith",
    expiryDate: "2025-05-10",
  },
  {
    customerName: "Sarah Johnson",
    expiryDate: "2025-05-25",
  },
  {
    customerName: "David V Smith",
    expiryDate: "2025-04-15",
  },
];

const Dashboard = () => {
  const today = dayjs();

  const getExpiryStatus = (date) => {
    const expiry = dayjs(date);
    const daysLeft = expiry.diff(today, "day");

    if (daysLeft < 0) return "expired";
    if (daysLeft <= 15) return "warning";
    return "valid";
  };

  const alerts = kycDocuments
    .map((doc) => {
      const status = getExpiryStatus(doc.expiryDate);
      return status !== "valid"
        ? {
            ...doc,
            status,
            message:
              status === "expired"
                ? `KYC expired for ${doc.customerName} on ${doc.expiryDate}`
                : `KYC for ${doc.customerName} is expiring soon (${doc.expiryDate})`,
          }
        : null;
    })
    .filter(Boolean);

  return (
    <Box
      sx={{
        bgcolor: "#f2f4f5",
        display: "flex",
        justifyContent: "center",
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
        <Paper
          elevation={3}
          sx={{
            p: 3,
            borderRadius: 2,
            bgcolor: "#ffffff",
            mb: 4,
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            KYC Expiry Alerts
          </Typography>

          {alerts.length === 0 ? (
            <Typography variant="body1">All KYC documents are valid.</Typography>
          ) : (
            <Stack spacing={2}>
              {alerts.map((alert, index) => (
                <Alert
                  key={index}
                  severity={alert.status === "expired" ? "error" : "warning"}
                >
                  {alert.message}
                </Alert>
              ))}
            </Stack>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default Dashboard;
