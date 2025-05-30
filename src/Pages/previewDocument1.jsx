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
  { value: "Accounts", label: "Accounts" },
  { value: "Sales", label: "Sales" },
];

const subcategories = {
  Finance: [
    { value: "Checklist", label: "Checklist" },
    { value: "Receipt", label: "Receipt" },
  ],
  Accounts: [
    { value: "Bank Statement", label: "Bank Statement" },
    { value: "Invoice", label: "Invoice" },
  ],
  Sales: [
    { value: "Tax", label: "Tax" },
    { value: "Checklist", label: "Checklist" },
  ],
};

const PreviewDocument1 = () => {
  const navigate = useNavigate();
  const [category, setCategory] = React.useState("Accounts");
  const [subcategory, setSubcategory] = React.useState("Invoice");

  return (
    <Box
      sx={{
        bgcolor: "#f2f4f5",
        // minHeight: "88vh",
        // py: 4,
        pl: "25px",
        // pt: "12px",
        // pr: "24px",
        // boxSizing: "border-box",
        // overflow: "hidden",
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
          <Grid item size={7}>
            {/* <Paper
              elevation={3}
              sx={{
                height: "62vh",
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
            </Paper> */}
            {/* <Paper
              elevation={3}
              sx={{
                height: "62vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="src/assets/invoice.jpg"
                alt="Invoice"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Paper> */}
            <Paper
              elevation={3}
              sx={{
                height: "62vh",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              <img
                src="src/assets/invoice.jpg"
                alt="Invoice"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Paper>
          </Grid>

          {/* Right Side - Form Fields */}
          <Grid item size={5}>
            <Paper
              elevation={3}
              sx={{
                height: "57vh",
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
                  //   type="date"
                  defaultValue="22/09/2020"
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
                  // label="Invoice No"
                  defaultValue="123456"
                  label="Transaction ID"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  sx={{ mb: 2 }}
                />

                <TextField
                  // label="Customer ID"
                  defaultValue="123"
                  label="Document ID"
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
            }}
          >
            Discard
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default PreviewDocument1;
