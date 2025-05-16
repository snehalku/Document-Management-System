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
  Pagination,
  PaginationItem,
  Tooltip,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import agecard from "../assets/agecard.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import NavigateNext from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

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
  {
    id: 104,
    date: "12-04-2025",
    customerName: "David V Smith",
    transactionId: "TXN567",
    dob: "03-03-2002",
    IdNo: "JK54789",
    documentId: "114",
    documentName: "David_V_202511",
    versionNumber: "4.0",
    status: "Pending for Approval",
    category: "KYC",
    subCategory: "Address Proof",
  },
];

const ApproveDoc = () => {
  const navigate = useNavigate();
  const [searchInputs, setSearchInputs] = useState({
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
    customerName: false,
    date: false,
    dob: false,
    IdNo: false,
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
          Approve Documents
        </Typography>
        <Stack
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
        </Stack>
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
                      <Typography fontWeight="bold">ID Number</Typography>
                      <IconButton
                        size="small"
                        onClick={() => toggleSearchField("nationalId")}
                      >
                        <SearchIcon fontSize="small" />
                      </IconButton>
                    </Stack>
                    {showSearchFields.IdNo && (
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.IdNo}
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
                  <TableCell>{project.IdNo}</TableCell>
                  <TableCell align="center" sx={{ textAlign: "center" }}>
                    {project.documentId}
                  </TableCell>
                  <TableCell>{project.documentName}</TableCell>
                  <TableCell>{project.versionNumber}</TableCell>
                  <TableCell sx={{ color: "#FFC107" }}>
                    {project.status}
                  </TableCell>

                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Tooltip title="Approve Document">
                        <IconButton
                          color="primary"
                          onClick={() => navigate("/approveDocument")}
                        >
                          <CheckBoxIcon />
                        </IconButton>
                      </Tooltip>
                      {/* <Tooltip title="Download Document">
                        <a
                          href={agecard}
                          download="agecard.jpg"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          <IconButton color="secondary">
                            <FileDownloadIcon />
                          </IconButton>
                        </a>
                      </Tooltip> */}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
          <Pagination
            count={10}
            shape="rounded"
            renderItem={(item) => {
              if (item.type === "previous") {
                return (
                  <PaginationItem
                    component={IconButton}
                    sx={{
                      border: "1px solid #a7a6a6",

                      borderRadius: "5px",

                      bgcolor: "#f2f4f5",

                      mx: 0.5,
                    }}
                    {...item}
                    icon={<NavigateBefore fontSize="small" />}
                  />
                );
              }

              if (item.type === "next") {
                return (
                  <PaginationItem
                    component={IconButton}
                    sx={{
                      border: "1px solid #a7a6a6",

                      borderRadius: "5px",

                      bgcolor: "#f2f4f5",

                      mx: 0.5,
                    }}
                    {...item}
                    icon={<NavigateNext fontSize="small" />}
                  />
                );
              }

              return (
                <PaginationItem
                  {...item}
                  sx={{
                    border: "1px solid #a7a6a6",

                    borderRadius: "5px",

                    bgcolor: item.selected ? "#99caff" : "#f2f4f5",

                    mx: 0.5,

                    color: item.selected ? "black" : "#747474",
                  }}
                />
              );
            }}
          />
          <Box>
            <Button
              variant="outlined"
              size="small"
              sx={{
                ml: 1,
                border: "1px solid #a7a6a6",
                borderRadius: "5px",
                bgcolor: "#f2f4f5",
                color: "#747474",
                fontSize: "10px",
                textTransform: "none",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              5 / Pages <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
            </Button>

            <Menu>
              <MenuItem>5/page</MenuItem>
              <MenuItem>10/page</MenuItem>
              <MenuItem>15/page</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ApproveDoc;
