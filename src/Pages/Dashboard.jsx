import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
  Stack,
  IconButton,
  Tooltip,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import InfoIcon from "@mui/icons-material/Info"; // for View Details button

const pump_report = "your-pdf-url-or-path"; // Replace with your actual file
const projectData = [
  {
    id: 1,
    documentName: "Invoice",
    applicationName: "Account",
    transactionId: "TXN123",
    transactionName: "Payment Received",
    transactionDate: "2025-04-25",
    tooltip: "Click to preview document",
    // documentId: "DOC456",
    // documentName: "Invoice #456",
  },
  {
    id: 2,
    documentName: "Bank Statement",
    applicationName: "Account",
    transactionId: "TXN124",
    transactionName: "Document Uploaded",
    transactionDate: "2025-04-26",
    tooltip: "Click to preview document",

    // documentId: "DOC457",
    // documentName: "Agreement #789",
  },
  {
    id: 3,
    documentName: "Tax Document",
    applicationName: "Account",
    transactionId: "TXN122",
    transactionName: "Document Uploaded",
    transactionDate: "2025-04-27",
    tooltip: "Click to preview document",

    // documentId: "DOC457",
    // documentName: "Agreement #789",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "#f2f4f5",
        display: "flex",
        justifyContent: "center",
        width: "100%",
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
        <Typography
          variant="h5"
          component="h1"
          fontWeight="bold"
          sx={{ mb: 1 }}
        >
          Documents
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 2 }}
          justifyContent="flex-start"
          alignItems="center"
        >
          {/* Label */}
          <Typography variant="subtitle1" fontWeight="bold">
            Select Application
          </Typography>

          {/* Select Dropdown using only MUI components */}
          <FormControl sx={{ minWidth: 200 }}>
            <Select
              labelId="application-select-label"
              id="application-select"
              defaultValue="Account"
              label="Application"
              sx={{
                bgcolor: "#fff",
                height: "45px",
                borderRadius: "5px",
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)",
                "& fieldset": {
                  border: "none",
                },
                "&.Mui-focused": {
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)",
                },
              }}
            >
              <MenuItem value="Account">Account</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Sales">Sales</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 3 }}
          //   justifyContent="space-between"
        >
          <TextField
            placeholder="Search by all parameters..."
            variant="outlined"
            sx={{
              width: "50%",
              bgcolor: "#fff",
              height: "50px",
              borderRadius: "10px",

              "& .MuiOutlinedInput-root": {
                boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.25)", // increased opacity from 0.15 → 0.25
                "& fieldset": {
                  border: "none",
                },
                "&.Mui-focused": {
                  boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.35)", // darker + larger shadow on focus
                },
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#99caff",
              width: "110px",
              color: "black",
              borderRadius: "10px",
              fontWeight: "bold",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                bgcolor: "#88b9ee",
              },
            }}
          >
            Get Data
          </Button>
        </Stack>

        <TableContainer
          component={Paper}
          sx={{ mb: 4, borderRadius: "10px 10px 0 0" }}
        >
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#99caff" }}>
                {[
                  "Id",
                  "Document Name",
                  "Application Name",
                  "Transaction ID",
                  "Transaction Name",
                  "Transaction Date",
                  // "Document ID",
                  // "Document Name",
                ].map((header) => (
                  <TableCell key={header}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography fontWeight="bold">{header}</Typography>
                      {header !== "Action" && <ArrowDropDown />}
                    </Stack>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {projectData.map((project) => (
                <TableRow key={project.id} hover>
                  <TableCell>
                    <Typography fontWeight="bold">{project.id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Tooltip title={project.tooltip} arrow>
                      <Typography
                        fontWeight="medium"
                        sx={{
                          whiteSpace: "pre-line",
                          cursor: "pointer",
                          textDecoration: "none",
                          color: "#000000",
                        }}
                        onClick={() => navigate("/previewDocument")}
                      >
                        {project.documentName}
                      </Typography>
                    </Tooltip>
                  </TableCell>
                  <TableCell>{project.applicationName}</TableCell>
                  <TableCell>{project.transactionId}</TableCell>
                  <TableCell>{project.transactionName}</TableCell>
                  <TableCell>{project.transactionDate}</TableCell>
                  {/* <TableCell>{project.documentId}</TableCell>
              <TableCell>{project.documentName}</TableCell> */}

                  {/* Action Buttons */}
                  {/* <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Tooltip title="View Document">
                        <IconButton
                          color="primary"
                          onClick={() => window.open(pump_report, "_blank")}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Download Document">
                        <a
                          href={pump_report}
                          download="pump_report.pdf"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          <IconButton color="secondary">
                            <FileDownloadIcon />
                          </IconButton>
                        </a>
                      </Tooltip>

                      <Tooltip title="View Details">
                    <IconButton
                      color="info"
                      onClick={() => {
                        alert(`Showing details for Transaction ID: ${project.transactionId}`);
                      }}
                    >
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                    </Stack>
                  </TableCell> */}
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
