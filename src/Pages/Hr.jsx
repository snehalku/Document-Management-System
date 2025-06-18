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
import hr1 from "../assets/hr1.png";
import hr2 from "../assets/hr2.png";
import SearchIcon from "@mui/icons-material/Search";
import { Snackbar, Alert } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TransitionAlerts from "../Components/ui/Notification";
import Header from "../Components/Layout/Header";

const mockCustomerDocs = [
  {
    id: "EMP001",
    firstName: "Andrew ",
    lastName: "Prendergrast",
    transactionId: "TXN123",
    date: "2025-05-28",
    dob: "01-05-2006",
    doj: "06-06-2025",

    expiresOn: "2024-08-22",
    nationalId: "5843216645678904",
    degree: "BA",
    department: "Sales",
  },
  {
    id: "EMP045",
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
  },

  {
    id: "EMP036",
    firstName: "Andrew",
    lastName: "Smith",
    transactionId: "TXN123",
    date: "2025-05-28",
    dob: "14-11-1998",
    doj: "06-06-2025",

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

    expiresOn: "2030-11-12",
    nationalId: "A123456",
    degree: "BE",
    department: "IT",
  },
];
const HR = () => {
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
  const [filterDoj, setFilterDoj] = useState("");
  const [formCard, setFormCard] = useState(false);
  const [filterNationalId, setFilterNationalId] = useState("");
  const [previewDocPath, setPreviewDocPath] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [searchCustomer, setSearchCustomer] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hideTable, setHideTable] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    "Educational Qualification"
  );

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
    issueDate: "",
    expiryDate: "",
    // versionNo: "1.0",
  });

  useEffect(() => {
    if (selectedDoc) {
      setFormData((prev) => ({
        ...prev,
        customerId: selectedDoc.id || "",
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
        doc.degree.toLowerCase().includes(query) ||
        doc.department.toLowerCase().includes(query)
      );
    });
    setSearchResults(results);
  };

  const onCheck = () => {
    setHideTable(true);
    setFormCard(true);
  };

  const handleSubcategory = () => {
    handleSearch();
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
    setAlertOpen(true);

    setTimeout(() => {
      setAlertOpen(false);
      setFormData({
        customerId: "",
        issueDate: "",
        expiryDate: "",
        // versionNo: " ",
      });
      setSelectedDoc(null);
      setFormCard(false);
      setHideTable(false);
      showNextDocument();
      setSelectedDate(null);
      setSelectedCategory("sel"), setSearchCustomer("");
      setSearchResults("");
      setCategory("");
      setSubcategory("");
      setIssueDate("");
      setExpiryDate("");
      setPreviewDocPath(hr2);
    }, 3000);
  };

  const snackbarRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (snackbarRef.current && !snackbarRef.current.contains(event.target)) {
        if (showSnackbar) {
          // Close the snackbar
          setShowSnackbar(false);

          // Move to the next document
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
  return (
    <div>
      <Header departments={departments} defValue={"HR"} />
      <Box
        sx={{
          bgcolor: "#f2f4f5",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          mt: 1,
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
              const docPath = previewDocPath || selectedDoc?.path || hr1;

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
                        Date
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
                            //  defaultValue="Select Category"
                            value={selectedCategory}
                            onChange={(e) =>
                              setSelectedCategory(e.target.value)
                            }
                            defaultValue="sel"
                            // label="Application"
                            sx={{
                              // bgcolor: "#f2f4f5",
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
                          <span style={{ color: "red", marginLeft: "4px" }}>
                            *
                          </span>
                        </Typography>

                        <FormControl sx={{ minWidth: 160 }}>
                          <Select
                            labelId="application-select-label"
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
                            <MenuItem value="sel">Select Subcategory</MenuItem>

                            <MenuItem value=" Degree Certificate ">
                              Degree Certificate
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
                <Paper sx={{ p: 2, mb: 2, mt: 1 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    Select the appropriate record from the list below.
                    <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <Typography sx={{ mb: 1, fontWeight: "bold" }}>
                    Employee details from the OLTP system
                  </Typography>

                  <TableContainer
                    component={Paper}
                    sx={{
                      borderRadius: "10px 10px 0 0",
                      maxHeight: 400,
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
                              Employee ID
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
                                    doc.firstName.toLowerCase().includes(query)
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
                              value={columnSearch?.lastName}
                              onChange={(e) => {
                                const value = e.target.value;
                                setColumnSearch((prev) => ({
                                  ...prev,
                                  lastName: value,
                                }));
                                const query = value.toLowerCase();
                                // const filtered = mockCustomerDocs?.filter(
                                //   (doc) =>
                                //     doc.lastName.toLowerCase().includes(query)
                                // );
                                // setSearchResults(filtered);
                              }}
                              placeholder="Search  "
                              fullWidth
                            />
                          </TableCell>
                          <TableCell>
                            <Typography fontWeight="bold" mb={1}>
                              Degree
                            </Typography>
                            <TextField
                              variant="standard"
                              size="small"
                              value={columnSearch.degree}
                              onChange={(e) => {
                                const value = e.target.value;
                                setColumnSearch((prev) => ({
                                  ...prev,
                                  degree: value,
                                }));
                                const query = value.toLowerCase();
                                const filtered = mockCustomerDocs.filter(
                                  (doc) =>
                                    doc.degree.toLowerCase().includes(query)
                                );
                                setSearchResults(filtered);
                              }}
                              placeholder="Search"
                              fullWidth
                            />
                          </TableCell>
                          <TableCell>
                            <Typography fontWeight="bold" mb={1}>
                              Department
                            </Typography>
                            <TextField
                              variant="standard"
                              size="small"
                              //   type="date"
                              value={columnSearch.department}
                              onChange={(e) => {
                                const value = e.target.value;
                                setColumnSearch((prev) => ({
                                  ...prev,
                                  department: value,
                                }));
                                const query = value.toLowerCase();
                                const filtered = mockCustomerDocs.filter(
                                  (doc) =>
                                    doc.department.toLowerCase().includes(query)
                                );
                                setSearchResults(filtered);
                              }}
                              placeholder="Search"
                              fullWidth
                            />
                          </TableCell>
                          <TableCell>
                            <Typography fontWeight="bold" mb={1}>
                              Date of Joining
                            </Typography>
                            <TextField
                              variant="standard"
                              size="small"
                              type="date"
                              value={columnSearch.doj}
                              onChange={(e) => {
                                const value = e.target.value;
                                setColumnSearch((prev) => ({
                                  ...prev,
                                  doj: value,
                                }));
                                const query = value.toLowerCase();
                                const filtered = mockCustomerDocs.filter(
                                  (doc) => doc.doj.toLowerCase().includes(query)
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
                              doc.dob
                                .toLowerCase()
                                .includes(filterDob.toLowerCase()) &&
                              doc.doj
                                .toLowerCase()
                                .includes(filterDoj.toLowerCase()) &&
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
                                  onChange={onCheck}
                                />
                              </TableCell>

                              <TableCell>{doc.id}</TableCell>
                              <TableCell>{doc.firstName}</TableCell>
                              <TableCell>{doc.lastName}</TableCell>
                              <TableCell>{doc.degree}</TableCell>
                              <TableCell>{doc.department}</TableCell>
                              {/* <TableCell>{doc.dob}</TableCell> */}
                              <TableCell>{doc.doj}</TableCell>
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
                </Paper>
              )}
              {formCard && (
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
                        label="Employee ID"
                        fullWidth
                        value={formData.customerId}
                        sx={{ mb: 2 }}
                      />
                    </Paper>
                  </Grid>
                  <TransitionAlerts
                    alertOpen={alertOpen}
                    //   handleAlertClose={handleAlertClose}
                    message={
                      "The document of the Employee ID EMP001 has been saved successfully."
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
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default HR;
