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
import SearchIcon from '@mui/icons-material/Search';

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
    category: "KYC",
    subCategory: "Address Proof",
  },
];

const Documents = () => {
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
            placeholder="Search by Customer ID, Transaction Date, Customer Name, Date of Birth, National ID, Document ID, Document Name"
            variant="outlined"
            sx={{
              width: "65%",
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
                    <Stack direction="row" alignItems="center" spacing={1}>
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
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography fontWeight="bold">Transaction Date</Typography>
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
                    <Stack direction="row" alignItems="center" spacing={1}>
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
                          handleSearchInputChange("customerName", e.target.value)
                        }
                        sx={{ mt: 1 }}
                      />
                    )}
                  </Stack>
                </TableCell>

                 <TableCell>
                  <Stack direction="column">
                    <Stack direction="row" alignItems="center" spacing={1}>
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
                    <Stack direction="row" alignItems="center" spacing={1}>
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
                    <Stack direction="row" alignItems="center" spacing={1}>
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
                    <Stack direction="row" alignItems="center" spacing={1}>
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
                          handleSearchInputChange("documentName", e.target.value)
                        }
                        sx={{ mt: 1 }}
                      />
                    )}
                  </Stack>
                </TableCell>


                {/* <TableCell>
                  <Stack direction="row" alignItems="center">
                    <Typography fontWeight="bold">Sub Category</Typography>
                    <ArrowDropDown />
                  </Stack>
                </TableCell> */}

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
                  {/* <TableCell>{project.subCategory}</TableCell> */}
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Tooltip title="View Document">
                        <IconButton
                          color="primary"
                          onClick={() => window.open(agecard, "_blank")}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Download Document">
                        <a
                          href={agecard}
                          download="agecard.jpg"
                          style={{ color: "inherit", textDecoration: "none" }}
                        >
                          <IconButton color="secondary">
                            <FileDownloadIcon />
                          </IconButton>
                        </a>
                      </Tooltip>
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
              5 / Pages{" "}
              <KeyboardArrowDownIcon sx={{ fontSize: "16px" }} />
            </Button>

            <Menu>
              <MenuItem>5/page</MenuItem>
              <MenuItem >10/page</MenuItem>
              <MenuItem >15/page</MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Documents;
