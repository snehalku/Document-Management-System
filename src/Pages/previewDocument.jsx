// import React from "react";
// import {
//   Box,
//   TextField,
//   Typography,
//   MenuItem,
//   Grid,
//   Paper,
//   Button,
//   Stack,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const categories = [
//   { value: "Finance", label: "Finance" },
//   { value: "Account", label: "Account" },
//   { value: "Sales", label: "Sales" },
// ];

// const subcategories = {
//   Finance: [
//     { value: "Checklist", label: "Checklist" },
//     { value: "Receipt", label: "Receipt" },
//   ],
//  Account: [
//     { value: "Bank Statement", label: "Bank Statement" },
//     { value: "Invoice", label: "Invoice" },
//   ],
//  Sales: [
//     { value: "Tax", label: "Tax" },
//     { value: "Checklist", label: "Checklist" },
//   ],
// };

// const PreviewDocument = () => {
//   const navigate = useNavigate();
//   const [category, setCategory] = React.useState("Account");
//   const [subcategory, setSubcategory] = React.useState("Invoice");

//   return (
//     <Box
//       sx={{
//         bgcolor: "#f2f4f5",
//         // minHeight: "88vh",
//         py: 4,
//         pl: "70px",
//         pt: "12px",
//         pr: "24px",
//         boxSizing: "border-box",
//         overflow: "hidden",
//       }}
//     >
//       <Typography variant="h5" component="h1" fontWeight="bold" sx={{ mb: 2 }}>
//         Preview Document
//       </Typography>

//       <Paper
//         elevation={3}
//         sx={{
//           p: 4,
//           borderRadius: "10px",
//           // mb: 3,
//           // maxHeight: "78vh",
//           // overflow: "auto",

//         }}
//       >
//         <Grid container spacing={2}>
//             {/* Left Side - Invoice Image */}
//             <Grid item size={7} >
//               <Paper
//                 elevation={3}
//                 sx={{
//                   height: "62vh",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   src="src/assets/invoice.jpg"
//                   alt="Invoice"
//                   style={{ maxWidth: "100%", maxHeight: "100%" }}
//                 />
//               </Paper>
//             </Grid>

//             {/* Right Side - Form Fields */}
//             <Grid item size={5}>
//               <Paper
//                 elevation={3}
//                 sx={{
//                   height: "57vh",
//                   p: 2,
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                 }}
//               >
//               <Box>
//                 <Typography variant="h6" mb={2}>
//                   Invoice Details
//                 </Typography>

//                 <TextField
//                   label="Date"
//                   defaultValue="22/9/2020"
//                   // type="date"
//                   fullWidth
//                   // InputLabelProps={{ shrink: true }}
//                   sx={{ mb: 2 }}
//                 />

//                 <TextField
//                   label="Category"
//                   select
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   fullWidth
//                   sx={{ mb: 2 }}
//                 >
//                   {categories.map((option) => (
//                     <MenuItem key={option.value} value={option.value}>
//                       {option.label}
//                     </MenuItem>
//                   ))}
//                 </TextField>

//                 <TextField
//                   label="Subcategory"
//                   select
//                   value={subcategory}
//                   onChange={(e) => setSubcategory(e.target.value)}
//                   fullWidth
//                   sx={{ mb: 2 }}
//                   disabled={!category}
//                 >
//                   {(subcategories[category] || []).map((option) => (
//                     <MenuItem key={option.value} value={option.value}>
//                       {option.label}
//                     </MenuItem>
//                   ))}
//                 </TextField>

//                 <TextField
//                   // label="Invoice No"
//                   defaultValue="123456"
//                   label="Transaction ID"
//                   fullWidth
//                   InputLabelProps={{ shrink: true }}
//                   sx={{ mb: 2 }}
//                 />

//                 <TextField
//                   // label="Customer ID"
//                   defaultValue="123"
//                   label="Document ID"
//                   fullWidth
//                   InputLabelProps={{ shrink: true }}
//                   sx={{ mb: 2 }}
//                 />
//               </Box>
//             </Paper>
//           </Grid>
//         </Grid>

//         {/* Save and Discard Buttons */}
//         <Stack
//           direction="row"
//           spacing={2}
//           justifyContent="flex-end"
//           sx={{ mt: 2 }}
//         >
//          <Button
//           variant="contained"
//           sx={{
//             borderRadius: "10px",
//             bgcolor: "#99CAFF",
//             color: "black",
//             px: 3,
//             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow added here
//             "&:hover": {
//               bgcolor: "#7bb8ff",
//             },
//           }}
//             onClick={() => {
//               // navigate("/project1");
//               navigate("/documents");
//             }}
//           >
//             Save
//           </Button>
//           <Button
//           variant="outlined"
//           sx={{
//             borderRadius: "10px",
//             bgcolor: "#f2f4f5",
//             px: 3,
//             color: "black",
//             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//             border: "none", // 👈 override outlined variant's default border
//             "&:hover": {
//               bgcolor: "#e5e7e8",
//               border: "none", // 👈 make sure hover state also has no border
//             },
//           }}>
//             Discard
//           </Button>
//         </Stack>
//       </Paper>
//     </Box>
//   );
// };

// export default PreviewDocument;

// import React, { useState, useEffect } from "react";
// import pan_card from "../assets/pan_card.pdf"
// import pdf from "../assets/राहुरी बुद्रुक_482_1_अ_1_Satbara.pdf"
// import {
//   Box,
//   Grid,
//   Paper,
//   Typography,
//   TextField,
//   MenuItem,
//   Button,
//   Stack,
// } from "@mui/material";

// // const mockDocuments = {
// //   "2025-04-28": [
// //     {
// //       name: "kyc_001.jpg",
// //       type: "image",
// //       path: "/assets/kyc_001.jpg",
// //       category: "PAN",
// //     },
// //     {
// //       name: "kyc_002.pdf",
// //       type: "pdf",
// //       path: "/assets/kyc_002.pdf",
// //       category: "Aadhaar",
// //     },
// //   ],
// //   "2025-04-29": [
// //     {
// //       name: "kyc_003.jpg",
// //       type: "image",
// //       path: "/assets/kyc_003.jpg",
// //       category: "Voter ID",
// //     },
// //   ],
// // };
// const mockDocuments = {
//   "2025-04-30": [
//     {
//       name: "pan_card.pdf",
//       type: "pdf",
//       path: "/assets/pan_card.pdf",
//       category: "PAN",
//     },
//   ],
// };

// const PreviewKycPage = () => {
//   const [selectedDate, setSelectedDate] = useState("");
//   const [docList, setDocList] = useState([]);
//   const [selectedDocName, setSelectedDocName] = useState("");
//   const [selectedDoc, setSelectedDoc] = useState("");
//   const [category, setCategory] = useState("");

//   // Load document list when date changes
//   useEffect(() => {
//     const list = mockDocuments[selectedDate] || [];
//     setDocList(list);
//     setSelectedDocName("");
//     setSelectedDoc(null);
//   }, [selectedDate]);

//   // Load selected document
//   useEffect(() => {
//     const doc = docList.find((d) => d.name === selectedDocName);
//     if (doc) {
//       setSelectedDoc(doc);
//       setCategory(doc.category || "");
//     }
//   }, [selectedDocName, docList]);

//   const handleSave = () => {
//     if (!selectedDoc || !category) return;

//     const newFileName = `kyc_${category}_${Date.now()}.${selectedDoc.name.split(".").pop()}`;

//     console.log("Saving to DB:", {
//       original: selectedDoc.name,
//       newName: newFileName,
//       category,
//       date: selectedDate,
//     });

//     // Simulate DB save
//     alert(`Saved as ${newFileName}`);
//   };

//   const handleDiscard = () => {
//     alert(`Document ${selectedDoc.name} moved to trash`);
//     setSelectedDoc(null);
//     setSelectedDocName("");
//   };

//   return (
//     // <Box sx={{ p: 4, backgroundColor: "#f5f5f5", height: "100vh" }}>
//     <Box
//           sx={{
//             bgcolor: "#f2f4f5",
//             // minHeight: "88vh",
//             py: 4,
//             pl: "70px",
//             pt: "12px",
//             pr: "24px",
//             boxSizing: "border-box",
//             overflow: "hidden",
//           }}
//         >
//       <Typography variant="h5" fontWeight="bold" mb={3}>
//         KYC Document Verification
//       </Typography>

//       <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
//         <Grid container spacing={2}>
//           {/* Left - Document Preview */}
//           <Grid item size={7} >
//             <Paper
//               sx={{
//                 height: "65vh",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 overflow: "auto",
//               }}
//               elevation={2}
//             >
//               <iframe
//                 src={`${pan_card}#toolbar=0`}
//                 title="PAN Card"
//                 width="100%"
//                 height="100%"
//               />
//             </Paper>
//           </Grid>

//           {/* Right - Metadata and Actions */}
//           <Grid item size={5}>
//             <Paper sx={{ p: 2, height: "60vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
//               <Box>
//                 <TextField
//                   label="Select Date"
//                   type="date"
//                   fullWidth
//                   value={selectedDate}
//                   onChange={(e) => setSelectedDate(e.target.value)}
//                   InputLabelProps={{ shrink: true }}
//                   sx={{ mb: 2 }}
//                 />

//                 <TextField
//                   label="KYC Document"
//                   select
//                   fullWidth
//                   value={selectedDocName}
//                   onChange={(e) => setSelectedDocName(e.target.value)}
//                   sx={{ mb: 2 }}
//                   disabled={!docList.length}
//                 >
//                   {docList.map((doc) => (
//                     <MenuItem key={doc.name} value={doc.name}>
//                       {doc.name}
//                     </MenuItem>
//                   ))}
//                 </TextField>

//                 <TextField
//                   label="Document Type"
//                   select
//                   fullWidth
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   sx={{ mb: 2 }}
//                   disabled={!selectedDoc}
//                 >
//                   <MenuItem value="PAN">PAN</MenuItem>
//                   <MenuItem value="Aadhaar">Aadhaar</MenuItem>
//                   <MenuItem value="Voter ID">Voter ID</MenuItem>
//                   <MenuItem value="Passport">Passport</MenuItem>
//                 </TextField>
//               </Box>
//             </Paper>
//           </Grid>
//         </Grid>
//         <Stack direction="row" spacing={2} justifyContent="flex-end" mt={2}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   onClick={handleSave}
//                   disabled={!selectedDoc}
//                 >
//                   Save
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="secondary"
//                   onClick={handleDiscard}
//                   disabled={!selectedDoc}
//                 >
//                   Discard
//                 </Button>
//               </Stack>
//       </Paper>
//     </Box>
//   );
// };

// export default PreviewKycPage;

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
    firstName: "David R",
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
    setDocIdentifier("National ID"); // Or extract from `doc` if available

    // Optional: You can also directly add to confirmed IDs here
    if (!confirmedDocIds.includes(doc.id)) {
      setConfirmedDocIds([...confirmedDocIds, doc.id]);
    }
  };

  const handleSave = () => {
    navigate("/documents");
    // if (!selectedDoc || !docIdentifier ) return;

    // const newFileName = `kyc_${category}_${Date.now()}.${selectedDoc.docName.split(".").pop()}`;

    // console.log("Saving to DB:", {
    //   original: selectedDoc.docName,
    //   newName: newFileName,
    //   documentId: docIdentifier,
    //   category,
    //   subcategory,
    //   date: selectedDate,
    // });

    // setConfirmedDocIds([...confirmedDocIds, selectedDoc.id]);
    setShowSnackbar(true); // 👈 Show snackbar after save
    console.log("Snackbar should show now"); // ✅ Debug log
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
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow added here
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
                  {/* This sets smaller base row height */}
                  <TableHead>
                    <TableRow sx={{ bgcolor: "#99caff", "& td": { py: 0.5 } }}>
                      {" "}
                      {/* Reduce head cell padding */}
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
                        sx={{ cursor: "pointer", "& td": { py: 0.5 } }} // Reduce vertical padding in body
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
                height: "65vh",
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
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                {/* <TextField
                  label="Document ID"
                  fullWidth
                  value={docIdentifier}
                  onChange={(e) => setDocIdentifier(e.target.value)}
                  sx={{ mb: 2 }}
                  disabled={!selectedDoc}
                /> */}
                <Typography sx={{ mb: 1, fontSize: 20, fontWeight: "bold" }}>
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
                {/* <TextField
                  label="Card Expiry Date"
                  fullWidth
                  value={selectedDoc?.expiresOn || ""}
                  sx={{ mb: 2 }}
                /> */}
                {/* <TextField label="Subcategory" select fullWidth value={subcategory} onChange={(e) => setSubcategory(e.target.value)} sx={{ mb: 2 }} disabled={!selectedDoc}>
                  <MenuItem value="Primary">Primary</MenuItem>
                  <MenuItem value="Secondary">Secondary</MenuItem>
                </TextField> */}
                <Divider
                  sx={{
                    mb: 2,
                    borderBottomWidth: 2,
                    borderColor: "black",
                  }}
                />
                <Typography sx={{ mb: 1, fontSize: 20, fontWeight: "bold" }}>
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

                  {/* <MenuItem value="PAN">ID Proof</MenuItem>
                  <MenuItem value="Aadhaar">Address Proof</MenuItem>
                  <MenuItem value="Voter ID">Voter ID</MenuItem>
                  <MenuItem value="Passport">Passport</MenuItem> */}
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
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Shadow added here
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
                border: "none", // 👈 override outlined variant's default border
                "&:hover": {
                  bgcolor: "#e5e7e8",
                  border: "none", // 👈 make sure hover state also has no border
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
              sx={{ width: "100%" }}
            >
              Data saved successfully!
            </Alert>
          </Snackbar>
        </Box>
      </Paper>
    </Box>
  );
};

export default PreviewKycPage;
