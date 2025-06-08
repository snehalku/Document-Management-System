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
import invoice1 from "../assets/invoice1.png";
import invoice3 from "../assets/invoice3.png";

import Doc2 from "../assets/Doc2.png";
import Doc3 from "../assets/Doc3.png";
import SearchIcon from "@mui/icons-material/Search";
import TransitionAlerts from "../Components/ui/Notification";
import Header from "../Components/Layout/Header";

const mockCustomerDocs = [
  {
    id: "111",
    companyName: "TCS",
    date: "2025-04-30",
    expiresOn: "2032-12-12",
    invoiceNo: "123477",
    invoiceDate: "2025-05-29",
    invoiceAmount: "4725",
  },
  {
    id: "125",
    companyName: "Fujitsu",
    date: "2025-04-30",
    expiresOn: "2025-10-22",
    invoiceNo: "547896",
    invoiceDate: "2025-05-29",
    invoiceAmount: "8521",
  },
  {
    id: "126",
    companyName: "Infosys",
    date: "2025-04-30",
    expiresOn: "2025-10-22",
    invoiceNo: "457896",
    invoiceDate: "2025-05-29",
    invoiceAmount: "3569",
  },
  {
    id: "123",
    companyName: "Syborgtech",
    date: "2025-04-30",
    expiresOn: "2025-10-22",
    invoiceNo: "123456",
    invoiceDate: "2025-05-29",
    invoiceAmount: "971",
  },
  {
    id: "128",
    companyName: "Syborgtech",
    date: "2025-04-30",
    expiresOn: "2025-10-22",
    invoiceNo: "325698",
    invoiceDate: "2025-05-29",
    invoiceAmount: "1452",
  },
];
const Invoice = () => {
  const [docList, setDocList] = useState([]);
  const [selectedDocName, setSelectedDocName] = useState("");
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [confirmedDocIds, setConfirmedDocIds] = useState([]);
  const [docIdentifier, setDocIdentifier] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [filterInvoiceNo, setFilterInvoiceNo] = useState("");
  const [filterCompanyName, setFilterCompanyName] = useState("");
  const [previewDocPath, setPreviewDocPath] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [searchCustomer, setSearchCustomer] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hideTable, setHideTable] = React.useState(false);

  const [columnSearch, setColumnSearch] = useState({
    invoiceNo: "",
    companyName: "",
  });
  const [showSearchInput, setShowSearchInput] = useState({
    invoiceNo: false,
    companyName: false,
  });
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [formData, setFormData] = useState({
    customerId: "",
    invoiceNo: "",
    issueDate: "",
    expiryDate: "",
  });

  useEffect(() => {
    if (selectedDoc) {
      setFormData({
        // ...prev,
        customerId: selectedDoc.id || "",
        invoiceNo: selectedDoc.invoiceNo || "",
      });
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
        // (!selectedDate || doc.date === selectedDate) &&
        !searchCustomer ||
        doc.invoiceNo.toLowerCase().includes(query) ||
        doc.id.toLowerCase().includes(query)
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
    setSearchCustomer(doc.invoiceNo);

    if (!confirmedDocIds.includes(doc.id)) {
      setConfirmedDocIds([...confirmedDocIds, doc.id]);
    }
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
        invoiceNo: "",
        issueDate: "",
        expiryDate: "",
      });
    } else {
      setSelectedDoc(null);
    }
  };

  const handleSave = () => {
    setAlertOpen(true);

    setTimeout(() => {
      setAlertOpen(false);
      setFormData({
        customerId: "",
        invoiceNo: "",
      });
      setSelectedDoc(null);
      setHideTable(false);
      showNextDocument();
      setSelectedDate(null);
      setSearchCustomer("");
      setSearchResults("");
      setCategory("");
      setSubcategory("");
      setIssueDate("");
      setExpiryDate("");
      setPreviewDocPath(invoice3);
    }, 3000);
  };

  const departments = [
    { label: "Sales", route: "/archiveDocument1" },
    { label: "Accounts", route: "/invoice" },
    { label: "Legal" },
    { label: "HR" },
  ];

  return (
    <div>
      <Header departments={departments} defValue={"Accounts"} />
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
            width: "100%",
            py: 1,
            ml: "70px",
            mr: "24px",
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
              height: "87vh",
              position: "sticky",
              top: 5,
              alignSelf: "flex-start",
              overflowY: "hidden",
            }}
          >
            {(() => {
              const docPath = previewDocPath || selectedDoc?.path || invoice1;

              // Check if docPath is an image
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
                    title="Invoice Document"
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

          {/* </Card> */}

          <Box
            sx={{
              flex: 1,
              height: "100vh",
              // p: 2,
              pl: 2,
              pr: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold" mb={2}>
              Invoice Document
            </Typography>
            <Box>
              {!hideTable && (
                <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
                  <Typography variant="body2" fontWeight="700">
                    Date
                    <span style={{ color: "red", marginLeft: "4px" }}>*</span>
                  </Typography>
                  <TextField
                    label="Search by Invoice Date"
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
                        <span style={{ color: "red", marginLeft: "4px" }}>
                          *
                        </span>
                      </Typography>

                      <FormControl sx={{ minWidth: 160 }}>
                        <Select
                          labelId="application-select-label"
                          id="application-select"
                          defaultValue="Select Category"
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
                          <MenuItem value="Select Category">
                            Select Category
                          </MenuItem>
                          <MenuItem value="Accounts Payable">
                            Accounts Payable
                          </MenuItem>
                          <MenuItem value="Accounts Receivable">
                            Accounts Receivable
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
                        Sub Category
                        <span style={{ color: "red", marginLeft: "4px" }}>
                          *
                        </span>
                      </Typography>

                      <FormControl sx={{ minWidth: 160 }}>
                        <Select
                          labelId="application-select-label"
                          id="application-select"
                          defaultValue="Select Subcategory"
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
                          <MenuItem value="Select Subcategory">
                            Select Subcategory
                          </MenuItem>
                          <MenuItem value="Purchase Invoice">
                            Purchase Invoice
                          </MenuItem>
                          {/* <MenuItem value="Sales Invoice">
                            Sales Invoice
                          </MenuItem> */}

                          <MenuItem value="Application Form">
                            Proof of Payment
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </Stack>
                  </Box>

                  <TextField
                    label=" Search by Customer ID, Invoice No., Invoice Date, Company Name"
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
              )}
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
                            <Typography fontWeight="bold" mb={1}>
                              Invoice Date
                            </Typography>
                            <TextField
                              variant="standard"
                              size="small"
                              value={columnSearch.invoiceDate}
                              onChange={(e) => {
                                const value = e.target.value;
                                setColumnSearch((prev) => ({
                                  ...prev,
                                  invoiceDate: value,
                                }));
                                const query = value.toLowerCase();
                                const filtered = mockCustomerDocs.filter(
                                  (doc) =>
                                    String(doc.invoiceDate)
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
                                    String(doc.id).toLowerCase().includes(query)
                                );
                                setSearchResults(filtered);
                              }}
                              placeholder="Search  "
                              fullWidth
                            />
                          </TableCell>
                          <TableCell>
                            <Typography fontWeight="bold" mb={1}>
                              Invoice No.
                            </Typography>
                            <TextField
                              variant="standard"
                              size="small"
                              value={columnSearch.invoiceNo}
                              onChange={(e) => {
                                const value = e.target.value;
                                setColumnSearch((prev) => ({
                                  ...prev,
                                  invoiceNo: value,
                                }));
                                const query = value.toLowerCase();
                                const filtered = mockCustomerDocs.filter(
                                  (doc) =>
                                    String(doc.invoiceNo)
                                      .toLowerCase()
                                      .includes(query)
                                );
                                setSearchResults(filtered);
                              }}
                              placeholder="Search "
                              fullWidth
                            />
                          </TableCell>
                          <TableCell>
                            <Typography fontWeight="bold" mb={1}>
                              Invoice Amount
                            </Typography>
                            <TextField
                              variant="standard"
                              size="small"
                              value={columnSearch.invoiceAmount}
                              onChange={(e) => {
                                const value = e.target.value;
                                setColumnSearch((prev) => ({
                                  ...prev,
                                  invoiceAmount: value,
                                }));
                                const query = value.toLowerCase();
                                const filtered = mockCustomerDocs.filter(
                                  (doc) =>
                                    String(doc.invoiceAmount)
                                      .toLowerCase()
                                      .includes(query)
                                );
                                setSearchResults(filtered);
                              }}
                              placeholder="Search  "
                              fullWidth
                            />
                          </TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {searchResults
                          .filter(
                            (doc) =>
                              doc.invoiceNo
                                .toLowerCase()
                                .includes(filterInvoiceNo.toLowerCase()) &&
                              doc.companyName
                                .toLowerCase()
                                .includes(filterCompanyName.toLowerCase())
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
                                  onChange={() => setHideTable(true)}
                                />
                              </TableCell>
                              <TableCell>{doc.invoiceDate}</TableCell>

                              <TableCell>{doc.id}</TableCell>
                              <TableCell>{doc.invoiceNo}</TableCell>
                              <TableCell align="right">
                                {doc.invoiceAmount}
                              </TableCell>
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
                height: alertOpen ? "58vh" : "52vh",
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
                  <Typography sx={{ mb: 2, fontSize: 20, fontWeight: "bold" }}>
                    Document
                  </Typography>

                  <TextField
                    label="Customer ID"
                    fullWidth
                    value={formData.customerId}
                    sx={{ mb: 2 }}
                    // disabled={!selectedDoc}
                  />

                  <TextField
                    label="Invoice No."
                    fullWidth
                    value={formData.invoiceNo}
                    sx={{ mb: 2 }}
                    // disabled={!selectedDoc}
                  />
                </Paper>
              </Grid>
              <TransitionAlerts
                alertOpen={alertOpen}
                //   handleAlertClose={handleAlertClose}
                message={
                  "The document of the Invoice No. 123456 has been saved successfully."
                }
              />
              <Box sx={{ p: 1, mt: 2 }}>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                    // disabled={selectedDoc === null}
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
                    // disabled={!selectedDoc}
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
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Invoice;
