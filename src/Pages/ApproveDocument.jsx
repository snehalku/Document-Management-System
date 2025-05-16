import React, { useState, useEffect } from "react";
import passport from "../assets/passport.jpg";
import { Snackbar, Alert, Divider } from "@mui/material";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  FormControl,
  Select,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const mockCustomerDocs = [
  {
    id: 100,
    firstName: "John",
    lastName: "Livone",
    transactionId: "TXN123",
    date: "2025-04-30",
    dob: "1986-09-06",
    expiresOn: "2030-11-12",
    nationalId: "A123456",
  },
  {
    id: 101,
    firstName: "David R",
    lastName: "Smith",
    transactionId: "TXN123",
    date: "2025-04-30",
    dob: "2006-05-01",
    versionNumber: "1.0",
    expiresOn: "2024-08-22",
    nationalId: "5843216645678904",
  },
  {
    id: 102,
    firstName: "Jane Smith",
    lastName: "Smith",
    transactionId: "TXN345",
    date: "2025-04-29",
    dob: "2007-12-11",
    versionNumber: "2.0",
    expiresOn: "2025-08-12",
    nationalId: "5843216645678904",
  },
  {
    id: 103,
    firstName: "David ",
    lastName: "Johnson",
    transactionId: "TXN567",
    date: "2025-04-30",
    dob: "2007-05-10",
    versionNumber: "5.0",
    expiresOn: "2025-08-12",
    nationalId: "5843216645678905",
  },
];

const ApproveDocument = () => {
  const navigate = useNavigate();

  const [selectedDoc, setSelectedDoc] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleSave = () => {
    setShowSnackbar(true);
    console.log("Snackbar should show now");

    setTimeout(() => {
      navigate("/documents");
    }, 2000);
  };

  return (
    <Box
      sx={{
        bgcolor: "#f2f4f5",
        py: 4,
        pl: "70px",
        pt: "12px",
        pr: "24px",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
        // minHeight: "400vh",
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={1}>
        View Customer KYC Document
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 2,
          //   height: '100vh',
          //   overflow: 'auto'
        }}
      >
        <Grid container spacing={2}>
          <Grid item size={7}>
            <Paper
              sx={{
                height: "120vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
              }}
              elevation={2}
            >
              {selectedDoc?.docType === "image" ? (
                <img
                  src={selectedDoc.path}
                  alt="KYC"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <iframe
                  src={`${selectedDoc?.path || passport}#toolbar=0`}
                  title="KYC Document"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                  }}
                />
              )}
            </Paper>
          </Grid>

          <Grid item size={5}>
            <Paper
              sx={{
                p: 2,
                height: "115vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ mb: 2, fontSize: 20, fontWeight: "bold" }}>
                  Transaction Data From OLTP System
                </Typography>
                <TextField
                  label="Customer ID / Transaction ID"
                  fullWidth
                  defaultValue="100"
                  InputProps={{ readOnly: true }}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Customer Name"
                  fullWidth
                  defaultValue="John Livone"
                  InputProps={{ readOnly: true }}
                  sx={{ mb: 2 }}
                />

                <TextField
                  label="Date of Birth"
                  fullWidth
                  defaultValue="06-09-1986"
                  InputProps={{ readOnly: true }}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="ID Number"
                  fullWidth
                  defaultValue="A123456"
                  InputProps={{ readOnly: true }}
                  sx={{ mb: 2 }}
                />
                <Divider
                  sx={{
                    mb: 2,
                    borderBottomWidth: 2,
                    borderColor: "black",
                  }}
                />
                <Typography sx={{ mb: 2, fontSize: 20, fontWeight: "bold" }}>
                  Document
                </Typography>
                <TextField
                  label="Document ID"
                  fullWidth
                  defaultValue="111"
                  // InputProps={{ readOnly: true }}
                  sx={{ mb: 2 }}
                ></TextField>
                <TextField
                  label="Document Name"
                  fullWidth
                  defaultValue="John_L_202514"
                  // InputProps={{ readOnly: true }}
                  sx={{ mb: 2 }}
                ></TextField>

                <TextField
                  label="Category"
                  fullWidth
                  defaultValue="KYC"
                  // InputProps={{ readOnly: true }}
                  sx={{ mb: 2 }}
                ></TextField>
                <TextField
                  label=" Sub Category"
                  fullWidth
                  defaultValue="Passport"
                  // InputProps={{ readOnly: true }}
                  sx={{ mb: 2 }}
                ></TextField>
                <TextField
                  label="Issue Date"
                  fullWidth
                  defaultValue="12-11-2020"
                  // InputProps={{ readOnly: true }}
                  sx={{ mb: 2 }}
                />

                <TextField
                  label="Expiry Date"
                  fullWidth
                  defaultValue="12-11-2030"
                  // InputProps={{ readOnly: true }}
                  sx={{ mb: 2 }}
                />

                <TextField
                  label="Version NO."
                  fullWidth
                  defaultValue="1.0"
                  InputProps={{ readOnly: true }}
                  sx={{ mb: 2 }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ p: 1 }}>
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{
                borderRadius: "10px",
                bgcolor: "#99CAFF",
                color: "black",
                px: 3,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  bgcolor: "#7bb8ff",
                },
              }}
            >
              Approve
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                borderRadius: "10px",
                bgcolor: "#f2f4f5",
                px: 3,
                color: "black",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                border: "none",
                "&:hover": {
                  bgcolor: "#e5e7e8",
                  border: "none",
                },
              }}
            >
              Reject
            </Button>
          </Stack>
          {/* <Snackbar
            open={showSnackbar}
            autoHideDuration={3000}
            onClose={() => setShowSnackbar(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={() => setShowSnackbar(false)}
              severity="success"
              variant="filled"
              sx={{
                width: "100%",
                fontWeight: 500,
                fontSize: "1rem",
                boxShadow: 3,
                backgroundColor: "#2e7d32",
                color: "#fff",
              }}
            >
              ✅ Your document has been approved.
            </Alert>
          </Snackbar> */}
          <Snackbar
            open={showSnackbar}
            autoHideDuration={4000}
            onClose={() => setShowSnackbar(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              // severity="success"
              onClose={() => setShowSnackbar(false)}
              variant="outlined"
              sx={{
                width: "100%",
                fontWeight: 500,
                fontSize: "1rem",
                boxShadow: 3,
                backgroundColor: "#2e7d32",
                color: "#fff",
                display: "flex",
                alignItems: "center",
              }}
            >
              Your document has been approved.
            </Alert>
          </Snackbar>
        </Box>
      </Paper>
    </Box>
  );
};

export default ApproveDocument;
