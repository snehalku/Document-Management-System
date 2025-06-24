import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Card,
  CardMedia,
  Typography,
  Stack,
  FormControl,
  Select,
  MenuItem,
  Grid,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Checkbox,
  TableBody,
  TableCell,
  Paper,
} from "@mui/material";
import Doc2 from "../assets/Doc2.png";
import Doc3 from "../assets/Doc3.png";
import blankImage from "../assets/blank.png"
import transactionDoc from "../assets/trDoc1.png";
import transactionDoc1 from "../assets/trDoc2.png";
import SearchIcon from "@mui/icons-material/Search";
import { Snackbar, Alert } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TransitionAlerts from "../Components/ui/Notification";
import Header from "../Components/Layout/Header";

const mockCustomerDocs = [
 
  {
    id: "EDB5617",
    firstName: "John",
    lastName: "Lilli",
    transactionId: "TXN123",
    date: "2025-05-28",
    dob: "16-11-1988",
    expiresOn: "2020-01-02",
    nationalId: "AS1234567",
     filingDate: "2025-06-20",
  },
  {
    id: "AFB7712",
    firstName: "George ",
    lastName: "Harrington",
    transactionId: "TXN123",
    date: "2025-05-28",
    dob: "01-05-2006",
    expiresOn: "2024-08-22",
    nationalId: "584324",
     filingDate: "2025-06-20",
  },
  {
    id: "EEA5924",
    firstName: "John",
    lastName: "Smith",
    transactionId: "TXN123",
    date: "2025-05-28",
    dob: "14-11-1998",
    expiresOn: "2032-12-12",
    nationalId: "A123477",
     filingDate: "2025-06-20",
  },

   {
    id: "EDB5612",
    firstName: "John",
    lastName: "Livone",
    transactionId: "TXN123",
    date: "2025-05-28",
    dob: "06-09-1986",
    expiresOn: "2030-11-12",
    nationalId: "A123456",
    filingDate: "2025-06-20",
  },
  {
    id: "EEA5923",
    firstName: "John",
    lastName: "carter",
    transactionId: "TXN123",
    date: "2025-05-28",
    dob: "14-11-1998",
    expiresOn: "2032-12-12",
    nationalId: "A123477",
     filingDate: "2025-06-20",
  },
  {
    id: "EDB5C13",
    firstName: "Mets",
    lastName: "Lilli",
    transactionId: "TXN123",
    date: "2025-05-28",
    dob: "08-01-1980",
    expiresOn: "2020-01-02",
    nationalId: "3800108",
     filingDate: "2025-06-20",
  },
];
const unitHolderDetails = [
  
  {
    id: "UH253",
    transactionDate: "2025-06-22",
    transactionNo: "TXN1012",
    transactionType: "Purchase",
    fund: "Fund 2",
    class: "B",
    amount: "70000",
    units: "3225.806452",
    nav: "21.7",
  },
  {
    id: "UH056",
    transactionDate: "2025-06-22",
    transactionNo: "TXN1032",
    transactionType: "Purchase",
    fund: "Fund 5",
    class: "C",
    amount: "17000",
    units: "500",
    nav: "34",
  },
  {
    id: "UH326",
    transactionDate: "2025-06-22",
    transactionNo: "TXN1001",
    transactionType: "Purchase",
    fund: "Fund 1",
    class: "A",
    amount: "60000",
    units: "5141.388175",
    nav: "11.67",
  },
  {
    id: "UH045",
    transactionDate: "2025-06-22",
    transactionNo: "TXN1025",
    transactionType: "Purchase",
    fund: "Fund 4",
    class: "D",
    amount: "40000",
    units: "3174.603175",
    nav: "12.6",
  },
  {
    id: "UH002",
    transactionDate: "2025-06-22",
    transactionNo: "TXN1002",
    transactionType: "Purchase",
    fund: "Fund 6",
    class: "E",
    amount: "18000",
    units: "818.1818182",
    nav: "22",
  },
  {
    id: "UH025",
    transactionDate: "2025-06-22",
    transactionNo: "TXN1031",
    transactionType: "Purchase",
    fund: "Fund 4",
    class: "F",
    amount: "15000",
    units: "652.173913",
    nav: "23",
  },
];

const Archive1 = () => {
  const [docList, setDocList] = useState([]);
  const [selectedDocName, setSelectedDocName] = useState("");
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [confirmedDocIds, setConfirmedDocIds] = useState([]);
  const [docIdentifier, setDocIdentifier] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [filterFirstName, setFilterFirstName] = useState("");
  const [filterLastName, setFilterLastName] = useState("");
  const [filterDob, setFilterDob] = useState("");
  const [filterNationalId, setFilterNationalId] = useState("");
  const [previewDocPath, setPreviewDocPath] = useState(Doc2);
  const [selectedDate, setSelectedDate] = useState("");
  const [searchCustomer, setSearchCustomer] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchUnitResult, setSearchUnitResults] = useState([]);
  const [hideTable, setHideTable] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = useState("AML_KYC");
  const [formCard, setFormCard] = useState(false);
const [savedCustomerId, setSavedCustomerId] = useState("");
const [disable, setDisable] = useState(false);

  const [columnSearch, setColumnSearch] = useState({
    firstName: "",
    lastName: "",
  });
  const [showSearchInput, setShowSearchInput] = useState({
    firstName: false,
    lastName: false,
  });
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [formData, setFormData] = useState({
    customerId: "",
     firstName: "",
    filingDate: "",
    issueDate: "",
    expiryDate: "",
    unitHolderId: "",
    // versionNo: "1.0",
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

useEffect(() => {
  const timer = setTimeout(() => {
    setDisable(false);
  }, 5000);

  return () => clearTimeout(timer);
}, [disable]);
  

  useEffect(() => {
    if (selectedDoc) {
      setFormData((prev) => ({
        ...prev,
        customerId: selectedDoc.id || "",
        filingDate: selectedDoc.filingDate || "",
        firstName: selectedDoc.firstName || "",
        lastName: selectedDoc.lastName || "",
        customerName: `${selectedDoc.firstName || ""} ${
          selectedDoc.lastName || ""
        }`.trim(),
      }));
    }
    if (selectedDoc) {
      setUnitColumnSearch((prev) => ({
        ...prev,
        customerId: selectedDoc.id || "",
         transactionDate: selectedDoc.transactionDate || "",
        transactionNo: selectedDoc.transactionNo || "",
      amount: selectedDoc.amount || "",
      }));
    }
  }, [selectedDoc]);

  useEffect(() => {
    const list = [];
    setDocList(list);
    setSelectedDocName("");
    setSelectedDoc(null);
  }, [selectedDate]);

  useEffect(() => {
    const doc = docList.find((d) => d.name === selectedDocName);
    if (doc) {
      setSelectedDoc(doc);
      setCategory(doc.category || "");
    }
  }, [selectedDocName, docList]);

  
  const handleSearch = () => {
    const query = searchCustomer.toLowerCase();
    const results = mockCustomerDocs.filter((doc) => {
      return (
        // ((!selectedDate || doc.date === selectedDate) &&
        !searchCustomer ||
        doc.id.toLowerCase().includes(query) ||
        doc.firstName.toLowerCase().includes(query) ||
        doc.lastName.toLowerCase().includes(query) ||
        doc.dob.toLowerCase().includes(query) ||
        doc.nationalId.toLowerCase().includes(query)
      );
    });
    setSearchResults(results);
  };

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

  const handleSubcategory = () => {
    handleSearch();
    handleSUnitearch();
  };

  const handleSelectSearchDoc = (doc) => {
    setSelectedDoc(doc);
    setCategory(doc.category || "");
    setSubcategory(doc.subcategory || "");
    setSelectedDocName(doc.docName);
    setSelectedDate(doc.date);
    setSearchCustomer(doc.customerName);
    setDocIdentifier("National ID");
setConfirmedDocIds([]);
    // if (!confirmedDocIds.includes(doc.id)) {
    //   setConfirmedDocIds([...confirmedDocIds, doc.id]);
    // }
    // else{
    //   setConfirmedDocIds([...confirmedDocIds]);
    // }
  };

  const showNextDocument = () => {
    const remainingDocs = searchResults.filter(
      (doc) => !confirmedDocIds.includes(doc.id)
    );

    if (remainingDocs.length > 0) {
      const nextDoc = remainingDocs[0];
      setSelectedDoc(nextDoc);
      setFormData({
        customerId: nextDoc.id,
        issueDate: "",
        expiryDate: "",
        versionNo: "1.0",
      });
    } else {
      setSelectedDoc(null);
    }
  };

 const handleSave = () => {
  setAlertOpen(true); // show success alert
  setDisable(true); // immediately hide discard button

  // Save the current customer ID before clearing it
  const currentCustomerId = formData.customerId;
  setSavedCustomerId(currentCustomerId);

  setTimeout(() => {
    if (selectedCategory === "AML_KYC") {
      setPreviewDocPath(Doc3);
    }
    if (previewDocPath === Doc3) {
      setPreviewDocPath(blankImage);
    }
    if (selectedCategory === "Transaction") {
      setPreviewDocPath(transactionDoc1);
    }

    // Reset all form and UI states
    setFormData({
      customerId: "",
      issueDate: "",
      expiryDate: "",
      filingDate: "2025-06-20",
    });
    setSelectedDoc(null);
    setHideTable(false);
    showNextDocument();
    setSelectedDate(null);
    setSelectedCategory(selectedCategory);
    setSearchCustomer("");
    setSearchResults("");
    setCategory("");
    setSubcategory("");
    setIssueDate("");
    setExpiryDate("");
    setFormCard(false);
    setConfirmedDocIds([]);
    setFormData({ ...initialState });

    // Simulate document change + re-enable discard button
    // wait for next doc to appear
  }, 3000); // wait for alert
};


  const snackbarRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (snackbarRef.current && !snackbarRef.current.contains(event.target)) {
        if (showSnackbar) {
          setShowSnackbar(false);

          const currentIndex = searchResults.findIndex(
            (doc) => doc.id === selectedDoc.id
          );
          const nextDoc = searchResults[currentIndex + 1];

          if (nextDoc) {
            setSelectedDoc(nextDoc);
            setFormData({
              customerId: nextDoc.id,
              issueDate: "",
              expiryDate: "",
              versionNo: "1.0",
            });
          } else {
            setSelectedDoc(null);
          }
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSnackbar, selectedDoc, searchResults]);
  const departments = [
    { label: "Sales", route: "/archiveDocument1" },
    { label: "Accounts", route: "/invoice" },
    { label: "HR", route: "/hr" },
    { label: "Legal" },
  ];

  const today = new Date().toISOString().split("T")[0];

  // const onCheck = () => {
  //   setHideTable(true);
  //   setFormCard(true);
  // };
  const onCheck = (id) => {
  // Mark the current doc as selected
  setConfirmedDocIds([id]);
  setHideTable(true);
  setFormCard(true);
};

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
    setPreviewDocPath("");
  };

  useEffect(() => {
  if (alertOpen) {
    const timer = setTimeout(() => setAlertOpen(false), 3000);
    return () => clearTimeout(timer);
  }
}, [alertOpen]);

  const dateLabel =
  selectedCategory === "AML_KYC"
    ? "Filing Date"
    : selectedCategory === "Transaction"
    ? "Transaction Date"
    : "Date";

  return (
    <div>
      <Header departments={departments} defValue={"Sales"} />
      <Box
        sx={{
          bgcolor: "#f2f4f5",
          height: "100vh",
          // width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            py: 1,
            ml: "70px",

            boxSizing: "border-box",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Card
            sx={{
              flex: 1.2,
              height: "84vh",
              position: "sticky",
              marginTop: 2,
              alignSelf: "flex-start",
              overflowY: "hidden",
            }}
          >
            {(() => {
              let docPath;
              if (selectedCategory === "AML_KYC") {
                docPath = previewDocPath || selectedDoc?.path || Doc2;
              }
              if (selectedCategory === "Transaction") {
                docPath = previewDocPath || selectedDoc?.path || transactionDoc;
              }
                if (selectedCategory === "sel") {
                docPath =blankImage;
              }

              const isImage =
                docPath?.toLowerCase().endsWith(".png") ||
                docPath?.toLowerCase().endsWith(".jpg") ||
                docPath?.toLowerCase().endsWith(".jpeg") ||
                docPath?.toLowerCase().endsWith(".gif");

              return isImage ? (
                <CardMedia
                  component="img"
                  image={docPath}
                  alt="Document"
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    borderRadius: 2,
                    boxShadow: 2,
                  }}
                />
              ) : (
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    mt: 1,
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: 2,
                  }}
                >
                  <iframe
                    src={`${docPath}#toolbar=0`}
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
                </Box>
              );
            })()}
          </Card>

          <Box
            sx={{
              flex: 1,
              pl: 2,
              pr: 2,
              width: "60%",
            }}
          >
            <Box
              sx={{
                position: "sticky",
              }}
            >
              <Typography variant="h6" fontWeight="bold" mb={1} mt={1}>
                File Document
              </Typography>
              {!hideTable && (
                <Card
                  sx={{
                    backgroundColor: "#fff",
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                    padding: 2,
                    // mb: 1,
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    flexWrap="wrap"
                  >
                    <Box display="flex" flexDirection="row" alignItems="center">
                      <Typography
                        variant="body2"
                        fontWeight="700"
                        sx={{ mr: 2 }}
                      >
                       {dateLabel}
                        <span style={{ color: "red", marginLeft: "4px" }}>
                          *
                        </span>
                      </Typography>
                      <TextField
                        // label="Select Filing Date"
                        type="date"
                        size="small"
                        // value={selectedDate}
                        defaultValue={today}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                        sx={{ width: 160 }}
                      />
                    </Box>

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
                          <span style={{ color: "red", marginLeft: "4px" }}>
                            *
                          </span>
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
                              height: "36px",
                              fontSize: "0.8rem",
                              borderRadius: "4px",
                            }}
                          >
                            <MenuItem value="sel">Select Category</MenuItem>
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
                          <span style={{ color: "red", marginLeft: "4px" }}>
                            *
                          </span>
                        </Typography>

                        <FormControl sx={{ minWidth: 160 }}>
                          {selectedCategory === "AML_KYC" ? (
                            <Select
                              // labelId="application-select-label"
                              id="application-select"
                              defaultValue="sel"
                              size="small"
                              onChange={handleSubcategory}
                              sx={{
                                // bgcolor: "#f2f4f5",
                                height: "36px",
                                fontSize: "0.8rem",
                                borderRadius: "4px",
                              }}
                            >
                              <MenuItem value="sel">
                                Select Subcategory
                              </MenuItem>

                              <MenuItem value="ID Proof">ID Proof</MenuItem>
                              <MenuItem value="Address Proof">
                                Address Proof
                              </MenuItem>
                            </Select>
                          ) : (
                            <Select
                              // labelId="application-select-label"
                              id="application-select"
                              defaultValue="sel"
                              size="small"
                              onChange={handleSubcategory}
                              sx={{
                                // bgcolor: "#f2f4f5",
                                height: "36px",
                                fontSize: "0.8rem",
                                borderRadius: "4px",
                              }}
                            >
                              <MenuItem value="sel">
                                Select Subcategory
                              </MenuItem>

                              <MenuItem value="ID Proof">New Purchase</MenuItem>
                              <MenuItem value="Address Proof">
                                Additional Purchase
                              </MenuItem>
                              <MenuItem value="Address Proof">
                                Redemption
                              </MenuItem>
                              <MenuItem value="Address Proof">Switch</MenuItem>
                              <MenuItem value="Address Proof">
                                Transfer
                              </MenuItem>
                            </Select>
                          )}
                        </FormControl>
                      </Stack>
                    </Box>
                  </Box>
                </Card>
              )}
            </Box>
            <Box sx={{ overflowX: "auto" }}>
              {selectedCategory === "AML_KYC" ? (
                <div>
                  {!hideTable && searchResults.length > 0 && (
                    <Paper sx={{ p: 2, mb: 2, mt: 1,overflowY:"auto",maxHeight:400 }}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 1,
                        }}
                      >
                        Select the appropriate record from the list below.
                        <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                        Customer details from the OLTP system
                      </Typography>

                      <TableContainer
                        component={Paper}
                        sx={{
                          borderRadius: "10px 10px 0 0",
                          maxHeight: 361,
                          maxwidth: 220,
                          overflow: "auto",
                        }}
                      >
                        <Table size="small">
                          <TableHead>
                            <TableRow
                                sx={{
                                  bgcolor: "#99caff",
                                  "& th": {
                                    position: "sticky",
                                    top: 0,
                                    zIndex: 1, 
                                    backgroundColor: "#99caff", 
                                  },
                                }}
                              >
                              {" "}
                              <TableCell>
                                <Typography fontWeight="bold"></Typography>
                              </TableCell>
                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  Customer ID
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  value={columnSearch.id}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setColumnSearch((prev) => ({
                                      ...prev,
                                      id: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = mockCustomerDocs.filter(
                                      (doc) =>
                                        String(doc.id)
                                          .toLowerCase()
                                          .includes(query)
                                    );
                                    setSearchResults(filtered);
                                  }}
                                  placeholder="Search  "
                                  fullWidth
                                  autoComplete="off"
                                />
                              </TableCell>
                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  First Name
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  value={columnSearch.firstName}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setColumnSearch((prev) => ({
                                      ...prev,
                                      firstName: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = mockCustomerDocs.filter(
                                      (doc) =>
                                        doc.firstName
                                          .toLowerCase()
                                          .includes(query)
                                    );
                                    setSearchResults(filtered);
                                  }}
                                  placeholder="Search  "
                                  fullWidth
                                  autoComplete="off"
                                />
                              </TableCell>
                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  Last Name
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  value={columnSearch.lastName}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setColumnSearch((prev) => ({
                                      ...prev,
                                      lastName: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = mockCustomerDocs.filter(
                                      (doc) =>
                                        doc.lastName
                                          .toLowerCase()
                                          .includes(query)
                                    );
                                    setSearchResults(filtered);
                                  }}
                                  placeholder="Search  "
                                  fullWidth
                                />
                              </TableCell>

                               <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  Filing Date
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  value={columnSearch.filingDate}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setColumnSearch((prev) => ({
                                      ...prev,
                                      filingDate: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = mockCustomerDocs.filter(
                                      (doc) =>
                                        doc.filingDate.toLowerCase().includes(query)
                                    );
                                    setSearchResults(filtered);
                                  }}
                                  placeholder="Search"
                                  fullWidth
                                />
                              </TableCell>

                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  ID Number
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  value={columnSearch.nationalId}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setColumnSearch((prev) => ({
                                      ...prev,
                                      nationalId: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = mockCustomerDocs.filter(
                                      (doc) =>
                                        doc.nationalId
                                          .toLowerCase()
                                          .includes(query)
                                    );
                                    setSearchResults(filtered);
                                  }}
                                  placeholder="Search"
                                  fullWidth
                                />
                              </TableCell>
                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  Date of Birth
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  type="date"
                                  value={columnSearch.dob}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setColumnSearch((prev) => ({
                                      ...prev,
                                      dob: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = mockCustomerDocs.filter(
                                      (doc) =>
                                        doc.dob.toLowerCase().includes(query)
                                    );
                                    setSearchResults(filtered);
                                  }}
                                  placeholder="Search"
                                  fullWidth
                                />
                              </TableCell>
                            </TableRow>
                          </TableHead>

                          <TableBody>
                            {searchResults
                              .filter(
                                (doc) =>
                                  doc.firstName
                                    .toLowerCase()
                                    .includes(filterFirstName.toLowerCase()) &&
                                  doc.lastName
                                    .toLowerCase()
                                    .includes(filterLastName.toLowerCase()) &&
                                    doc.filingDate
                                    .toLowerCase()
                                    .includes(filterLastName.toLowerCase()) &&
                                  doc.dob
                                    .toLowerCase()
                                    .includes(filterDob.toLowerCase()) &&
                                  doc.nationalId
                                    .toLowerCase()
                                    .includes(filterNationalId.toLowerCase())
                              )
                              .map((doc) => (
                                <TableRow
                                  key={doc.id}
                                  hover
                                  onClick={() => handleSelectSearchDoc(doc)}
                                  sx={{
                                    cursor: "pointer",
                                    "& td": { py: 0.5 },
                                  }}
                                >
                                  <TableCell>
                                    <Checkbox
                                      checked={confirmedDocIds.includes(doc.id)}
                                      onChange={() => onCheck(doc.id)}
                                    />

                                  </TableCell>

                                  <TableCell>{doc.id}</TableCell>
                                  <TableCell>{doc.firstName}</TableCell>
                                  <TableCell>{doc.lastName}</TableCell>
                                  <TableCell>{doc.filingDate}</TableCell>
                                  <TableCell>{doc.nationalId}</TableCell>
                                  <TableCell>{doc.dob}</TableCell>
                                </TableRow>
                              ))}

                            {searchResults.filter(
                              (doc) =>
                                doc.firstName
                                  .toLowerCase()
                                  .includes(filterFirstName.toLowerCase()) &&
                                doc.lastName
                                  .toLowerCase()
                                  .includes(filterLastName.toLowerCase()) &&
                                doc.dob
                                  .toLowerCase()
                                  .includes(filterDob.toLowerCase()) &&
                                doc.nationalId
                                  .toLowerCase()
                                  .includes(filterNationalId.toLowerCase())
                            ).length === 0 && (
                              <TableRow>
                                <TableCell colSpan={6} align="center">
                                  <Typography color="text.secondary">
                                    No records found.
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <Box display="flex" justifyContent="flex-end" mt={2} mb={1}>
                        <Button
                          variant="outlined"
                          color="secondary"
                          // onClick={handleDiscard} // optional: attach your discard logic
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
                          Discard
                        </Button>
                    </Box>
                    </Paper>
                  )}
                </div>
              ) : (
                <div>
                  {!hideTable && searchResults.length > 0 && (
                    <Paper
                      sx={{
                        p: 2,
                        mb: 2,
                        mt: 1,
                      overflowY:"auto",
                      maxHeight:400
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          mb: 1,
                        }}
                      >
                        Select the appropriate record from the list below.
                        <span style={{ color: "red" }}>*</span>
                      </Typography>
                      <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                        Unitholder details from the OLTP system
                      </Typography>

                      <TableContainer
                        component={Paper}
                        sx={{
                          borderRadius: "10px 10px 0 0",
                          maxHeight: 361,
                          maxwidth: 200,
                          overflow: "auto",
                        }}
                      >
                        <Table size="small">
                          <TableHead>
                            <TableRow
                                    sx={{
                                      bgcolor: "#99caff",
                                      "& th": {
                                        position: "sticky",
                                        top: 0,
                                        zIndex: 1, 
                                        backgroundColor: "#99caff",
                                      },
                                    }}
                                  >
                              <TableCell></TableCell>

                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  Unitholder ID
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  value={unitColumnSearch.id}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setUnitColumnSearch((prev) => ({
                                      ...prev,
                                      id: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = unitHolderDetails.filter(
                                      (doc) =>
                                        doc.id.toLowerCase().includes(query)
                                    );
                                    setSearchUnitResults(filtered);
                                  }}
                                  placeholder="Search"
                                  fullWidth
                                />
                              </TableCell>

                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  Transaction Date
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  type="date"
                                  value={unitColumnSearch.transactionDate}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setUnitColumnSearch((prev) => ({
                                      ...prev,
                                      transactionDate: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = unitHolderDetails.filter(
                                      (doc) =>
                                        doc.transactionDate
                                          .toLowerCase()
                                          .includes(query)
                                    );
                                    setSearchUnitResults(filtered);
                                  }}
                                  placeholder="Search"
                                  fullWidth
                                />
                              </TableCell>

                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  Transaction No.
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  value={unitColumnSearch.transactionNo}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setUnitColumnSearch((prev) => ({
                                      ...prev,
                                      transactionNo: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = unitHolderDetails.filter(
                                      (doc) =>
                                        doc.transactionNo
                                          .toLowerCase()
                                          .includes(query)
                                    );
                                    setSearchUnitResults(filtered);
                                  }}
                                  placeholder="Search"
                                  fullWidth
                                />
                              </TableCell>

                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  Transaction Type
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  value={unitColumnSearch.transactionType}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setUnitColumnSearch((prev) => ({
                                      ...prev,
                                      transactionType: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = unitHolderDetails.filter(
                                      (doc) =>
                                        doc.transactionType
                                          .toLowerCase()
                                          .includes(query)
                                    );
                                    setSearchUnitResults(filtered);
                                  }}
                                  placeholder="Search"
                                  fullWidth
                                />
                              </TableCell>

                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  Fund
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  value={unitColumnSearch.fund}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setUnitColumnSearch((prev) => ({
                                      ...prev,
                                      fund: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = unitHolderDetails.filter(
                                      (doc) =>
                                        doc.fund.toLowerCase().includes(query)
                                    );
                                    setSearchUnitResults(filtered);
                                  }}
                                  placeholder="Search"
                                  fullWidth
                                />
                              </TableCell>

                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  Class
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  value={unitColumnSearch.class}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setUnitColumnSearch((prev) => ({
                                      ...prev,
                                      class: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = unitHolderDetails.filter(
                                      (doc) =>
                                        doc.class.toLowerCase().includes(query)
                                    );
                                    setSearchUnitResults(filtered);
                                  }}
                                  placeholder="Search"
                                  fullWidth
                                />
                              </TableCell>

                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  Amount
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  value={unitColumnSearch.amount}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setUnitColumnSearch((prev) => ({
                                      ...prev,
                                      amount: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = unitHolderDetails.filter(
                                      (doc) =>
                                        doc.amount.toLowerCase().includes(query)
                                    );
                                    setSearchUnitResults(filtered);
                                  }}
                                  placeholder="Search"
                                  fullWidth
                                />
                              </TableCell>

                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  Units
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  value={unitColumnSearch.units}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setUnitColumnSearch((prev) => ({
                                      ...prev,
                                      units: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = unitHolderDetails.filter(
                                      (doc) =>
                                        doc.units.toLowerCase().includes(query)
                                    );
                                    setSearchUnitResults(filtered);
                                  }}
                                  placeholder="Search"
                                  fullWidth
                                />
                              </TableCell>

                              <TableCell>
                                <Typography fontWeight="bold" mb={1}>
                                  NAV
                                </Typography>
                                <TextField
                                  variant="standard"
                                  size="small"
                                  value={unitColumnSearch.nav}
                                  onChange={(e) => {
                                    const value = e.target.value;
                                    setUnitColumnSearch((prev) => ({
                                      ...prev,
                                      nav: value,
                                    }));
                                    const query = value.toLowerCase();
                                    const filtered = unitHolderDetails.filter(
                                      (doc) =>
                                        doc.nav.toLowerCase().includes(query)
                                    );
                                    setSearchUnitResults(filtered);
                                  }}
                                  placeholder="Search"
                                  fullWidth
                                />
                              </TableCell>
                            </TableRow>
                          </TableHead>

                          <TableBody>
                            {searchUnitResult.map((doc) => (
                              <TableRow
                                key={doc.id}
                                hover
                                onClick={() => handleSelectSearchDoc(doc)}
                                sx={{ cursor: "pointer", "& td": { py: 0.5 } }}
                              >
                                <TableCell>
                                  <Checkbox
                                    checked={confirmedDocIds.includes(doc.id)}
                                    onChange={onCheck}
                                  />
                                </TableCell>
                                <TableCell>{doc.id}</TableCell>
                                <TableCell>{doc.transactionDate}</TableCell>
                                <TableCell>{doc.transactionNo}</TableCell>
                                <TableCell>{doc.transactionType}</TableCell>
                                <TableCell>{doc.fund}</TableCell>
                                <TableCell>{doc.class}</TableCell>
                                <TableCell>{doc.amount}</TableCell>
                                <TableCell>{doc.units}</TableCell>
                                <TableCell>{doc.nav}</TableCell>
                              </TableRow>
                            ))}

                            {searchUnitResult.length === 0 && (
                              <TableRow>
                                <TableCell colSpan={10} align="center">
                                  <Typography color="text.secondary">
                                    No records found.
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </TableContainer>
                      <Box display="flex" justifyContent="flex-end" mt={2} mb={1}>
                        <Button
                          variant="outlined"
                          color="secondary"
                          // onClick={handleDiscard} // optional: attach your discard logic
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
                          Discard
                        </Button>
                    </Box>
                    </Paper>
                  )}
                </div>
              )}

              {formCard && selectedCategory == "AML_KYC" && (
                <Card
                  sx={{
                    // height: alertOpen ? "62vh" : "50vh",
                    overflowY: "auto",
                    p: 2,
                    transition: "height 0.3s ease",
                  }}
                >
                  <Grid item size={5}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{ mb: 2, fontSize: 20, fontWeight: "bold" }}
                      >
                        Additional Information
                      </Typography>

                      <TextField
                        label="Customer ID"
                        fullWidth
                        value={formData.customerId}
                        sx={{ mb: 2 }}
                        // disabled={!selectedDoc}
                      />

                     <TextField
                        // label="Issue Date"
                        label={
                          <span>
                            Filing Date{" "}
                          </span>
                        }
                        type="date"
                        fullWidth
                        sx={{ mb: 2 }}
                        InputLabelProps={{ shrink: true }}
                        value={formData.filingDate}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            filingDate: e.target.value,
                          }))
                        }
                      />

                      <TextField
                                              label="Customer Name"
                                              fullWidth
                                              value={`${formData.firstName} ${
                                                formData.lastName || ""
                                              }`}
                                              sx={{ mb: 2 }}
                                            />
                      <TextField
                        // label="Issue Date"
                        label={
                          <span>
                            Issue Date{" "}
                            {/* <span style={{ color: "red", fontSize: "22px" }}>
                              *
                            </span> */}
                          </span>
                        }
                        type="date"
                        fullWidth
                        sx={{ mb: 2 }}
                        InputLabelProps={{ shrink: true }}
                        value={formData.issueDate}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            issueDate: e.target.value,
                          }))
                        }
                      />

                      <TextField
                        label={
                          <span>
                            Expiry Date{" "}
                            {/* <span style={{ color: "red", fontSize: "22px" }}>
                              *
                            </span> */}
                          </span>
                        }
                        type="date"
                        fullWidth
                        sx={{ mb: 2 }}
                        InputLabelProps={{ shrink: true }}
                        value={formData.expiryDate}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            expiryDate: e.target.value,
                          }))
                        }
                      />

                      


                    </Paper>
                  </Grid>
                  <TransitionAlerts
                    alertOpen={alertOpen}
                   message={`The document of the customer ID ${formData.customerId} has been saved successfully.`}

                  />

                  <Box sx={{ p: 1, mt: 2 }}>
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="flex-end"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                        disabled={disable}
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
                        Save
                      </Button>
                      <Button
                        variant="outlined"
                        color="secondary"
                       disabled={disable}
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
                        Discard
                      </Button>
                    </Stack>
                  </Box>
                </Card>
              )}
              {formCard && selectedCategory == "Transaction" && (
                <Card
                  sx={{
                    // height: alertOpen ? "62vh" : "50vh",
                    overflowY: "auto",
                    p: 2,
                    transition: "height 0.3s ease",
                  }}
                >
                  <Grid item size={5}>
                    <Paper
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        sx={{ mb: 2, fontSize: 20, fontWeight: "bold" }}
                      >
                        Additional Information
                      </Typography>

                      <TextField
                        label="UnitHolder ID"
                        fullWidth
                        value={unitColumnSearch.customerId}
                        sx={{ mb: 2 }}
                        // disabled={!selectedDoc}
                      />

                    <TextField
                        // label="Issue Date"
                        label={
                          <span>
                            Transaction Date{" "}
                          </span>
                        }
                        type="date"
                        fullWidth
                        sx={{ mb: 2 }}
                        InputLabelProps={{ shrink: true }}
                        value={unitColumnSearch.transactionDate}
                        onChange={(e) =>
                          setUnitColumnSearch((prev) => ({
                            ...prev,
                            transactionDate: e.target.value,
                          }))
                        }
                      />
                       <TextField
                        label="Transaction No."
                        fullWidth
                        value={unitColumnSearch.transactionNo}
                        sx={{ mb: 2 }}
                        // disabled={!selectedDoc}
                      />
                       <TextField
                        label="Amount"
                        fullWidth
                        value={unitColumnSearch.amount}
                        sx={{ mb: 2 }}
                        // disabled={!selectedDoc}
                      />
                    </Paper>
                  </Grid>
                  <TransitionAlerts
                    alertOpen={alertOpen}
                    //   handleAlertClose={handleAlertClose}
                    message={
                      "The document of the UnitHolder ID UH326 has been saved successfully."
                    }
                  />
                  <Box sx={{ p: 1, mt: 2 }}>
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="flex-end"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                        disabled={disable}
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
                        Save
                      </Button>
                     
  <Button
    variant="outlined"
    color="secondary"
   disabled={disable}
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
    Discard
  </Button>

                    </Stack>
                  </Box>
                </Card>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Archive1;
