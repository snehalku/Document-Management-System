import React, { useState, useEffect } from "react";
import agecard from "../assets/agecard.jpg";
import ageCard from "../assets/ageCard.png"
import { Snackbar, Alert, Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
];

const PreviewKycPage = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");
  const [docList, setDocList] = useState([]);
  const [selectedDocName, setSelectedDocName] = useState("");
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [searchCustomer, setSearchCustomer] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [confirmedDocIds, setConfirmedDocIds] = useState([]);
  const [docIdentifier, setDocIdentifier] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [filterFirstName, setFilterFirstName] = useState("");
  const [filterLastName, setFilterLastName] = useState("");
  const [filterDob, setFilterDob] = useState("");
  const [filterNationalId, setFilterNationalId] = useState("");
  const [previewDocPath, setPreviewDocPath] = useState(null);
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
    setPreviewDocPath(ageCard);
    // setTimeout(() => {
    //   navigate("/documents");
    // }, 2000);
  };

  // const handleSave = () => {
  //   if (!selectedDoc) return;
  
  //   // Mark the document as confirmed
  //   setConfirmedDocIds((prev) => [...prev, selectedDoc.id]);
  
  //   // Show the success snackbar
  //   setShowSnackbar(true);
  // };
  
  

  const handleDiscard = () => {
    if (!selectedDoc) return;

    alert(`Document ${selectedDoc.docName} moved to trash`);
    setSelectedDoc(null);
    setSelectedDocName("");
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
        Customer KYC
      </Typography>

      {!selectedDoc && (
        <>
          <Stack
            direction="row"
            spacing={2}
            sx={{ mb: 2 }}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="subtitle1" fontWeight="bold">
              Select Department
            </Typography>

            <FormControl sx={{ minWidth: 150 }}>
              <Select
                labelId="application-select-label"
                id="application-select"
                defaultValue="AML KYC"
                label="Application"
                sx={{
                  bgcolor: "#f2f4f5",
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
                <MenuItem value="AML KYC">AML KYC</MenuItem>
                <MenuItem value="Account">Accounts</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Box mb={3}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <TextField
                  label="Search by Date"
                  type="date"
                  fullWidth
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Search by Customer ID, Customer Name, Date of Birth, National ID"
                  value={searchCustomer}
                  onChange={(e) => setSearchCustomer(e.target.value)}
                  sx={{ width: "475px" }}
                />
              </Grid>
              <Grid item xs={4} display="flex" alignItems="center">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSearch}
                  sx={{
                    height: "100%",
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
                  Get Data
                </Button>
              </Grid>
            </Grid>
          </Box>

          {searchResults.length > 0 && (
            <Paper sx={{ p: 2, mb: 2 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Select the appropriate record from the list below.
                <span style={{ color: "red" }}>*</span>
              </Typography>
              <TableContainer
                component={Paper}
                sx={{ borderRadius: "10px 10px 0 0" }}
              >
                <Table size="small">
                  {" "}
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#99caff", "& td": { py: 0.5 } }}>
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
                              const filtered = mockCustomerDocs.filter((doc) =>
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
                              const filtered = mockCustomerDocs.filter((doc) =>
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
                              const filtered = mockCustomerDocs.filter((doc) =>
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
                              const filtered = mockCustomerDocs.filter((doc) =>
                                doc.dob.toLowerCase().includes(query)
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
                            National ID
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
                              const filtered = mockCustomerDocs.filter((doc) =>
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
                              disabled
                            />
                          </TableCell>
                          <TableCell>{doc.id}</TableCell>
                          <TableCell>{doc.firstName}</TableCell>
                          <TableCell>{doc.lastName}</TableCell>
                          {/* <TableCell>{doc.transactionId}</TableCell> */}
                          <TableCell>{doc.dob}</TableCell>
                          <TableCell>{doc.nationalId}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          )}
        </>
      )}
      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 2,
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Grid container spacing={2}>
          <Grid item size={7}>
            {/* <Paper
              sx={{
                height: "110vh",
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
                  src={`${selectedDoc?.path || agecard}#toolbar=0`}
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
            </Paper> */}
             <Paper
              sx={{
                height: "110vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
              }}
              elevation={2}
            >
              {previewDocPath ? (
                // If it's an image
                previewDocPath.endsWith(".png") ||
                previewDocPath.endsWith(".jpg") ? (
                  <img
                    src={previewDocPath}
                    alt="Preview"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <iframe
                    src={`${previewDocPath}#toolbar=0`}
                    title="Preview Document"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                )
              ) : selectedDoc?.docType === "image" ? (
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
                  src={`${selectedDoc?.path || agecard}#toolbar=0`}
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
                height: "105vh",
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
                  value={selectedDoc?.id || ""}
                  sx={{ mb: 2 }}
                  disabled={!selectedDoc}
                />
                <TextField
                  label="First Name"
                  fullWidth
                  value={selectedDoc?.firstName || ""}
                  sx={{ mb: 2 }}
                  disabled={!selectedDoc}
                />
                <TextField
                  label="Last Name"
                  fullWidth
                  value={selectedDoc?.lastName || ""}
                  sx={{ mb: 2 }}
                  disabled={!selectedDoc}
                />
                <TextField
                  label="Date of Birth"
                  fullWidth
                  value={selectedDoc?.dob || ""}
                  sx={{ mb: 2 }}
                  disabled={!selectedDoc}
                />
                <TextField
                  label="National ID"
                  fullWidth
                  value={selectedDoc?.nationalId || ""}
                  sx={{ mb: 2 }}
                  disabled={!selectedDoc}
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
                  label="Category"
                  select
                  fullWidth
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  sx={{ mb: 2 }}
                  disabled={!selectedDoc}
                >
                  {/* <MenuItem value="ageCard">AML KYC</MenuItem> */}
                  <MenuItem value="ageCard"> Age Proof</MenuItem>
                  <MenuItem value="passport"> ID Proof</MenuItem>
                  <MenuItem value="license"> Address Proof</MenuItem>
                  <MenuItem value="signature"> Signature Proof</MenuItem>
                </TextField>
                <TextField
                  label=" Sub Category"
                  select
                  fullWidth
                  value={subcategory}
                  onChange={(e) => setSubcategory(e.target.value)}
                  sx={{ mb: 2 }}
                  disabled={!selectedDoc}
                >
                  <MenuItem value="ageCard"> Age Card</MenuItem>
                </TextField>
                <TextField
                  label="Issue Date"
                  type="date"
                  fullWidth
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                  disabled={!selectedDoc}
                />

                <TextField
                  label="Expiry Date"
                  type="date"
                  fullWidth
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                  disabled={!selectedDoc}
                />

                <TextField
                  label="Version NO."
                  fullWidth
                  defaultValue= "1.0"
                  sx={{ mb: 2 }}
                  disabled={!selectedDoc}
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
              onClick={handleDiscard}
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

              // Now move to next document after snackbar closes
              const currentIndex = searchResults.findIndex(doc => doc.id === selectedDoc.id);
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
      </Paper>
    </Box>
  );
};

export default PreviewKycPage;
