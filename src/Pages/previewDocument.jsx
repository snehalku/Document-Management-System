import React, { useState, useEffect } from "react";
import pan_card from "../assets/pan_card.pdf";
import agecard from "../assets/agecard.jpg";
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
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const mockCustomerDocs = [
  {
    id: 1,
    firstName: "David R",
    lastName: "Smith",
    date: "2025-04-30",
    dob: "2006-05-01",
    expiresOn: "2024-08-22",
    nationalId: "5843216645678904",
  },
  {
    id: 2,
    firstName: "Jane Smith",
    lastName: "Smith",
    date: "2025-04-29",
    dob: "2007-12-11",
    expiresOn: "2025-08-12",
    nationalId: "5843216645678904",
  },
  {
    id: 3,
    firstName: "David ",
    lastName: "Johnson",
    date: "2025-04-30",
    dob: "2007-05-10",
    expiresOn: "2025-08-12",
    nationalId: "5843216645678905",
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
    const results = mockCustomerDocs.filter(
      (doc) =>
        (!searchCustomer ||
          doc.firstName.toLowerCase().includes(searchCustomer.toLowerCase())) &&
        (!selectedDate || doc.date === selectedDate)
    );
    setSearchResults(results);
  };

  const handleCheckboxToggle = (docId) => {
    if (confirmedDocIds.includes(docId)) {
      setConfirmedDocIds(confirmedDocIds.filter((id) => id !== docId));
    } else {
      setConfirmedDocIds([...confirmedDocIds, docId]);
    }
  };

  const handleSelectSearchDoc = (doc) => {
    setSelectedDoc(doc);
    setCategory(doc.category || "");
    setSubcategory(doc.subcategory || "");
    setSelectedDocName(doc.docName);
    setSelectedDate(doc.date);
    setSearchCustomer(doc.customerName);
    setDocIdentifier("National ID"); 

    // Optional: You can also directly add to confirmed IDs here
    if (!confirmedDocIds.includes(doc.id)) {
      setConfirmedDocIds([...confirmedDocIds, doc.id]);
    }
  };

  const handleSave = () => {
    setShowSnackbar(true); 
    console.log("Snackbar should show now"); 

    setTimeout(() => {
      navigate("/documents");
    }, 2000);
  };

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
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Document Upload
      </Typography>

      {!selectedDoc && (
        <>
          {/* Search Parameters */}
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
              <Grid item xs={4}>
                <TextField
                  label="Customer Name"
                  fullWidth
                  value={searchCustomer}
                  onChange={(e) => setSearchCustomer(e.target.value)}
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

          {/* Search Result Table */}
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
                        <Typography fontWeight="bold">First Name</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography fontWeight="bold">Last Name</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography fontWeight="bold">Date of Birth</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography fontWeight="bold">National ID</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {searchResults.map((doc) => (
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
        </>
      )}

      <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
        <Grid container spacing={2}>
          <Grid item size={7}>
            <Paper
              sx={{
                height: "73vh",
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
            </Paper>
          </Grid>

          <Grid item size={5}>
            <Paper
              sx={{
                p: 2,
                height: "68vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ mb: 2, fontSize: 20, fontWeight: "bold" }}>
                  Transaction Data
                </Typography>
                <TextField
                  label="First Name"
                  fullWidth
                  value={selectedDoc?.firstName || ""}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Last Name"
                  fullWidth
                  value={selectedDoc?.lastName || ""}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Date of Birth"
                  fullWidth
                  value={selectedDoc?.dob || ""}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="National ID"
                  fullWidth
                  value={selectedDoc?.nationalId || ""}
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
                  label="Category"
                  select
                  fullWidth
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  sx={{ mb: 2 }}
                  disabled={!selectedDoc}
                >
                  <MenuItem value="ageCard">KYC</MenuItem>
                  <MenuItem value="accounts"> Accounts</MenuItem>
                  <MenuItem value="finance"> Finance</MenuItem>
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
                  <MenuItem value="ageCard"> ID Proof</MenuItem>
                  <MenuItem value="license"> Address Proof</MenuItem>
                </TextField>
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

          {/* Snackbar */}

          <Snackbar
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
              ✅ Your data has been saved successfully.
            </Alert>
          </Snackbar>
        </Box>
      </Paper>
    </Box>
  );
};

export default PreviewKycPage;
