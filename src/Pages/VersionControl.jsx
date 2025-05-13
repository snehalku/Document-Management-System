import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  Paper,
  Button,
  Stack,
} from "@mui/material";

const versionData = [
  {
    version: 1,
    uploadedBy: "Alice",
    uploadDate: "2024-03-01",
    path: "/docs/doc_v1.pdf",
  },
  {
    version: 2,
    uploadedBy: "Bob",
    uploadDate: "2024-04-01",
    path: "/docs/doc_v2.pdf",
  },
];

export default function VersionControl() {
  const [selectedVersion, setSelectedVersion] = useState(versionData[versionData.length - 1]);

  const handleVersionChange = (e) => {
    const selected = versionData.find((v) => v.version === e.target.value);
    setSelectedVersion(selected);
  };

  return (
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
              pt: "12px",
              pr: "24px",
              boxSizing: "border-box",
              overflow: "hidden",
              position: "relative",
            }}
          >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        View Document Versions
      </Typography>

      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="subtitle1">Select Version:</Typography>
        <Select
          value={selectedVersion.version}
          onChange={handleVersionChange}
          sx={{ mt: 1, mb: 2, width: "200px" }}
        >
          {versionData.map((v) => (
            <MenuItem key={v.version} value={v.version}>
              Version {v.version} - {v.uploadDate}
            </MenuItem>
          ))}
        </Select>

        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Button variant="outlined" onClick={() => alert("Restore")}>
            Restore
          </Button>
          <Button
            variant="contained"
            onClick={() => window.open(selectedVersion.path, "_blank")}
          >
            Download / Preview
          </Button>
        </Stack>

        {/* <iframe
          src={selectedVersion.path}
          title="Document Viewer"
          style={{ width: "100%", height: "600px", border: "1px solid #ccc" }}
        /> */}
      </Paper>
    </Box>
    </Box>
  );
}
