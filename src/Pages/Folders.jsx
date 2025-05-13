// import React, { useState } from "react";
// import {
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   Stack,
//   Divider,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
//   Box,
//   Paper,
// } from "@mui/material";

// const Folders = () => {
//   const [sourceDocs, setSourceDocs] = useState([
//     { id: 1, name: "passport.pdf" },
//     { id: 2, name: "aadhaar.jpg" },
//     { id: 3, name: "pan.png" },
//   ]);

//   const [selectedDoc, setSelectedDoc] = useState(null);
//   const [category, setCategory] = useState("");
//   const [subCategory, setSubCategory] = useState("");

//   const handleMove = () => {
//     if (selectedDoc && category && subCategory) {
//       console.log("Moved Document", {
//         ...selectedDoc,
//         category,
//         subCategory,
//       });

//       setSourceDocs(prev => prev.filter(doc => doc.id !== selectedDoc.id));
//       setSelectedDoc(null);
//       setCategory("");
//       setSubCategory("");
//     }
//   };

//   return (
//     <Box
//     sx={{
//       bgcolor: "#f2f4f5",
//       display: "flex",
//       justifyContent: "center",
//     }}
//   >
//     <Box
//       sx={{
//         bgcolor: "#f2f4f5",
//         minHeight: "90vh",
//         width: "100%",
//         py: 4,
//         pl: "70px",
//         pt: "12px",
//         pr: "24px",
//         boxSizing: "border-box",
//         overflow: "hidden",
//         position: "relative",
//       }}
//     >
//       <Paper
//         elevation={3}
//         sx={{
//           p: 3,
//           borderRadius: 2,
//           bgcolor: "#ffffff",
//           mb: 4,
//         }}
//       >
//     <Grid container spacing={4}>
//       {/* Source Folder */}
//       <Grid item xs={12} md={6}>
//         <Card variant="outlined" sx={{ height: '100%' }}>
//           <CardContent>
//             <Typography variant="h6" gutterBottom>📂 Source Folder</Typography>
//             <Divider sx={{ mb: 2 }} />
//             <Stack spacing={1}>
//               {sourceDocs.length === 0 && (
//                 <Typography>No documents in source folder.</Typography>
//               )}
//               {sourceDocs.map((doc) => (
//                 <Box
//                   key={doc.id}
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                     border: "1px solid #ccc",
//                     borderRadius: 1,
//                     p: 1,
//                   }}
//                 >
//                   <Typography>{doc.name}</Typography>
//                   <Button
//                     size="small"
//                     variant="contained"
//                     onClick={() => setSelectedDoc(doc)}
//                   >
//                     Select
//                   </Button>
//                 </Box>
//               ))}
//             </Stack>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Destination Folder */}
//       <Grid item xs={12} md={6}>
//         <Card variant="outlined" sx={{ height: '100%' }}>
//           <CardContent>
//             <Typography variant="h6" gutterBottom>📁 Destination Folder</Typography>
//             <Divider sx={{ mb: 2 }} />
//             {selectedDoc ? (
//               <Box>
//                 <Typography mb={2}>
//                   Moving: <strong>{selectedDoc.name}</strong>
//                 </Typography>

//                 <FormControl fullWidth sx={{ mb: 2 }}>
//                   <InputLabel>Category</InputLabel>
//                   <Select
//                     value={category}
//                     label="Category"
//                     onChange={(e) => setCategory(e.target.value)}
//                   >
//                     <MenuItem value="KYC">KYC</MenuItem>
//                     <MenuItem value="Finance">Finance</MenuItem>
//                     <MenuItem value="HR">HR</MenuItem>
//                   </Select>
//                 </FormControl>

//                 <FormControl fullWidth sx={{ mb: 2 }}>
//                   <InputLabel>Sub Category</InputLabel>
//                   <Select
//                     value={subCategory}
//                     label="Sub Category"
//                     onChange={(e) => setSubCategory(e.target.value)}
//                   >
//                     <MenuItem value="ID Proof">ID Proof</MenuItem>
//                     <MenuItem value="Address Proof">Address Proof</MenuItem>
//                     <MenuItem value="Tax Doc">Tax Doc</MenuItem>
//                   </Select>
//                 </FormControl>

//                 <Button
//                   variant="contained"
//                   fullWidth
//                   onClick={handleMove}
//                   disabled={!category || !subCategory}
//                 >
//                   Confirm Move
//                 </Button>
//               </Box>
//             ) : (
//               <Typography>Select a document from Source folder.</Typography>
//             )}
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//     </Paper>
//     </Box>
//     </Box>
//   );
// };

// export default Folders;

import React from "react";
import {
  Button,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  Typography,
  Stack,
  FormControl,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";

const folderPaths = [
  {
    name: "Source Folder",
    path: "C:\\DMS Old",
  },
  {
    name: "Discard Folder",
    path: "C:\\DMS Old",
  },
  {
    name: "Destination Folder",
    path: "C:\\DMS Old",
  },
];

const Folders = () => {
  const handleFolderSource = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      console.log("📁 Source Folder Selected:");
      console.log(files);
    }
  };

  const handleFolderDestination = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      console.log("📁 Destination Folder Selected:");
      console.log(files);
    }
  };

  const handleFolderDiscard = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      console.log("📁 Discard Folder Selected:");
      console.log(files);
    }
  };

  return (
    <Box sx={{ bgcolor: "#f2f4f5", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          bgcolor: "#f2f4f5",
          minHeight: "90vh",
          width: "100%",
          py: 4,
          pl: "70px",
          pt: "12px",
          pr: "24px",
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Typography variant="h5" fontWeight="bold" mb={1}>
          Folders
        </Typography>
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

        <Box display="flex" flexDirection="row" gap={3} mb={4}>
          {/* <Card elevation={3} sx={{ borderRadius: 2, bgcolor: "#ffffff" }}>
            <CardContent>
              <Button
                variant="contained"
                component="label"
                sx={{
                  bgcolor: "#99caff",
                  color: "#000",
                  "&:hover": {
                    bgcolor: "#80bfff",
                  },
                }}
              >
                Source Folder
                <input
                  type="file"
                  webkitdirectory="true"
                  directory=""
                  multiple
                  hidden
                  onChange={handleFolderSource}
                />
              </Button>
              <p>C:\documents\sourcefolder</p>
            </CardContent>
          </Card> */}

          <Card elevation={3} sx={{ borderRadius: 2, bgcolor: "#ffffff" }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Source Folder
              </Typography>

              <Box display="flex" alignItems="center" gap={2}>
                <TextField
                  label="Folder Path"
                  variant="outlined"
                  fullWidth
                  defaultValue="C:\\documents\\sourcefolder"
                  size="small"
                />
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    bgcolor: "#99caff",
                    color: "#000",
                    "&:hover": {
                      bgcolor: "#80bfff",
                    },
                  }}
                >
                  Update
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card elevation={3} sx={{ borderRadius: 2, bgcolor: "#ffffff" }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Destination Folder
              </Typography>

              <Box display="flex" alignItems="center" gap={2}>
                <TextField
                  label="Folder Path"
                  variant="outlined"
                  fullWidth
                  defaultValue="C:\\documents\\destinationfolder"
                  size="small"
                />
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    bgcolor: "#99caff",
                    color: "#000",
                    "&:hover": {
                      bgcolor: "#80bfff",
                    },
                  }}
                >
                  Update
                </Button>
              </Box>
            </CardContent>
          </Card>

          <Card elevation={3} sx={{ borderRadius: 2, bgcolor: "#ffffff" }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Discard Folder
              </Typography>

              <Box display="flex" alignItems="center" gap={2}>
                <TextField
                  label="Folder Path"
                  variant="outlined"
                  fullWidth
                  defaultValue="C:\\documents\\discardfolder"
                  size="small"
                />
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    bgcolor: "#99caff",
                    color: "#000",
                    "&:hover": {
                      bgcolor: "#80bfff",
                    },
                  }}
                >
                  Update
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Folders;
