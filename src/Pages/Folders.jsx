import React, { useRef, useState } from "react";
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
import Header from "../Components/Layout/Header";

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
      const fullPath = files[0].webkitRelativePath;
      const folderName = fullPath.split("/")[0]; // gets the folder name
      setSourceFolderName(folderName);
      console.log("📁 Source Folder Selected:", folderName);
      console.log(files);
    }
  };
  const sourceInputRef = useRef(null);
  const destinationInputRef = useRef(null);
  const discardInputRef = useRef(null);

  const handleFolderSelect = (e, label) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      console.log(`📁 ${label} Folder Selected:`);
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
  const departments = [
    { label: "Sales", route: "/documents" },
    { label: "Accounts", route: "/invoiceDocument" },
    { label: "HR", route: "/hrDocument" },
    { label: "Legal" },
  ];

  const [sourceFolderName, setSourceFolderName] = useState("");
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
                defaultValue="sales"
                sx={{
                  // bgcolor: "#f2f4f5",
                  height: "45px",
                  borderRadius: "5px",
                }}
              >
                <MenuItem value="sales">Sales</MenuItem>
                <MenuItem value="accounts">Accounts</MenuItem>
                <MenuItem value="legal">Legal</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Box display="flex" flexDirection="row" gap={3} mb={4}>
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
                    defaultValue="C:\\kycdocuments\\sourcefolder"
                    size="small"
                  />
                  <input
                    type="file"
                    webkitdirectory="true"
                    multiple
                    hidden
                    ref={sourceInputRef}
                    onChange={(e) => handleFolderSource(e, "Source")}
                  />

                  <Button
                    variant="contained"
                    onClick={() => sourceInputRef.current.click()}
                    sx={{
                      bgcolor: "#99caff",
                      color: "#000",
                      "&:hover": { bgcolor: "#80bfff" },
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
                    defaultValue="C:\\kycdocuments\\destinationfolder"
                    size="small"
                  />
                  <input
                    type="file"
                    webkitdirectory="true"
                    multiple
                    hidden
                    ref={destinationInputRef}
                    onChange={(e) => handleFolderSelect(e, "Destination")}
                  />

                  <Button
                    variant="contained"
                    onClick={() => destinationInputRef.current.click()}
                    sx={{
                      bgcolor: "#99caff",
                      color: "#000",
                      "&:hover": { bgcolor: "#80bfff" },
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
                    defaultValue="C:\\kycdocuments\\discardfolder"
                    size="small"
                  />
                  <input
                    type="file"
                    webkitdirectory="true"
                    multiple
                    hidden
                    ref={discardInputRef}
                    onChange={(e) => handleFolderSelect(e, "Discard")}
                  />

                  <Button
                    variant="contained"
                    onClick={() => discardInputRef.current.click()}
                    sx={{
                      bgcolor: "#99caff",
                      color: "#000",
                      "&:hover": { bgcolor: "#80bfff" },
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
    </div>
  );
};

export default Folders;
