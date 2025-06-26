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
    invoiceDate: "24-06-2025",
    invoiceAmountRu: "4725",
    invoiceAmount: "52.50",
    docId: "11",
    docName: "invoice_2025",
    category: "Accounts Payable",
    subCategory: "Purchase Invoice",
  },
  {
    id: "125",
    companyName: "Fujitsu",
    date: "2025-04-30",
    expiresOn: "2025-10-22",
    invoiceNo: "547896",
    invoiceDate: "24-06-2025",
    invoiceAmountRu: "8521",
    invoiceAmount: "94.68",
    docId: "13",
    docName: "invoice_2024",
    category: "Accounts Receivable",
    subCategory: "Credit Note",
  },
  {
    id: "126",
    companyName: "Infosys",
    date: "2025-04-30",
    expiresOn: "2025-10-22",
    invoiceNo: "457896",
    invoiceDate: "24-06-2025",
    invoiceAmountRu: "3569",
    invoiceAmount: "39.66",
    docId: "18",
    docName: "invoice_18",
    category: "Accounts Payable",
    subCategory: "Proof of Payment",
  },
  {
    id: "123",
    companyName: "Infotech",
    date: "2025-04-30",
    expiresOn: "2025-10-22",
    invoiceNo: "123456",
    invoiceDate: "24-06-2025",
    invoiceAmountRu: "971",
    invoiceAmount: "10.79",
    docId: "16",
    docName: "invoice_16",
    category: "Accounts Payable",
    subCategory: "Purchase Invoice",
  },
  {
    id: "127",
    companyName: "Maitland",
    date: "2025-04-30",
    expiresOn: "2025-10-22",
    invoiceNo: "457896",
    invoiceDate: "24-06-2025",
    invoiceAmountRu: "3599",
    invoiceAmount: "39.99",
    docId: "14",
    docName: "invoice_14",
    category: "Accounts Payable",
    subCategory: "Purchase Invoice",
  },
];

const Invoice = () => {

const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const handleWheel = (e) => {
    if (isImage) {
      e.preventDefault();
      const newZoom = zoom + (e.deltaY < 0 ? 0.1 : -0.1);
      setZoom(Math.min(Math.max(newZoom, 1), 3));
    }
  };

  const handleMouseDown = (e) => {
    if (!isImage || zoom <= 1) return;
    isDragging.current = true;
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const dx = e.clientX - lastPosition.current.x;
    const dy = e.clientY - lastPosition.current.y;
    setPosition((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    lastPosition.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const [zoom, setZoom] = useState(1);
  const [selectedDoc, setSelectedDoc] = useState(mockCustomerDocs[0]);
  const [previewDocPath, setPreviewDocPath] = useState(null);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.2, 0.5));
  };

  const docPath = previewDocPath || selectedDoc?.path || invoice1;
  const isImage =
    docPath?.toLowerCase().endsWith(".png") ||
    docPath?.toLowerCase().endsWith(".jpg") ||
    docPath?.toLowerCase().endsWith(".jpeg") ||
    docPath?.toLowerCase().endsWith(".gif");
  const [docList, setDocList] = useState([]);
  const [selectedDocName, setSelectedDocName] = useState("");
  // const [selectedDoc, setSelectedDoc] = useState(null);
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [confirmedDocIds, setConfirmedDocIds] = useState([]);
  const [docIdentifier, setDocIdentifier] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  const [filterInvoiceNo, setFilterInvoiceNo] = useState("");
  const [filterInvoiceDate, setFilterInvoiceDate] = useState("");
  const [filterCompanyName, setFilterCompanyName] = useState("");
  // const [previewDocPath, setPreviewDocPath] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [searchCustomer, setSearchCustomer] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hideTable, setHideTable] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Accounts");
  const [formCard, setFormCard] = useState(false);
  const [disable, setDisable] = useState(false);

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
    invoiceAmount: "",
    issueDate: "",
    expiryDate: "",
  });

  useEffect(() => {
    if (selectedDoc) {
      setFormData({
        // ...prev,
        customerId: selectedDoc.id || "",
        invoiceNo: selectedDoc.invoiceNo || "",
        invoiceAmount: selectedDoc.invoiceAmount || "",
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

  const handleSubcategory = () => {
    handleSearch();
  };

  const onCheck = () => {
    setHideTable(true);
    setFormCard(true);
    setConfirmedDocIds([id]);
  };

  const handleSelectSearchDoc = (doc) => {
    setSelectedDoc(doc);
    setCategory(doc.category || "");
    setSubcategory(doc.subcategory || "");
    setSelectedDocName(doc.docName);
    setSelectedDate(doc.date);
    setSearchCustomer(doc.invoiceNo);
    setConfirmedDocIds([]);
    // if (!confirmedDocIds.includes(doc.id)) {
    //   setConfirmedDocIds([...confirmedDocIds, doc.id]);
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
        invoiceNo: "",
        issueDate: "",
        expiryDate: "",
      });
    } else {
      setSelectedDoc(null);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setDisable(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [disable]);

  const handleSave = () => {
    setAlertOpen(true);
    setDisable(true);
    setTimeout(() => {
      setAlertOpen(false);
      setFormData({
        customerId: "",
        invoiceNo: "",
      });
      setSelectedCategory("Select Category");
      setSelectedDoc(null);
      setFormCard(false);
      setHideTable(false);
      showNextDocument();
      setSelectedDate(null);
      setSelectedCategory(selectedCategory), setSearchCustomer("");
      setSearchResults("");
      setCategory("");
      setSubcategory("");
      setIssueDate("");
      setExpiryDate("");
      setPreviewDocPath(invoice3);
      setConfirmedDocIds([]);
    }, 3000);
  };

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const departments = [
    { label: "Sales", route: "/archiveDocument1" },
    { label: "Accounts", route: "/invoice" },
    { label: "HR", route: "/hr" },
    { label: "Legal" },
  ];

  const handleFilter = (e) => {
    const value = e.target.value;
    setColumnSearch((prev) => ({
      ...prev,
      invoiceDate: value,
    }));
    const query = value;
    const filtered = mockCustomerDocs[0];
    setSearchResults(filtered);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <Header departments={departments} defValue={"Accounts"} />
      <Box
        sx={{
          bgcolor: "#f2f4f5",
          height: "100vh",
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
          {/* <Card
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
              const docPath = previewDocPath || selectedDoc?.path || invoice1;

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
                    src={`${docPath}`}
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
          </Card> */}

          <Box direction="column" width="50%">
            <Card
              sx={{
                flex: 1.2,
                height: "82vh",
                position: "sticky",
                marginTop: 2,
                alignSelf: "center",
                overflow: "hidden", // Avoid scrollbars from container
                p: 1,
              }}
            >
              <Box
                onWheel={handleWheel}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                sx={{
                  cursor: zoom > 1 ? "grab" : "default",
                  width: "100%",
                  height: "calc(100% - 60px)", // leave space for buttons
                  position: "relative",
                  overflow: "auto",
                  border: "2px solid",
                  borderColor: "grey.300",
                  borderRadius: 2,
                }}
              >
                {isImage ? (
                  <CardMedia
                    component="img"
                    image={docPath}
                    alt="Document"
                    sx={{
                      position: "absolute",
                      top: "80%",
                      left: "50%",
                      transform: `translate(-50%, -50%) scale(${zoom}) translate(${position.x}px, ${position.y}px)`,
                      transformOrigin: "center center",
                      objectFit: "contain",
                      borderRadius: 2,
                      boxShadow: 2,
                      transition: "transform 0.2s ease",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: 2,
                    }}
                  >
                    <iframe
                      src={`${docPath}#toolbar=0`}
                      title="Document Preview"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                      }}
                    />
                  </Box>
                )}
              </Box>

              <Box sx={{ pt: 2, pr: 1, pb: 2 }}>
                <Stack direction="row" spacing={2} justifyContent="flex-end">
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
                    Discard Document
                  </Button>
                </Stack>
              </Box>
            </Card>
          </Box>

          <Box
            sx={{
              flex: 1,
              pl: 2,
              pr: 2,
              width: "50%",
            }}
          >
            <Box
              sx={{
                position: "sticky",
              }}
            >
              <Typography variant="h6" fontWeight="bold" mb={1} mt={1}>
                Accounts - Invoice Document
              </Typography>

              {!hideTable && (
                <Card
                  sx={{
                    backgroundColor: "#fff",
                    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                    borderRadius: "5px",
                    padding: 2,
                    mb: 1,
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    gap={2}
                    flexWrap="wrap"
                  >
                    <Typography variant="body2" fontWeight="700">
                      Invoice Date
                      <span style={{ color: "red", marginLeft: "4px" }}>*</span>
                    </Typography>
                    <TextField
                      // label="Search by Invoice Date"
                      type="date"
                      size="small"
                      // value={selectedDate}
                      defaultValue={today}
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
                            // defaultValue="Select Category"
                            value={selectedCategory}
                            onChange={handleCategory}
                            // label="Application"
                            sx={{
                              height: "36px",
                              fontSize: "0.8rem",
                              borderRadius: "4px",
                            }}
                          >
                            <MenuItem value="Select Category">
                              Select Category
                            </MenuItem>
                            <MenuItem value="Accounts">
                              Accounts Payable
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
                            onChange={handleSubcategory}
                            sx={{
                              height: "36px",
                              fontSize: "0.8rem",
                              borderRadius: "4px",
                            }}
                          >
                            <MenuItem value="Select Subcategory">
                              Select Subcategory
                            </MenuItem>
                            <MenuItem value="Purchase Invoice">
                              Purchase Invoice
                            </MenuItem>
                            <MenuItem value="Credit Note">Credit Note</MenuItem>
                            <MenuItem value="Application Form">
                              Proof of Payment
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Stack>
                    </Box>
                  </Box>
                </Card>
              )}
            </Box>
            <Box sx={{ overflowY: "auto" }}>
              {!hideTable && searchResults.length > 0 && (
                <Paper
                  sx={{ p: 2, mb: 2, mt: 1, overflowY: "auto", maxHeight: 400 }}
                >
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    Select the appropriate record from the list below.
                    <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                    Supplier details from the OLTP system
                  </Typography>

                  <TableContainer
                    component={Paper}
                    sx={{
                      borderRadius: "10px 10px 0 0",
                      maxHeight: 355,
                      overflow: "auto",
                    }}
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
                              type="date"
                              value={columnSearch.invoiceDate}
                              onChange={handleFilter}
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
                              autoComplete="off"
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
                          <TableCell>
                            <Typography fontWeight="bold" mb={1}>
                              Supplier ID
                            </Typography>
                            <TextField
                              variant="standard"
                              size="small"
                              autoComplete="off"
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
                              Supplier Name
                            </Typography>
                            <TextField
                              variant="standard"
                              size="small"
                              autoComplete="off"
                              value={columnSearch.companyName}
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
                                  onChange={() => onCheck(doc.id)}
                                />
                              </TableCell>
                              <TableCell>{doc.invoiceDate}</TableCell>
                              <TableCell>{doc.invoiceNo}</TableCell>
                              <TableCell align="right">
                                €{doc.invoiceAmount}
                              </TableCell>
                              <TableCell>{doc.id}</TableCell>

                              <TableCell>{doc.companyName}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  {/* <Box display="flex" justifyContent="flex-end" mt={2} mb={1}>
                    <Button
                      variant="outlined"
                      color="secondary"
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
                  </Box> */}
                </Paper>
              )}
              {formCard && (
                <Card
                  sx={{
                    // height: alertOpen ? "58vh" : "50vh",
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
                        label="Supplier ID"
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

                      <TextField
                        label="Invoice Amount"
                        fullWidth
                        value={formData.invoiceAmount}
                        sx={{ mb: 2 }}
                        InputProps={{
                          startAdornment: (
                            <span style={{ marginRight: 4 }}>€</span>
                          ),
                        }}
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
                      {/* <Button
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
                      </Button> */}
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

export default Invoice;
