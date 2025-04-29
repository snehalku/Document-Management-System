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
} from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import InfoIcon from "@mui/icons-material/Info"; // for View Details button

import invoice from "../assets/invoice.jpg";

const pump_report = "your-pdf-url-or-path"; // Replace with your actual file
const projectData = [
  {
    id: 1,
    applicationName: "Account",
    transactionId: "TXN123",
    transactionName: "Payment Received",
    transactionDate: "2025-04-25",
    documentId: "DOC456",
    documentName: "March Invoice #1042",
    category: "Account",
    subCategory: "Invoice",
  },
  {
    id: 2,
    applicationName: "Account",
    transactionId: "TXN124",
    transactionName: "Document Uploaded",
    transactionDate: "2025-04-26",
    documentId: "DOC457",
    documentName: "Bank Statement April 2025",
    category: "Account",
    subCategory: "Bank Statement",
  },
  {
    id: 3,
    applicationName: "Account",
    transactionId: "TXN122",
    transactionName: "Document Uploaded",
    transactionDate: "2025-04-27",
    documentId: "DOC458",
    documentName: "Tax Document",
    category: "Account",
    subCategory: "Tax Document",
  },
];

const Documents = () => {
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
        <Typography
          variant="h5"
          component="h1"
          fontWeight="bold"
          sx={{ mb: 2 }}
        >
          Documents
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mb: 3 }}
          justifyContent="space-between"
        >
          <TextField
            placeholder="Search by All..."
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
                  "Document ID",
                  "Category",
                  "Sub Category",
                  "Action",
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
                  <TableCell>{project.documentName}</TableCell>

                  <TableCell>{project.applicationName}</TableCell>
                  <TableCell>{project.transactionId}</TableCell>
                  <TableCell>{project.transactionName}</TableCell>
                  <TableCell>{project.transactionDate}</TableCell>
                  <TableCell>{project.documentId}</TableCell>
                  <TableCell>{project.category}</TableCell>

                  <TableCell>{project.subCategory}</TableCell>

                  {/* Action Buttons */}
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      {/* View Document */}
                      <Tooltip title="View Document">
                        <IconButton
                          color="primary"
                          onClick={() => window.open(invoice, "_blank")}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>

                      {/* Download Document */}
                      <Tooltip title="Download Document">
                        <a
                          href={invoice}
                          download="invoice.jpg"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          <IconButton color="secondary">
                            <FileDownloadIcon />
                          </IconButton>
                        </a>
                      </Tooltip>

                      {/* View Details */}
                      {/* <Tooltip title="View Details">
                    <IconButton
                      color="info"
                      onClick={() => {
                        alert(`Showing details for Transaction ID: ${project.transactionId}`);
                      }}
                    >
                      <InfoIcon />
                    </IconButton>
                  </Tooltip> */}
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

export default Documents;
