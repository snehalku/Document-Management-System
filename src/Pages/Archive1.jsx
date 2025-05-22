import React from "react";
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
  Paper,
  Divider,
} from "@mui/material";
import ID from "../assets/ID.jpg";
import Doc2 from "../assets/Doc2.png";

import { useState } from "react";

const Archive1 = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [searchCustomer, setSearchCustomer] = useState("");

  return (
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
          //   minHeight: "90vh",
          width: "100%",
          py: 1,
          ml: "70px",
          //   mt: "2px",
          mr: "24px",
          boxSizing: "border-box",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "row",
          // gap: 2,
        }}
      >
        <Card
          sx={{
            flex: 1.2,
            height: "87vh",
            position: "sticky",
            top: 0,
            alignSelf: "flex-start",
            overflowY: "hidden",
          }}
        >
          <Box sx={{ width: "100%", height: "auto" }}>
            <CardMedia
              component="img"
              image={Doc2}
              alt="Document"
              sx={{
                width: "100%",
                height: "110vh",
                objectFit: "contain",
              }}
            />
          </Box>
        </Card>

        <Box
          sx={{
            flex: 1,
            height: "100vh",
            p: 2,
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={1}>
            Customer KYC
          </Typography>

          {/* <Stack
            direction="row"
            spacing={2}
            sx={{ mb: 2 }}
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="body2" fontWeight="700">
              Select Department
            </Typography>

            <FormControl sx={{ minWidth: 150 }}>
              <Select
                labelId="application-select-label"
                id="application-select"
                defaultValue="Sales"
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
                <MenuItem value="Sales">Sales</MenuItem>
                <MenuItem value="Accounts">Accounts</MenuItem>
                <MenuItem value="Legal">Legal</MenuItem>
                <MenuItem value="HR">HR</MenuItem>
                <MenuItem value="Others">Others</MenuItem>
              </Select>
            </FormControl>
          </Stack> */}
          <Box display="flex" flexDirection="row">
            <Stack
              direction="row"
              spacing={2}
              sx={{ mb: 2, mr: 2 }}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Typography variant="body2" fontWeight="700">
                Category
              </Typography>

              <FormControl sx={{ minWidth: 150 }}>
                <Select
                  labelId="application-select-label"
                  id="application-select"
                  defaultValue="AML KYC"
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
                  <MenuItem value="AML KYC">AML KYC</MenuItem>
                  <MenuItem value="Account">Transaction</MenuItem>
                </Select>
              </FormControl>
            </Stack>

            <Stack
              direction="row"
              spacing={1.5}
              sx={{ mb: 2 }}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Typography variant="body2" fontWeight="700">
                Sub Category
              </Typography>

              <FormControl sx={{ minWidth: 130 }}>
                <Select
                  labelId="application-select-label"
                  id="application-select"
                  defaultValue="ID Proof"
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
                  <MenuItem value="ID Proof">ID Proof</MenuItem>
                  <MenuItem value="Address Proof">Address Proof</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Box>

          <Box mb={3}>
            <Box display="flex" alignItems="center" gap={2} flexWrap="wrap">
              <TextField
                label="Search by Date"
                type="date"
                size="small"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                label=" Search by Customer ID, Name, DOB, National ID"
                size="small"
                value={searchCustomer}
                onChange={(e) => setSearchCustomer(e.target.value)}
                sx={{ width: 250 }}
              />

              <Button
                variant="contained"
                color="primary"
                sx={{
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
          </Box>

          <Card
            sx={{
              height: "52vh",
              overflowY: "auto",
              p: 2,
            }}
          >
            <Grid item size={5}>
              <Paper
                sx={{
                  p: 2,
                  //   minHeight: "100%",
                  // height: "50vh",
                  //   overflow: "auto",
                  display: "flex",
                  flexDirection: "column",
                  //   justifyContent: "space-between",
                }}
              >
                <Typography sx={{ mb: 2, fontSize: 20, fontWeight: "bold" }}>
                  Document
                </Typography>
                <TextField
                  label="Category"
                  select
                  fullWidth
                  // value={category}
                  // onChange={(e) => setCategory(e.target.value)}
                  sx={{ mb: 2 }}
                  // disabled={!selectedDoc}
                >
                  <MenuItem value="passport"> AML KYC</MenuItem>
                  <MenuItem value="license"> Transaction</MenuItem>
                  {/* <MenuItem value="signature"> Signature Proof</MenuItem> */}
                </TextField>
                <TextField
                  label=" Sub Category"
                  select
                  fullWidth
                  // value={subcategory}
                  // onChange={(e) => setSubcategory(e.target.value)}
                  sx={{ mb: 2 }}
                  // disabled={!selectedDoc}
                >
                  <MenuItem value="idProof"> ID Proof</MenuItem>
                  <MenuItem value="addressProof"> Address Proof</MenuItem>
                </TextField>
                <TextField
                  label="Issue Date"
                  type="date"
                  fullWidth
                  // value={issueDate}
                  // onChange={(e) => setIssueDate(e.target.value)}
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                  // disabled={!selectedDoc}
                />

                <TextField
                  label="Expiry Date"
                  type="date"
                  fullWidth
                  // value={expiryDate}
                  // onChange={(e) => setExpiryDate(e.target.value)}
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                  // disabled={!selectedDoc}
                />

                <TextField
                  label="Version NO."
                  fullWidth
                  defaultValue="1.0"
                  sx={{ mb: 2 }}
                  // disabled={!selectedDoc}
                />

                <Divider
                  sx={{
                    mb: 2,
                    borderBottomWidth: 2,
                    borderColor: "black",
                  }}
                />
                <Typography sx={{ mb: 2, fontSize: 20, fontWeight: "bold" }}>
                  Transaction Data From OLTP System
                </Typography>
                <TextField
                  label="Customer ID / Transaction ID"
                  fullWidth
                  // value={selectedDoc?.id || ""}
                  sx={{ mb: 2 }}
                  // disabled={!selectedDoc}
                />
                <TextField
                  label="First Name"
                  fullWidth
                  // value={selectedDoc?.firstName || ""}
                  sx={{ mb: 2 }}
                  // disabled={!selectedDoc}
                />
                <TextField
                  label="Last Name"
                  fullWidth
                  // value={selectedDoc?.lastName || ""}
                  sx={{ mb: 2 }}
                  // disabled={!selectedDoc}
                />
                <TextField
                  label="Date of Birth"
                  fullWidth
                  // value={selectedDoc?.dob || ""}
                  sx={{ mb: 2 }}
                  // disabled={!selectedDoc}
                />
                <TextField
                  label="ID Number"
                  fullWidth
                  // value={selectedDoc?.nationalId || ""}
                  sx={{ mb: 2 }}
                  // disabled={!selectedDoc}
                />
              </Paper>
            </Grid>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="flex-end"
              marginTop="10px"
            >
              <Button
                variant="contained"
                color="primary"
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
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Archive1;
