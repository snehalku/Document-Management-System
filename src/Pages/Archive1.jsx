import React, { useState, useEffect } from "react";
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
import SearchIcon from "@mui/icons-material/Search";
import { Snackbar, Alert } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const mockCustomerDocs = [
  {
    id: 105,
    firstName: "Mets",
    lastName: "Lilli",
    transactionId: "TXN123",
    date: "2025-04-30",
    dob: "1988-11-16",
    expiresOn: "2020-01-02",
    nationalId: "AS1234567",
  },
  {
    id: 110,
    firstName: "John",
    lastName: "Smith",
    transactionId: "TXN123",
    date: "2025-04-30",
    dob: "1988-11-16",
    expiresOn: "2032-12-12",
    nationalId: "A123477",
  },
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
    expiresOn: "2025-08-12",
    nationalId: "5843216645678904",
  },
  {
    id: 103,
    firstName: "Angela ",
    lastName: "Greene",
    transactionId: "TXN567",
    date: "2025-04-28",
    dob: "2002-11-09",
    expiresOn: "2028-04-30",
    nationalId: "5843216619642184",
  },
  {
    id: 104,
    firstName: "David ",
    lastName: "Greene",
    transactionId: "TXN567",
    date: "2025-04-30",
    dob: "2002-11-09",
    expiresOn: "2028-04-30",
    nationalId: "5843216619642184",
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
  const [filterFirstName, setFilterFirstName] = useState("");
  const [filterLastName, setFilterLastName] = useState("");
  const [filterDob, setFilterDob] = useState("");
  const [filterNationalId, setFilterNationalId] = useState("");
  const [previewDocPath, setPreviewDocPath] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [searchCustomer, setSearchCustomer] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hideTable, setHideTable] = React.useState(false);

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
        (!selectedDate || doc.date === selectedDate) &&
        (!searchCustomer ||
          doc.firstName.toLowerCase().includes(query) ||
          doc.lastName.toLowerCase().includes(query) ||
          doc.dob.toLowerCase().includes(query) ||
          doc.nationalId.toLowerCase().includes(query))
      );
    });
    setSearchResults(results);
  };

  const handleSelectSearchDoc = (doc) => {
    setSelectedDoc(doc);
    setCategory(doc.category || "");
    setSubcategory(doc.subcategory || "");
    setSelectedDocName(doc.docName);
    setSelectedDate(doc.date);
    setSearchCustomer(doc.customerName);
    setDocIdentifier("National ID");

    if (!confirmedDocIds.includes(doc.id)) {
      setConfirmedDocIds([...confirmedDocIds, doc.id]);
    }
  };

  const handleSave = () => {
    setShowSnackbar(true);
    console.log("Snackbar should show now");
    setTimeout(() => {
      setPreviewDocPath(idcard);
    }, 3000);
    setSelectedDate(null);
    setSearchCustomer("");
    setSearchResults("");
    setCategory("");
    setSubcategory("");
    setIssueDate("");
    setExpiryDate("");
  };
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
          //   minHeight: "90vh",
          width: "100%",
          py: 1,
          ml: "70px",
          //   mt: "2px",
          mr: "24px",
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          // gap: 2,
        }}
      >
        <Card
          sx={{
            flex: 1.2,
            height: "87vh",
            position: "sticky",
            top: 0,
            alignSelf: "flex-start",
            overflowY: "hidden",
          }}
        >
          <Box sx={{ width: "100%", height: "auto" }}>
            <CardMedia
              component="img"
              image={Doc2}
              alt="Document"
              sx={{
                width: "100%",
                height: "110vh",
                objectFit: "contain",
              }}
            />
          </Box>
        </Card>

        <Box
          sx={{
            flex: 1,
            height: "100vh",
            p: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Customer KYC
          </Typography>
          <Box>
            <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
              <TextField
                label="Search by Transaction Date"
                type="date"
                size="small"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                sx={{ width: 160 }}
              />

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
                  </Typography>

                  <FormControl sx={{ minWidth: 160 }}>
                    <Select
                      labelId="application-select-label"
                      id="application-select"
                      // defaultValue="AML KYC"
                      label="Application"
                      sx={{
                        bgcolor: "#f2f4f5",
                        height: "36px",
                        fontSize: "0.8rem",
                        borderRadius: "4px",
                        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.2)",
                        "& fieldset": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "6px 10px",
                          fontSize: "0.8rem",
                        },
                        "&.Mui-focused": {
                          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
                        },
                      }}
                    >
                      <MenuItem value="AML KYC">AML KYC</MenuItem>
                      <MenuItem value="Account">Transaction</MenuItem>
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
                    Sub Category
                  </Typography>

                  <FormControl sx={{ minWidth: 160 }}>
                    <Select
                      labelId="application-select-label"
                      id="application-select"
                      // defaultValue="ID Proof"
                      size="small"
                      sx={{
                        bgcolor: "#f2f4f5",
                        height: "36px",
                        fontSize: "0.8rem",
                        borderRadius: "4px",
                        boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.2)",
                        "& fieldset": {
                          border: "none",
                        },
                        "& .MuiSelect-select": {
                          padding: "6px 10px",
                          fontSize: "0.8rem",
                        },
                        "&.Mui-focused": {
                          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
                        },
                      }}
                    >
                      <MenuItem value="ID Proof">ID Proof</MenuItem>
                      <MenuItem value="Address Proof">Address Proof</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Box>

              <TextField
                label=" Search by Customer ID, Name, DOB, National ID"
                size="small"
                value={searchCustomer}
                onChange={(e) => setSearchCustomer(e.target.value)}
                sx={{ mb: 2, width: 400 }}
              />

              <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
                sx={{
                  mb: 2,
                  height: "36px",
                  borderRadius: "8px",
                  bgcolor: "#99CAFF",
                  color: "black",
                  px: 2,
                  fontSize: "0.8rem",
                  boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
                  "&:hover": {
                    bgcolor: "#7bb8ff",
                  },
                }}
              >
                Get Data
              </Button>
            </Box>

            {!hideTable && searchResults.length > 0 && (
              <Paper sx={{ p: 2, mb: 2 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1 }}
                >
                  Select the appropriate record from the list below.
                  <span style={{ color: "red" }}>*</span>
                </Typography>

                <TableContainer
                  component={Paper}
                  sx={{ borderRadius: "10px 10px 0 0" }}
                >
                  <Table size="small">
                    <TableHead>
                      <TableRow
                        sx={{ bgcolor: "#99caff", "& td": { py: 0.5 } }}
                      >
                        {" "}
                        <TableCell>
                          <Typography fontWeight="bold"></Typography>
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Typography fontWeight="bold" mr={1}>
                              Customer ID
                            </Typography>
                            <SearchIcon
                              sx={{ cursor: "pointer" }}
                              onClick={() =>
                                setShowSearchInput((prev) => ({
                                  ...prev,
                                  id: !prev.id,
                                }))
                              }
                            />
                          </Box>
                          {showSearchInput.id && (
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
                                    String(doc.id).toLowerCase().includes(query)
                                );
                                setSearchResults(filtered);
                              }}
                              placeholder="Search Customer ID"
                            />
                          )}
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Typography fontWeight="bold" mr={1}>
                              First Name
                            </Typography>
                            <SearchIcon
                              sx={{ cursor: "pointer" }}
                              onClick={() =>
                                setShowSearchInput((prev) => ({
                                  ...prev,
                                  firstName: !prev.firstName,
                                }))
                              }
                            />
                          </Box>
                          {showSearchInput.firstName && (
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
                                    doc.firstName.toLowerCase().includes(query)
                                );
                                setSearchResults(filtered);
                              }}
                              placeholder="Search First Name"
                            />
                          )}
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Typography fontWeight="bold" mr={1}>
                              Last Name
                            </Typography>
                            <SearchIcon
                              sx={{ cursor: "pointer" }}
                              onClick={() =>
                                setShowSearchInput((prev) => ({
                                  ...prev,
                                  lastName: !prev.lastName,
                                }))
                              }
                            />
                          </Box>
                          {showSearchInput.lastName && (
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
                                    doc.lastName.toLowerCase().includes(query)
                                );
                                setSearchResults(filtered);
                              }}
                              placeholder="Search Last Name"
                            />
                          )}
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Typography fontWeight="bold" mr={1}>
                              Date of Birth
                            </Typography>
                            <SearchIcon
                              sx={{ cursor: "pointer" }}
                              onClick={() =>
                                setShowSearchInput((prev) => ({
                                  ...prev,
                                  dob: !prev.dob,
                                }))
                              }
                            />
                          </Box>
                          {showSearchInput.dob && (
                            <TextField
                              variant="standard"
                              size="small"
                              value={columnSearch.dob}
                              onChange={(e) => {
                                const value = e.target.value;
                                setColumnSearch((prev) => ({
                                  ...prev,
                                  dob: value,
                                }));
                                const query = value.toLowerCase();
                                const filtered = mockCustomerDocs.filter(
                                  (doc) => doc.dob.toLowerCase().includes(query)
                                );
                                setSearchResults(filtered);
                              }}
                              placeholder="Search Date od Birth"
                            />
                          )}
                        </TableCell>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Typography fontWeight="bold" mr={1}>
                              ID Number
                            </Typography>
                            <SearchIcon
                              sx={{ cursor: "pointer" }}
                              onClick={() =>
                                setShowSearchInput((prev) => ({
                                  ...prev,
                                  nationalId: !prev.nationalId,
                                }))
                              }
                            />
                          </Box>
                          {showSearchInput.nationalId && (
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
                                    doc.nationalId.toLowerCase().includes(query)
                                );
                                setSearchResults(filtered);
                              }}
                              placeholder="Search National ID"
                            />
                          )}
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
                            sx={{ cursor: "pointer", "& td": { py: 0.5 } }}
                          >
                            <TableCell>
                              <Checkbox
                                checked={confirmedDocIds.includes(doc.id)}
                                onChange={() => setHideTable(true)} // hides the entire section
                              />
                            </TableCell>
                            <TableCell>{doc.id}</TableCell>
                            <TableCell>{doc.firstName}</TableCell>
                            <TableCell>{doc.lastName}</TableCell>
                            <TableCell>{doc.dob}</TableCell>
                            <TableCell>{doc.nationalId}</TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            )}
          </Box>

          <Card
            sx={{
              height: "53vh",
              overflowY: "auto",
              p: 2,
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
                <Typography sx={{ mb: 2, fontSize: 20, fontWeight: "bold" }}>
                  Document
                </Typography>

                <TextField
                  label="Customer ID / Transaction ID"
                  fullWidth
                  value={selectedDoc?.id || ""}
                  sx={{ mb: 2 }}
                  disabled={!selectedDoc}
                />

                <TextField
                  label="Issue Date"
                  type="date"
                  fullWidth
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                />

                <TextField
                  label="Expiry Date"
                  type="date"
                  fullWidth
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                />

                <TextField
                  label="Version NO."
                  fullWidth
                  defaultValue="1.0"
                  sx={{ mb: 2 }}
                />
              </Paper>
            </Grid>
            <Box sx={{ p: 1 }}>
              <Stack direction="row" spacing={2} justifyContent="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                  disabled={selectedDoc === null}
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
                  // onClick={handleDiscard}
                  disabled={!selectedDoc}
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
              <Snackbar
                open={showSnackbar}
                autoHideDuration={3000}
                onClose={() => {
                  setShowSnackbar(false);
                  const currentIndex = searchResults.findIndex(
                    (doc) => doc.id === selectedDoc.id
                  );
                  const nextDoc = searchResults[currentIndex + 1];
                  setSelectedDoc(nextDoc || null);
                }}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <Alert
                  onClose={() => setShowSnackbar(false)}
                  severity="success"
                  variant="filled"
                  icon={<CheckCircleIcon sx={{ fontSize: 24, mr: 1 }} />}
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
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography fontWeight={500}>
                      Your document has been saved successfully.
                    </Typography>
                  </Box>
                </Alert>
              </Snackbar>
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Archive1;
