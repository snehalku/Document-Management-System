import React, { useEffect } from "react";
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
import Doc2 from "../assets/Doc2.png";
import transactionDoc from "../assets/trDoc.jpg";
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
import Header from "../Components/Layout/Header";

const projectData = [
  {
    id: "EDB5612",
    date: "28-05-2025",
    issueDate: "25-05-2025",
    customerName: "John Livone",
    transactionId: "TXN123",
    dob: "06-09-1986",
    expiryDate: "12-11-2030",
    IdNo: "A123456",
    documentId: "111",
    documentName: "John_L_202514",
    versionNumber: "1.0",
    status: "Expiring Soon",
    category: " AML KYC",
    subCategory: "ID Proof",
  },
  {
    id: "EDB5617",
    date: "28-05-2025",
    issueDate: "24-05-2025",
    customerName: "Jane Smith",
    transactionId: "TXN345",
    dob: "05-05-2003",
    IdNo: "SD54896",
    documentId: "112",
    documentName: "Jane_S_202513",
    versionNumber: "2.0",
    status: "Expiring Soon",
    category: " AML KYC",
    subCategory: "Address Proof",
  },
  {
    id: "EDB6611",
    date: "28-05-2025",
    issueDate: "23-05-2025",
    customerName: "Sarah Johnson",
    transactionId: "TXN344",
    dob: "18-11-2008",
    IdNo: "AK54789",
    documentId: "113",
    documentName: "Sarah_J_202512",
    versionNumber: "3.0",
    status: "Expiring Soon",
    category: " AML KYC",
    subCategory: "Age Proof",
  },
  {
    id: "EDB7712",
    date: "28-05-2025",
    issueDate: "22-05-2025",
    customerName: "David V Smith",
    transactionId: "TXN567",
    dob: "03-03-2002",
    IdNo: "JK54789",
    documentId: "114",
    documentName: "David_V_202511",
    versionNumber: "4.0",
    status: "Expiring Soon",
    category: " AML KYC",
    subCategory: "ID Proof",
  },
  {
    id: "EDC2345",
    date: "28-05-2025",
    issueDate: "22-05-2025",
    customerName: "David R Smith",
    transactionId: "TXN567",
    dob: "03-03-2002",
    IdNo: "JK54789",
    documentId: "114",
    documentName: "David_R_202511",
    versionNumber: "4.0",
    status: "Expiring Soon",
    category: " AML KYC",
    subCategory: "ID Proof",
  },
];

const unitHolderDetails = [
  {
    id: "UH004",
    transactionDate: "10/05/2025",
    transactionNo: "TXN1001",
    transactionType: "Purchase",
    fund: "Fund 1",
    class: "A",
    amount: "60000",
    units: "5141.388175",
    nav: "11.67",
    documentId: "101",
    documentName: "A_202511",
  },
  {
    id: "UH001",
    transactionDate: "05/03/2025",
    transactionNo: "TXN1012",
    transactionType: "Purchase",
    fund: "Fund 2",
    class: "B",
    amount: "70000",
    units: "3225.806452",
    nav: "21.7",
    documentId: "102",
    documentName: "B_202512",
  },
  {
    id: "UH056",
    transactionDate: "10/01/2025",
    transactionNo: "TXN1032",
    transactionType: "Purchase",
    fund: "Fund 5",
    class: "C",
    amount: "17000",
    units: "500",
    nav: "34",
    documentId: "103",
    documentName: "C_202513",
  },
  {
    id: "UH045",
    transactionDate: "10/03/2025",
    transactionNo: "TXN1025",
    transactionType: "Purchase",
    fund: "Fund 4",
    class: "D",
    amount: "40000",
    units: "3174.603175",
    nav: "12.6",
    documentId: "104",
    documentName: "D_202514",
  },
  {
    id: "UH002",
    transactionDate: "01/05/2025",
    transactionNo: "TXN1002",
    transactionType: "Purchase",
    fund: "Fund 6",
    class: "E",
    amount: "18000",
    units: "818.1818182",
    nav: "22",
    documentId: "105",
    documentName: "E_202515",
  },
  // {
  //   id: "UH025",
  //   transactionDate: "04/02/2025",
  //   transactionNo: "TXN1031",
  //   transactionType: "Purchase",
  //   fund: "Fund 4",
  //   class: "F",
  //   amount: "15000",
  //   units: "652.173913",
  //   nav: "23",
  // },
];

const Documents = () => {
  const navigate = useNavigate();
  const [searchInputs, setSearchInputs] = useState({
    customerName: "",
    date: "",
    issueDate: "",
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
    issueDate: false,

    dob: false,
    IdNo: false,
    documentId: false,
    documentName: false,
    category: false,
    subCategory: false,
  });

  const [unitColumnSearch, setUnitColumnSearch] = useState({
    id: "",
    transactionDate: "",
    transactionNo: "",
    transactionType: "",
    fund: "",
    class: "",
    amount: "",
    units: "",
    nav: "",
  });

  const handleSUnitearch = () => {
    const query = searchCustomer.toLowerCase();

    const results = unitHolderDetails.filter((doc) => {
      return (
        !searchCustomer || // Return all if query is empty
        doc.id.toLowerCase().includes(query) ||
        doc.transactionDate.toLowerCase().includes(query) ||
        doc.transactionNo.toLowerCase().includes(query) ||
        doc.transactionType.toLowerCase().includes(query) ||
        doc.fund.toLowerCase().includes(query) ||
        doc.class.toLowerCase().includes(query) ||
        doc.amount.toString().toLowerCase().includes(query) ||
        doc.units.toString().toLowerCase().includes(query) ||
        doc.nav.toString().toLowerCase().includes(query)
      );
    });

    setSearchUnitResults(results);
  };

  const [selectedCategory, setSelectedCategory] = useState("AML_KYC");
  const [selectedSubcategory, setSelectedSubcategory] = useState("ID Proof");
  useEffect(() => {
    if (selectedCategory === "Transaction") {
      setSelectedSubcategory("newPurchase");
    }
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

  const filteredDataHolder = unitHolderDetails.filter((item) =>
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

  const handleCategory = (e) => {
    const newCategory = e.target.value;
    setSelectedCategory(newCategory);

    if (newCategory === "AML_KYC") {
      setSelectedSubcategory("ID Proof");
    } else if (newCategory === "Transaction") {
      setSelectedSubcategory("New Purchase");
    } else {
      setSelectedSubcategory("sel");
    }
  };

  const handleSubcategory = () => {
    // handleSearch();
    // handleSUnitearch();
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
                    onChange={handleCategory}
                    defaultValue="AML_KYC"
                    // label="Application"
                    sx={{
                      // bgcolor: "#f2f4f5",
                      height: "36px",
                      fontSize: "0.8rem",
                      borderRadius: "4px",
                    }}
                  >
                    {/* <MenuItem value="sel">Select Category</MenuItem> */}
                    <MenuItem value="AML_KYC">AML KYC</MenuItem>
                    <MenuItem value="Transaction">Transaction</MenuItem>
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
                  {selectedCategory === "AML_KYC" ? (
                    <Select
                      // labelId="application-select-label"
                      id="application-select"
                      defaultValue="ID Proof"
                      size="small"
                      value={selectedSubcategory}
                      onChange={handleSubcategory}
                      sx={{
                        // bgcolor: "#f2f4f5",
                        height: "36px",
                        fontSize: "0.8rem",
                        borderRadius: "4px",
                      }}
                    >
                      <MenuItem value="sel">Select Subcategory</MenuItem>

                      <MenuItem value="ID Proof">ID Proof</MenuItem>
                      <MenuItem value="Address Proof">Address Proof</MenuItem>
                    </Select>
                  ) : (
                    <Select
                      // labelId="application-select-label"
                      id="application-select"
                      defaultValue="sel"
                      value={selectedSubcategory}
                      size="small"
                      onChange={handleSubcategory}
                      sx={{
                        // bgcolor: "#f2f4f5",
                        height: "36px",
                        fontSize: "0.8rem",
                        borderRadius: "4px",
                      }}
                    >
                      <MenuItem value="sel">Select Subcategory</MenuItem>

                      <MenuItem value="newPurchase">New Purchase</MenuItem>
                      <MenuItem value="Additional Purchase">
                        Additional Purchase
                      </MenuItem>
                      <MenuItem value="Redemption">Redemption</MenuItem>
                      <MenuItem value="Switch">Switch</MenuItem>
                      <MenuItem value="Transfer">Transfer</MenuItem>
                    </Select>
                  )}
                </FormControl>
              </Stack>
            </Box>
          </Stack>
          {selectedCategory === "AML_KYC" ? (
            <TableContainer
              component={Paper}
              sx={{ mb: 2, borderRadius: "10px 10px 0 0", maxHeight: 450 }}
            >
              <Table>
                <TableHead>
                  <TableRow sx={{ bgcolor: "#99caff" }}>
                    {/* <TableCell>
                    <Stack direction="column">
                      <Typography fontWeight="bold">Category </Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.category}
                        onChange={(e) =>
                          handleSearchInputChange("category", e.target.value)
                        }
                        sx={{ mt: 1 }}
                      />
                    </Stack>
                  </TableCell>

                  <TableCell>
                    <Stack direction="column">
                      <Typography fontWeight="bold">Sub Category </Typography>
                      <TextField
                        size="small"
                        variant="standard"
                        placeholder="Search"
                        value={searchInputs.subCategory}
                        onChange={(e) =>
                          handleSearchInputChange("subCategory", e.target.value)
                        }
                        sx={{ mt: 1 }}
                      />
                    </Stack>
                  </TableCell> */}
                    <TableCell align="center">
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography fontWeight="bold">Customer ID</Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          value={searchInputs.id}
                          onChange={(e) =>
                            handleSearchInputChange("id", e.target.value)
                          }
                          autoComplete="off"
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
                        <Typography fontWeight="bold">Customer Name</Typography>
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
                        <Typography fontWeight="bold">Issue Date </Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          type="date"
                          value={searchInputs.issueDate}
                          onChange={(e) =>
                            handleSearchInputChange("issueDate", e.target.value)
                          }
                          sx={{ mt: 1, width: "100px", textAlign: "center" }}
                          inputProps={{ style: { textAlign: "center" } }}
                        />
                      </Stack>
                    </TableCell>

                    {/* <TableCell>
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
                </TableCell> */}

                    <TableCell align="center">
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography fontWeight="bold">
                          Date of Birth{" "}
                        </Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          type="date"
                          value={searchInputs.dob}
                          onChange={(e) =>
                            handleSearchInputChange("dob", e.target.value)
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
                        <Typography fontWeight="bold">ID Number </Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          value={searchInputs.IdNo}
                          onChange={(e) =>
                            handleSearchInputChange("IdNo", e.target.value)
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
                          value={searchInputs.documentId}
                          onChange={(e) =>
                            handleSearchInputChange(
                              "documentId",
                              e.target.value
                            )
                          }
                          sx={{ mt: 1, width: "100px", textAlign: "center" }}
                          inputProps={{ style: { textAlign: "center" } }}
                          autoComplete="off"
                        />
                      </Stack>
                    </TableCell>

                    <TableCell align="center">
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography fontWeight="bold">Document Name</Typography>
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
                          sx={{ mt: 1, width: "100px", textAlign: "center" }}
                          inputProps={{ style: { textAlign: "center" } }}
                        />
                      </Stack>
                    </TableCell>

                    {/* <TableCell>
                  <Stack direction="column">
                    <Stack direction="row" alignItems="center" >
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
                </TableCell> */}

                    <TableCell>
                      <Stack direction="column" alignItems="right">
                        <Typography fontWeight="bold">Action</Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          autoComplete="off"
                          sx={{
                            mt: 1,
                            width: "100px",
                            "& .MuiInput-underline:before": {
                              borderBottom: "none",
                            },
                            "& .MuiInput-underline:after": {
                              borderBottom: "none",
                            },
                            "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                              {
                                borderBottom: "none",
                              },
                          }}
                        />
                      </Stack>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {filteredData.map((project) => (
                    <TableRow key={project.id} hover>
                      {/* <TableCell>{project.category}</TableCell> */}
                      {/* <TableCell>{project.subCategory}</TableCell> */}
                      <TableCell>
                        <Typography align="center">{project.id}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        {project.customerName}
                      </TableCell>

                      <TableCell align="center">{project.issueDate}</TableCell>

                      <TableCell align="center">{project.dob}</TableCell>
                      <TableCell align="center">{project.IdNo}</TableCell>
                      <TableCell align="center" sx={{ textAlign: "center" }}>
                        {project.documentId}
                      </TableCell>
                      <TableCell align="center">
                        {project.documentName}
                      </TableCell>

                      {/* <TableCell>{project.versionNumber}</TableCell> */}
                      {/* <TableCell>
                    <Stack direction="row" spacing={1}>
                      <Tooltip title="View Document">
                        <IconButton
                          color="primary"
                          onClick={() => navigate("/viewdocument")}
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
                  </TableCell> */}
                      <TableCell>
                        <Tooltip title="View and Download">
                          <IconButton
                            color="primary"
                            onClick={() => window.open(Doc2)}
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
          ) : (
            <TableContainer
              component={Paper}
              sx={{ mb: 2, borderRadius: "10px 10px 0 0", maxHeight: 450 }}
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
                        <Typography fontWeight="bold">Unitholder ID</Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          value={unitColumnSearch.id}
                          onChange={(e) =>
                            handleSearchInputChange("id", e.target.value)
                          }
                          autoComplete="off"
                          sx={{ mt: 1, width: "70px", textAlign: "center" }}
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
                          Transaction Date
                        </Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          type="date"
                          value={unitColumnSearch.transactionDate}
                          onChange={(e) =>
                            handleSearchInputChange(
                              "transactionDate",
                              e.target.value
                            )
                          }
                          sx={{ mt: 1, width: "70px", textAlign: "center" }}
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
                          Transaction No.{" "}
                        </Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          value={unitColumnSearch.transactionNo}
                          onChange={(e) =>
                            handleSearchInputChange(
                              "transactionNo",
                              e.target.value
                            )
                          }
                          sx={{ mt: 1, width: "70px", textAlign: "center" }}
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
                          Transaction Type{" "}
                        </Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          value={unitColumnSearch.transactionType}
                          onChange={(e) =>
                            handleSearchInputChange(
                              " transactionType",
                              e.target.value
                            )
                          }
                          sx={{ mt: 1, width: "70px", textAlign: "center" }}
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
                        <Typography fontWeight="bold">Fund </Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          value={unitColumnSearch.fund}
                          onChange={(e) =>
                            handleSearchInputChange(" fund", e.target.value)
                          }
                          sx={{ mt: 1, width: "70px", textAlign: "center" }}
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
                        <Typography fontWeight="bold">Class </Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          value={unitColumnSearch.class}
                          onChange={(e) =>
                            handleSearchInputChange("class", e.target.value)
                          }
                          sx={{ mt: 1, width: "70px", textAlign: "center" }}
                          inputProps={{ style: { textAlign: "center" } }}
                          autoComplete="off"
                        />
                      </Stack>
                    </TableCell>

                    <TableCell align="center">
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography fontWeight="bold">Amount </Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          value={unitColumnSearch.amount}
                          onChange={(e) =>
                            handleSearchInputChange("amount", e.target.value)
                          }
                          sx={{ mt: 1, width: "70px", textAlign: "center" }}
                          inputProps={{ style: { textAlign: "center" } }}
                          autoComplete="off"
                        />
                      </Stack>
                    </TableCell>

                    <TableCell align="center">
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography fontWeight="bold">Units </Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          value={unitColumnSearch.units}
                          onChange={(e) =>
                            handleSearchInputChange("units", e.target.value)
                          }
                          sx={{ mt: 1, width: "70px", textAlign: "center" }}
                          inputProps={{ style: { textAlign: "center" } }}
                          autoComplete="off"
                        />
                      </Stack>
                    </TableCell>

                    <TableCell align="center">
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography fontWeight="bold">Nav </Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          value={unitColumnSearch.nav}
                          onChange={(e) =>
                            handleSearchInputChange("nav", e.target.value)
                          }
                          sx={{ mt: 1, width: "70px", textAlign: "center" }}
                          inputProps={{ style: { textAlign: "center" } }}
                          autoComplete="off"
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
                          value={unitColumnSearch.documentId}
                          onChange={(e) =>
                            handleSearchInputChange(
                              "documentId",
                              e.target.value
                            )
                          }
                          sx={{ mt: 1, width: "70px", textAlign: "center" }}
                          inputProps={{ style: { textAlign: "center" } }}
                          autoComplete="off"
                        />
                      </Stack>
                    </TableCell>

                    <TableCell align="center">
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Typography fontWeight="bold">Document Name</Typography>
                        <TextField
                          size="small"
                          variant="standard"
                          placeholder="Search"
                          value={unitColumnSearch.documentName}
                          onChange={(e) =>
                            handleSearchInputChange(
                              "documentName",
                              e.target.value
                            )
                          }
                          sx={{ mt: 1, width: "70px", textAlign: "center" }}
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
                  {filteredDataHolder.map((unitHolder) => (
                    <TableRow key={unitHolder.id} hover>
                      {/* <TableCell>{project.category}</TableCell> */}
                      {/* <TableCell>{project.subCategory}</TableCell> */}
                      <TableCell>
                        <Typography align="center">{unitHolder.id}</Typography>
                      </TableCell>
                      <TableCell align="center">
                        {unitHolder.transactionDate}
                      </TableCell>

                      <TableCell align="center">
                        {unitHolder.transactionNo}
                      </TableCell>

                      <TableCell align="center">
                        {unitHolder.transactionType}
                      </TableCell>
                      <TableCell align="center">{unitHolder.fund}</TableCell>
                      <TableCell align="center">{unitHolder.class}</TableCell>
                      <TableCell align="center">{unitHolder.amount}</TableCell>
                      <TableCell align="center">{unitHolder.units}</TableCell>
                      <TableCell align="center">{unitHolder.nav}</TableCell>
                      <TableCell align="center" sx={{ textAlign: "center" }}>
                        {unitHolder.documentId}
                      </TableCell>
                      <TableCell align="center">
                        {unitHolder.documentName}
                      </TableCell>

                      <TableCell>
                        <Tooltip title="View and Download">
                          <IconButton
                            color="primary"
                            onClick={() => window.open(transactionDoc)}
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
          )}

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

export default Documents;
