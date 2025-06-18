import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  Typography,
  Stack,
  Grid,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Layout/Header";

const EditUser = () => {
  const navigate = useNavigate();
  const departments = [
    { label: "Sales", route: "/documents" },
    { label: "Accounts", route: "/invoiceDocument" },
    { label: "HR", route: "/hrDocument" },
    { label: "Legal" },
  ];

  return (
    <div>
      <Header departments={departments} defValue={"Sales"} />

      <Box
        sx={{ bgcolor: "#f2f4f5", display: "flex", justifyContent: "center" }}
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
          <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
            <Typography variant="h6" component="h1" fontWeight="bold">
              Edit User
            </Typography>
          </Stack>

          <Paper
            elevation={4}
            sx={{
              p: 3,
              borderRadius: "10px",
              mb: 1,
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <Typography
                    variant="body1"
                    fontWeight="500"
                    sx={{ mr: 6, whiteSpace: "nowrap" }}
                  >
                    Name <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    defaultValue="Emily Johnson	"
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <Typography
                    variant="body1"
                    fontWeight="500"
                    sx={{ mr: 9.5, whiteSpace: "nowrap" }}
                  >
                    Mail <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    defaultValue="emilyjohnson@gmail.com"
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <Typography
                    variant="body1"
                    fontWeight="500"
                    sx={{ mr: 7, whiteSpace: "nowrap" }}
                  >
                    Role <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    defaultValue="Admin"
                  />
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <Typography
                    variant="body1"
                    fontWeight="500"
                    sx={{ mr: 2, whiteSpace: "nowrap" }}
                  >
                    Responsibility <span style={{ color: "red" }}>*</span>
                  </Typography>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    defaultValue="Manages all users, departments, and documents."
                  />
                </Box>
              </Box>
            </Box>
          </Paper>

          <Box sx={{ p: 1 }}>
            <Stack direction="row" spacing={2} justifyContent="flex-end">
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate("/user")}
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
                Back
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => navigate("/user")}
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
                Update
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default EditUser;
