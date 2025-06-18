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
  FormControl,
  Select,
} from "@mui/material";
import hr1 from "../assets/hr1.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import invoice1 from "../assets/invoice1.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NavigateBefore from "@mui/icons-material/NavigateBefore";
import NavigateNext from "@mui/icons-material/NavigateNext";
import SearchIcon from "@mui/icons-material/Search";
import Header from "../Components/Layout/Header";

const mockCustomerDocs = [
  {
    id: "EMP342",
    firstName: "Andrew ",
    lastName: "Prendergrast",
    transactionId: "TXN123",
    date: "2025-05-28",
    dob: "01-05-2006",
    doj: "06-06-2025",
    docId: "12",
    docName: "Andrew_P_202513",
    expiresOn: "2024-08-22",
    nationalId: "5843216645678904",
    degree: "BA",
    department: "Sales",
  },
  {
    id: "EMP451",
    firstName: "Andrew",
    lastName: "Lilli",
    transactionId: "TXN123",
    date: "2025-05-28",
    dob: "16-11-1988",
    doj: "06-06-2025",
    expiresOn: "2020-01-02",
    nationalId: "AS1234567",
    degree: "Bsc",
    department: "IT",
    docId: "11",
    docName: "Andrew_L_202513",
  },
  
  {
    id: "EMP036",
    firstName: "Andrew",
    lastName: "Smith",
    transactionId: "TXN123",
    date: "2025-05-28",
    dob: "14-11-1998",
    doj: "06-06-2025",
    docId: "13",
    docName: "Andrew_S_202513",
    expiresOn: "2032-12-12",
    nationalId: "A123477",
    degree: "MBA",
    department: "HR",
  },
  {
    id: "EMP235",
    firstName: "Andrew",
    lastName: "Livone",
    transactionId: "TXN123",
    date: "2025-05-28",
    dob: "06-09-1986",
    doj: "06-06-2025",
    docId: "14",
    docName: "Andrew_L_202513",
    expiresOn: "2030-11-12",
    nationalId: "A123456",
    degree: "BE",
    department: "IT",
  },
];

const HrDocument = () => {
  const navigate = useNavigate();
  const [subcategory, setSubcategory] = useState("");
  const [searchInputs, setSearchInputs] = useState({
    id: "",
    firstName: "",
    lastName: "",
    doj: "",
    docId: "",
    docName: "",
    degree: "",
    department: "",
  });

  const [showSearchFields, setShowSearchFields] = useState({
    id: false,
    firstName: false,
    lastName: false,
    doj: false,
    docId: false,
    docName: false,
    degree: false,
    department: false,
  });

  const handleSearchInputChange = (field, value) => {
    setSearchInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleSubcategory = () => {
    handleSearch();
  };

  const [selectedCategory, setSelectedCategory] = useState(
    "Educational Qualification"
  );

  const toggleSearchField = (field) => {
    setShowSearchFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const filteredData = mockCustomerDocs.filter((item) =>
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

  return (
    <div>
      <Header departments={departments} defValue={"HR"} />
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
            View Documents
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{ mb: 3 }}
            justifyContent="space-between"
          >
            <Box display="flex" flexDirection="row">
              <Stack
                direction="row"
                spacing={2}
                sx={{ mr: 2 }}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography variant="body2" fontWeight="700">
                  Category
                  <span style={{ color: "red", marginLeft: "4px" }}>*</span>
                </Typography>

                <FormControl sx={{ minWidth: 160 }}>
                  <Select
                    labelId="application-select-label"
                    id="application-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    defaultValue="sel"
                    sx={{
                      height: "36px",
                      fontSize: "0.8rem",
                      borderRadius: "4px",
                    }}
                  >
                    <MenuItem value="sel">Select Category</MenuItem>
                    <MenuItem value="Educational Qualification">
                      Educational Qualification
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Stack
                direction="row"
                spacing={1.5}
                // sx={{ mb: 2 }}
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography variant="body2" fontWeight="700">
                  Subcategory
                  <span style={{ color: "red", marginLeft: "4px" }}>*</span>
                </Typography>

                <FormControl sx={{ minWidth: 160 }}>
                  <Select
                    labelId="application-select-label"
                    id="application-select"
                    defaultValue="Degree Certificate"
                    size="small"
                    sx={{
                      height: "36px",
                      fontSize: "0.8rem",
                      borderRadius: "4px",
                    }}
                  >
                    <MenuItem value="Degree Certificate">
                      Degree Certificate
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Box>
          </Stack>
          <TableContainer
            component={Paper}
            sx={{ mb: 2, borderRadius: "10px 10px 0 0", maxHeight: 480 }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#99caff" }}>
                  <TableCell align="center">
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography fontWeight="bold" align="center">
                        Employee ID
                      </Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.id}
                        onChange={(e) =>
                          handleSearchInputChange("id", e.target.value)
                        }
                        sx={{ mt: 1, width: "100px", textAlign: "center" }}
                        inputProps={{ style: { textAlign: "center" } }}
                      />
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography fontWeight="bold" align="center">
                        First Name
                      </Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.id}
                        onChange={(e) =>
                          handleSearchInputChange("id", e.target.value)
                        }
                        sx={{ mt: 1, width: "100px", textAlign: "center" }}
                        inputProps={{ style: { textAlign: "center" } }}
                      />
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography fontWeight="bold"> Last Name </Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        type="date"
                        value={searchInputs.invoiceDate}
                        onChange={(e) =>
                          handleSearchInputChange("invoiceDate", e.target.value)
                        }
                        sx={{ mt: 1, width: "100px", textAlign: "center" }}
                        inputProps={{ style: { textAlign: "center" } }}
                      />
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography fontWeight="bold"> Degree </Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.invoiceNo}
                        onChange={(e) =>
                          handleSearchInputChange("invoiceNo", e.target.value)
                        }
                        sx={{ mt: 1, width: "100px", textAlign: "center" }}
                        inputProps={{ style: { textAlign: "center" } }}
                      />
                    </Stack>
                  </TableCell>

                  <TableCell align="center">
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography fontWeight="bold"> Department</Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.invoiceAmount}
                        onChange={(e) =>
                          handleSearchInputChange(
                            "invoiceAmount",
                            e.target.value
                          )
                        }
                        sx={{ mt: 1, width: "100px", textAlign: "center" }}
                        inputProps={{ style: { textAlign: "center" } }}
                      />
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography fontWeight="bold">
                        Date of Joining{" "}
                      </Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        type="date"
                        value={searchInputs.invoiceDate}
                        onChange={(e) =>
                          handleSearchInputChange("invoiceDate", e.target.value)
                        }
                        sx={{ mt: 1, width: "100px", textAlign: "center" }}
                        inputProps={{ style: { textAlign: "center" } }}
                      />
                    </Stack>
                  </TableCell>
                  <TableCell align="center">
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography fontWeight="bold">Document ID </Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.docId}
                        onChange={(e) =>
                          handleSearchInputChange("docId", e.target.value)
                        }
                        sx={{ mt: 1, width: "100px", textAlign: "center" }}
                        inputProps={{ style: { textAlign: "center" } }}
                      />
                    </Stack>
                  </TableCell>

                  <TableCell align="center">
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography fontWeight="bold">Document Name </Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.docName}
                        onChange={(e) =>
                          handleSearchInputChange("docName", e.target.value)
                        }
                        sx={{ mt: 1, width: "100px", textAlign: "center" }}
                        inputProps={{ style: { textAlign: "center" } }}
                      />
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
                    <TableCell align="center">{project.id}</TableCell>
                    {/* <TableCell>{project.category}</TableCell> */}
                    {/* <TableCell>{project.subCategory}</TableCell> */}

                    <TableCell>
                      <Typography align="center">
                        {project.firstName}
                      </Typography>
                    </TableCell>

                    <TableCell align="center">{project.lastName}</TableCell>
                    <TableCell align="center">{project.degree}</TableCell>
                    <TableCell align="center">{project.department}</TableCell>
                    <TableCell align="center">{project.doj}</TableCell>
                    <TableCell align="center">{project.docId}</TableCell>
                    <TableCell align="center">{project.docName}</TableCell>

                    <TableCell>
                      <Tooltip title="View and Download">
                        <IconButton
                          color="primary"
                          onClick={() => window.open(hr1)}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </Tooltip>
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
    </div>
  );
};

export default HrDocument;
