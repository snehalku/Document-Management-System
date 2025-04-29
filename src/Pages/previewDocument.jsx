import React from "react";
import {
  Box,
  TextField,
  Typography,
  MenuItem,
  Grid,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const categories = [
  { value: "Finance", label: "Finance" },
  { value: "Operations", label: "Operations" },
];

const subcategories = {
  Finance: [
    { value: "Invoice", label: "Invoice" },
    { value: "Receipt", label: "Receipt" },
  ],
  Operations: [
    { value: "Report", label: "Report" },
    { value: "Checklist", label: "Checklist" },
  ],
};

const PreviewDocument = () => {
  const navigate = useNavigate();
  const [category, setCategory] = React.useState("");
  const [subcategory, setSubcategory] = React.useState("");

  return (
    <Box
      sx={{
        bgcolor: "#f2f4f5",
        // minHeight: "88vh",
        py: 4,
        pl: "70px",
        pt: "12px",
        pr: "24px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <Typography variant="h5" component="h1" fontWeight="bold" sx={{ mb: 2 }}>
        Preview Document
      </Typography>

      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: "10px",
          // mb: 3,
          // maxHeight: "78vh",
          // overflow: "auto",
         
        }}
      >
        <Grid container spacing={2}>
            {/* Left Side - Invoice Image */}
            <Grid item size={7} >
              <Paper
                elevation={3}
                sx={{
                  height: "60vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src="src/assets/invoice.jpg"
                  alt="Invoice"
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                />
              </Paper>
            </Grid>

            {/* Right Side - Form Fields */}
            <Grid item size={5}>
              <Paper
                elevation={3}
                sx={{
                  height: "55vh",
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
              <Box>
                <Typography variant="h6" mb={2}>
                  Invoice Details
                </Typography>

                <TextField
                  label="Date"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />

                <TextField
                  label="Category"
                  select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  fullWidth
                  sx={{ mb: 2 }}
                >
                  {categories.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  label="Subcategory"
                  select
                  value={subcategory}
                  onChange={(e) => setSubcategory(e.target.value)}
                  fullWidth
                  sx={{ mb: 2 }}
                  disabled={!category}
                >
                  {(subcategories[category] || []).map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  label="Invoice No"
                  defaultValue="123456"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />

                <TextField
                  label="Customer ID"
                  defaultValue="123"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Save and Discard Buttons */}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="flex-end"
          sx={{ mt: 2 }}
        >
         <Button
          variant="contained"
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
            onClick={() => {
              // navigate("/project1");
              navigate("/documents");
            }}
          >
            Save
          </Button>
          <Button
          variant="outlined"
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
          }}>
            Discard
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default PreviewDocument;
